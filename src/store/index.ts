import { configureStore } from "@reduxjs/toolkit";
import { projectListSlice } from "screens/project-list/project-list-slice";
import { authSlice } from "./auth-slice";
import { useDispatch as useRedeuxDispatch } from "react-redux"

export const rootReducer = {
  projectList: projectListSlice.reducer,
  auth: authSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const projectListOpen = (state: RootState) =>
  state.projectList.projectListOpen;

export const useDispatch = () => useRedeuxDispatch<AppDispatch>()
