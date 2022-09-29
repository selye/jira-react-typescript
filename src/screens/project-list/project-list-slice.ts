
import { createSlice } from '@reduxjs/toolkit'

interface State {
    projectListOpen: boolean
}

const initialState: State = {
    projectListOpen: false
}

export const projectListSlice = createSlice({
    name: "projectListSlice",
    initialState,
    reducers: {
        openProjectModal: (state) => {
            state.projectListOpen = true
        },
        closeProjectModal: (state) => {
            state.projectListOpen = false
        }
    }
})

export const projectListActions = projectListSlice.actions
