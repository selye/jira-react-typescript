import styled from "@emotion/styled";
import React from "react";
import { Spin, Typography } from "antd";
import { DevTools } from "jira-dev-tool";

export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  margin-bottom: ${(props) => props.marginBottom + "rem"};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
    typeof props.gap === "number"
      ? props.gap + "rem"
      : props.gap
        ? "2rem"
        : undefined};
  }
`;

const Fullpage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FullpageLoading = () => (
  <Fullpage>
    <Spin size={"large"} />
  </Fullpage>
);

/* 类型守卫 */
const isError = (value: any): value is Error => value?.message;

export const ErrorBox = ({ error }: { error: unknown }) => {
  if (isError(error)) {
    return <Typography.Text type={"danger"}>{error?.message}</Typography.Text>;
  } else {
    return null;
  }
};

export const FullpageError = ({ error }: { error: Error | null }) => (
  <Fullpage>
    <DevTools />
    <Typography.Text type={"danger"}>{error?.message}</Typography.Text>
  </Fullpage>
);
