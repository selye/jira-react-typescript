import { useCallback, useState } from "react"
/* 
1  2   1   2   3   4
1  2   1   2   3
1  2   1   2
1  2   1
[2,3,4]
*/
export const useUndo = <T>(initialPresent: T) => {
    // const [past, setPast] = useState<T[]>([])   // 过去
    // const [present, setPresent] = useState<T>(initialPresent)   //  现在
    // const [future, setFuture] = useState<T[]>([])  // 未来



    const [state, setState] = useState<
        {
            past: T[],
            present: T,
            future: T[]
        }
    >({
        past: [],
        present: initialPresent,
        future: []
    })
    const canUndo = state.past.length !== 0
    const canRedo = state.future.length !== 0

    const undo = useCallback(() => {
        setState(currentState => {
            const { past, present, future } = currentState
            if (past.length === 0) return currentState
            const pervious = past[past.length - 1]
            const newPast = past.slice(0, past.length - 1)
            return {
                past: newPast,
                present: pervious,
                future: [present, ...future]
            }
        })
    }, [])

    const redo = useCallback(() => {
        setState(currentState => {
            const { past, present, future } = currentState
            if (future.length === 0) return currentState
            const next = future[0]
            const newFutrue = future.slice(1)
            return {
                past: [...past, present],
                present: next,
                future: newFutrue
            }
        })
    }, [])

    const set = useCallback((newPresent: T) => {
        setState(currentState => {
            const { past, present, future } = currentState
            if (newPresent === present) return currentState
            return {
                past: [...past, present],
                present: newPresent,
                future: []
            }
        })
    }, [])

    const reset = useCallback((newPresent: T) => {
        setState(() => {
            return {
                past: [],
                present: newPresent,
                future: []
            }
        })
    }, [])


    return [
        {
            state,
        },
        {
            undo, redo, set, reset, canUndo, canRedo,
        }
    ]
}
