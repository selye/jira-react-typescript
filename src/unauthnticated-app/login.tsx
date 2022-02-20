import { Form, Input } from "antd";
import { useAuth } from "context/auth-context";
import React from "react";
import { LongButton } from "unauthnticated-app";
import { useAsync } from "utils/use-async";

// const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreens = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { login } = useAuth();
  const { run, isLoading } = useAsync();
  const handleSubmit = async (value: {
    username: string;
    password: string;
  }) => {
    try {
      // try catch 无法捕获promise异步的报错
      await run(login(value));
    } catch (e: any) {
      onError(e);
    }
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
      <LongButton loading={isLoading} htmlType={"submit"} type={"primary"}>
        登录
      </LongButton>
    </Form>
  );
};
