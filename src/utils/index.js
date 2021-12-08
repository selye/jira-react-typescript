export const isFalsy = (value) => value === 0 ? false : !value
// 改变本身是不对的
export const cleanObject = (object) => {
    const result = {...object}
    Object.keys(result).forEach(key => {
        const value = result[key]
        if(isFalsy(value)){
            delete result[key]
        }
    })
    return result
}