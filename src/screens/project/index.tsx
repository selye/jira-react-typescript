import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { EpicScreens } from "screens/epic";
import { KanbanScreens } from "screens/kanban";

export const ProjectScreen = () => {
  return (
    <div>
      <h1>详情</h1>
      <Link to={"kanban"}>看板</Link>
      <Link to={"epic"}>任务组</Link>
      <Routes>
        <Route path={"/kanban"} element={<KanbanScreens />}></Route>
        <Route path={"/epic"} element={<EpicScreens />}></Route>
        <Route index element={<KanbanScreens />} />
      </Routes>
    </div>
  );
};
