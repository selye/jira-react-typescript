import { List } from "./list"
import { SearchPanel } from "./search-panel"
import React, { useState, useEffect } from "react"
import { cleanObject } from "utils"
import * as Qs from "qs"

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {

    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    const [users, setUsers] = useState([])

    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects?${Qs.stringify(cleanObject(param))}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [param])

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    }, [])
    return <div>
        <SearchPanel users={users} param={param} setParam={setParam} />
        <List users={users} list={list} />
    </div>
}