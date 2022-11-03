import { Button, Drawer } from "antd";
import React from "react";
import { useProjectModal } from "./util";

export const ProjectModal: React.FC = () => {
  const { projectModalOpen, close } = useProjectModal();

  return (
    <Drawer width={"100%"} visible={projectModalOpen} onClose={close}>
      <h1>Project Modal</h1>
      <Button onClick={close}>关闭</Button>
    </Drawer>
  );
};
