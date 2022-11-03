import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { ReactComponent as SoftWareLogo } from "../src/asstes/software-logo.svg";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import { ProjectScreen } from "screens/project";
import { resetRouter } from "utils";
import { useState } from "react";
import { ProjectModal } from "screens/project-list/project-modal";
import { ProjectPopover } from "components/project-popover";
import { useProjectModal } from "screens/project-list/util";

export const AuthenicatedApp = () => {
  // const [projectModalOpen, setProjectModalOpen] = useState<boolean>(false);

  return (
    <Container>
      <Router>
        <PageHeader />
        <Main>
          <Routes>
            <Route index element={<ProjectListScreen />} />
            <Route path={"/projects"} element={<ProjectListScreen />}></Route>
            <Route
              path={"/projects/:projectId/*"}
              element={<ProjectScreen />}
            ></Route>
          </Routes>
        </Main>
        <ProjectModal />
      </Router>
    </Container>
  );
};

const PageHeader = () => {
  const { logOut, user } = useAuth();
  const menu = (
    <Menu>
      <Menu.Item key={"logOut"}>
        <Button onClick={logOut}>登出</Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <Button style={{ padding: "0" }} type={"link"} onClick={resetRouter}>
          <SoftWareLogo width={"18rem"} color={"rgb(38,132,255)"} />
        </Button>
        <ProjectPopover />
        <span>用户</span>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown overlay={menu}>
          <Button type={"link"}>
            Hi· {user?.name}
            <DownOutlined />
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const Container = styled.div`
  height: 100vh;
`;

const Header = styled(Row)`
  margin-bottom: 0.6em;
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div`
  margin-left: auto;
`;
const Main = styled.main`
  grid-area: main;
`;
