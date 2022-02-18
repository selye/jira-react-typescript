import { Form, Input } from "antd";
import { useAuth } from "context/auth-context";
import React from "react";
import { LongButton } from "unauthnticated-app";

// const apiUrl = process.env.REACT_APP_API_URL;

export const RegisterScreens = () => {
  const { register } = useAuth();
  const handleSubmit = (value: { username: string; password: string }) => {
    register(value);
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
        注册
      </LongButton>
    </Form>
  );
};
