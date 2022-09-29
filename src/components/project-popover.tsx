import styled from "@emotion/styled";
import { Button, Divider, List, Popover, Typography } from "antd";
import React from "react";
import { useProjects } from "utils/project";
import { useDispatch } from "react-redux";
import { projectListActions } from "screens/project-list/project-list-slice";

export const ProjectPopover: React.FC = () => {
  const dispatch = useDispatch();
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
      <Button onClick={() => dispatch(projectListActions.openProjectModal())}>
        创建项目
      </Button>
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
