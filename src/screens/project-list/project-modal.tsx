import { Button, Drawer } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectListOpen } from "store";
import { projectListActions } from "./project-list-slice";

export const ProjectModal: React.FC = () => {
  const projectModalOpen = useSelector(projectListOpen);
  const dispatch = useDispatch();
  return (
    <Drawer
      width={"100%"}
      visible={projectModalOpen}
      onClose={() => dispatch(projectListActions.closeProjectModal())}
    >
      <h1>Project Modal</h1>
      <Button onClick={() => dispatch(projectListActions.closeProjectModal())}>
        关闭
      </Button>
    </Drawer>
  );
};
