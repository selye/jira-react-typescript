import { Button, Form, Input } from "antd";
import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
import { LongButton } from "unauthnticated-app";

// const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreens = () => {
  const { user, login } = useAuth();
  const handleSubmit = (value: { username: string; password: string }) => {
    login(value);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"请输入用户名"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"请输入密码"} type={"password"} />
      </Form.Item>
      <LongButton htmlType={"submit"} type={"primary"}>
        登录
      </LongButton>
    </Form>
  );
};
