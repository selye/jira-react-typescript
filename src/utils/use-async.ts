import { useState } from "react"

interface State<D> {
    data: D | null,
    error: Error | null,
    status: "idle" | "loading" | "error" | "success"
}

const defaultInitalState: State<null> = {
    data: null,
    error: null,
    status: "idle"
}

export const useAsync = <D>(initalState?: State<D>) => {
    const [state, setState] = useState<State<D>>({
        ...defaultInitalState,
        ...initalState
    })

    const setData = (data: D) => setState({
        data,
        status: "success",
        error: null
    })

    const setError = (error: Error) => setState({
        error,
        data: null,
        status: "error"
    })

    // 进行异步请求
    const run = (promise: Promise<D>) => {
        if (!promise || !promise.then()) {
            throw new Error("请传入promise类型")
        }
        setState({
            ...state, status: "loading"
        })
        return promise.then(data => {
            setData(data)
            return data
        }).catch(error => {
            setError(error)
            return error
        })
    }

    return {
        isAdle: state.status === "idle",
        isLoading: state.status === "loading",
        isError:state.status === "error",
        isSuccess: state.status === "success",
        ...state,
        run,
        setData,
        setError
    }

}

