import { useEffect, useState } from 'react'

export const isFalsy = (value: unknown) => value === 0 ? false : !value
export const isVoid = (value: unknown) => value === undefined || value === null || value === ""
// 改变本身是不对的
export const cleanObject = (object: { [key: string]: unknown }) => {
    const result = { ...object }
    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isVoid(value)) {
            delete result[key]
        }
    })
    return result
}

export const useMount = (callBack: () => void) => {
    useEffect(() => {
        callBack()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export const useDebounce = <V>(value: V, delay?: number) => {
    const [debuncedValue, setDebuncedValue] = useState(value)
    useEffect(() => {
        const timeOut = setTimeout(() => setDebuncedValue(value), delay)
        return () => clearTimeout(timeOut)
    }, [value, delay])
    return debuncedValue
}