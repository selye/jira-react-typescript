import { List } from "./list"
import { SearchPanel } from "./search-panel"
import React, { useState, useEffect } from "react"
import { cleanObject, useMount, useDebounce } from "utils"
import * as Qs from "qs"

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {

    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    const [users, setUsers] = useState([])

    const [list, setList] = useState([])

    //  2: debunce监听params变化  返回最后一个执行的debuncedValue
    const debuncedParam = useDebounce(param, 1000)

    useEffect(() => {
        //  3: 当得到最终的debuncedValue的时候   去请求接口
        fetch(`${apiUrl}/projects?${Qs.stringify(cleanObject(debuncedParam))}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [debuncedParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    })
    return <div>
        {/* 1: 当子组件改变父组件的param */}
        <SearchPanel users={users} param={param} setParam={setParam} />
        <List users={users} list={list} />
    </div>
}