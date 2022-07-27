/* eslint-disable react-hooks/exhaustive-deps */
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import React, { useState } from "react";
import { useDebounce, useDocumentTitle } from "utils";
import styled from "@emotion/styled";
import { Col, Row, Typography } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/users";

export const ProjectListScreen = (props: { projectButton: JSX.Element }) => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const { projectButton } = props
  const debuncedParam = useDebounce(param, 1000);
  const { isLoading, error, data: list } = useProjects(debuncedParam);
  const { data: users } = useUsers();
  useDocumentTitle("项目列表", false);

  return (
    <Container>
      {/* 1: 当子组件改变父组件的param */}
      <Row justify={"space-between"}>
        <Col span={12}>
          <h1>项目列表</h1>
        </Col>
        <Col span={12} style={{ "textAlign": "right" }}>
          {projectButton}
        </Col>
      </Row>

      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List projectButton={projectButton} loading={isLoading} users={users || []} dataSource={list || []} />

      {/* <Calendar dateCellRender={dateCellRender} /> */}
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
