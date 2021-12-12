import { useEffect, useState } from 'react'

export const isFalsy = (value: any) => value === 0 ? false : !value
// 改变本身是不对的
export const cleanObject = (object: object) => {
    const result = { ...object }
    Object.keys(result).forEach(key => {
        // @ts-ignore
        const value = result[key]
        if (isFalsy(value)) {
            // @ts-ignore
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


export const useDebounce = (value: any, delay?: number) => {
    const [debuncedValue, setDebuncedValue] = useState(value)
    useEffect(() => {
        const timeOut = setTimeout(() => setDebuncedValue(value), delay)
        return () => clearTimeout(timeOut)
    }, [value, delay])
    return debuncedValue
}