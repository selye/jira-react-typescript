import { useEffect, useState } from "react"



export const useOnline = () => {
    const [isOnline, setIsOnline] = useState<boolean>(false)

    useEffect(() => {
        /* 判断是否在线 */
        setIsOnline(true)
    }, [])

    return isOnline

}