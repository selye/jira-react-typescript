import styled from "@emotion/styled";
import { Button, Divider, List, Popover, Typography } from "antd";
import React from "react";
import { useProjectModal } from "screens/project-list/util";
import { useProjects } from "utils/project";

export const ProjectPopover: React.FC = () => {
  const { open } = useProjectModal();
  const { data: projects } = useProjects();
  const pinProjectts = projects?.filter((project) => project.pin);
  const content = (
    <ContainerDiv>
      <Typography.Text type={"secondary"}>收藏项目</Typography.Text>
      <List>
        {pinProjectts?.map((project) => (
          <List.Item>
            <List.Item.Meta key={project.id}>{project.name}</List.Item.Meta>
          </List.Item>
        ))}
      </List>
      <Divider />
      <Button onClick={open}>创建项目</Button>
    </ContainerDiv>
  );
  return (
    <Popover placement={"bottom"} content={content}>
      项目
    </Popover>
  );
};

const ContainerDiv = styled.div`
  min-width: 30rem;
`;
