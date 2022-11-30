import { cleanObject } from './index';
import { useMemo } from "react"
import { URLSearchParamsInit, useSearchParams } from "react-router-dom"

/* 返回指定页面url中指定key的参数 */
export const useUrlQueryParam = <K extends string>(keys: K[]) => {
    const [searchParam] = useSearchParams()
    const setSearchParams = useSetUrlSearchParam()
    return [
        useMemo(
            () => keys.reduce((prev, key) => {
                return {
                    ...prev,
                    [key]: searchParam.get(key) || ""
                }
            }, {} as { [key in K]: string }),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [searchParam]),
        (params: Partial<{ [key in K]: unknown }>) => {
            return setSearchParams(params)
        }
    ] as const
}

export const useSetUrlSearchParam = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (params: { [key in string]: unknown }) => {
        const o = cleanObject({
            ...Object.fromEntries(searchParams),
            ...params
        }) as URLSearchParamsInit;
        return setSearchParams(o)
    }
}
