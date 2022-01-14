import { Button, Card, Divider } from "antd";
import { useState } from "react";
import { LoginScreens } from "./login";
import { RegisterScreens } from "./regiter";
import styled from "@emotion/styled";
import logoImg from "../asstes/logo.svg";
import leftImg from "../asstes/left.svg";
import rightImg from "../asstes/right.svg";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Divider />
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {isRegister ? <RegisterScreens /> : <LoginScreens />}
        <div style={{ height: "20px" }}></div>
        <a onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? `已经有账号了？直接登录` : `没有账号?注册新账号`}
        </a>
      </ShadowCard>
    </Container>
  );
};

export const LongButton = styled(Button)`
  width: 100%;
`

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${leftImg}), url(${rightImg});
`;

const Header = styled.header`
  background: url(${logoImg}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0%.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
