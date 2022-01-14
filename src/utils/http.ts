import * as auth from "auth-provider"
import { useAuth } from "context/auth-context";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
    data?: object,
    token?: string
}

export const http = async (endpoint: string, {
    data,
    token,
    headers,
    ...customConfig
}: Config = {}) => {
    const config = {
        method: "GET",
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
            'Content-Type': data ? 'application/json' : ""
        },
        ...customConfig
    }
    if (config.method.toUpperCase() === "GET") {
        endpoint += `?${qs.stringify(data)}`
    } else if (config.method.toUpperCase() === "POST") {
        config.body = JSON.stringify(data || {})
    }
    return window.fetch(`${apiUrl}/${endpoint}`, config).then(async response => {
        if (response.status === 401) {
            //登出
            await auth.logOut();
            window.location.reload()
            return Promise.reject({
                messagge: "重新登陆"
            })
        }
        const data = await response.json()
        if (response.ok) {
            return data
        } else {
            return Promise.reject(data)
        }
    })
}

export const useHTTP = () => {
    const { user } = useAuth();
    return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: user?.token })
}

