/* eslint-disable react-hooks/exhaustive-deps */
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import React, { useState } from "react";
import { useDebounce, useDocumentTitle } from "utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/users";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debuncedParam = useDebounce(param, 1000);
  const { isLoading, error, data: list } = useProjects(debuncedParam);
  const { data: users } = useUsers();
  useDocumentTitle("列表", false);

  return (
    <Container>
      {/* 1: 当子组件改变父组件的param */}
      <h1>项目列表</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} users={users || []} dataSource={list || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
