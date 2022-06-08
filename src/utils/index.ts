import { useEffect, useRef, useState } from 'react'

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

export const useDocumentTitle = (title: string, keepUnMontAlive: boolean = true) => {
    // const oldTitle = document.title
    const oldTitle = useRef(document.title).current;
    // 第一次加载  document.title = "jira管理系统"
    console.log("加载时title:" + oldTitle)

    useEffect(() => {
        // title依赖发生变化，document.title = 传进来的入参
        document.title = title
        console.log("加载完成的title:" + document.title)
    }, [title])

    useEffect(() => {
        return () => {
            // 离开页面时 如果不希望保持状态 重新将document.title =     
            if (!keepUnMontAlive) {
                console.log("卸载时title:" + oldTitle)
                document.title = oldTitle
            }
        }
    }, [keepUnMontAlive, oldTitle])
}

export const resetRouter = () => {
    window.location.href = window.location.origin
}

