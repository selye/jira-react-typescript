import { useState } from "react";

export const useArray = <T>(initArray: T[]) => {
    const [value, setValue] = useState(initArray)
    return {
        value,
        add: (item: T) => setValue([...value, item]),
        clear: () => setValue([]),
        removeIndex: (item: number) => {
            const copy = [...value]
            copy.splice(item, 1)
            setValue(copy)
        } 
    }
}

