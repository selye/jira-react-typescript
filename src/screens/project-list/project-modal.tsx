import { Button, Drawer } from "antd";
import React from "react";

interface ProjectModalProps {
    projectModalOpen: boolean;
    onCancel: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = (props) => {
    const { projectModalOpen, onCancel } = props
    return <Drawer width={"100%"} visible={projectModalOpen} onClose={() => onCancel()}>
        <h1>Project Modal</h1>
        <Button onClick={() => onCancel()}>关闭</Button>
    </Drawer >
}
