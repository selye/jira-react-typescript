import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"

/* 返回指定页面url中指定key的参数 */
export const useUrlQueryParam = <K extends string>(keys: K[]) => {
    const [searchParam, setSearchParam] = useSearchParams()
    return [
        useMemo(
            () => keys.reduce((prev, key) => {
                return {
                    ...prev,
                    [key]: searchParam.get(key) || ""
                }
            }, {} as { [key in K]: string }),
            [searchParam, keys]),
        setSearchParam
    ] as const
}