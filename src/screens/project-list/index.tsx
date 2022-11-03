/* eslint-disable react-hooks/exhaustive-deps */
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import React, { useEffect, useState } from "react";
import { useDebounce, useDocumentTitle } from "utils";
import styled from "@emotion/styled";
import { Button, Col, Row, Typography } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/users";
import { useUrlQueryParam } from "utils/url";
import { useProjectModal } from "./util";

export const ProjectListScreen = () => {
  // const [, setParam] = useState({
  //   name: "",
  //   personId: "",
  // });
  // const [keys] = useState<("name" | "personId")[]>(["name", "personId"]);
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  const { open } = useProjectModal();
  const debuncedParam = useDebounce(param, 1000);
  const { isLoading, error, data: list } = useProjects(debuncedParam);
  const { data: users } = useUsers();
  useDocumentTitle("项目列表", false);

  return (
    <Container>
      {/* 1: 当子组件改变父组件的param */}
      <Row justify={"space-between"}>
        <h1>项目列表</h1>
        <Button onClick={open}>创建项目</Button>
      </Row>

      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} users={users || []} dataSource={list || []} />

      {/* <Calendar dateCellRender={dateCellRender} /> */}
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = false;

const Container = styled.div`
  padding: 3.2rem;
`;
