import { Button, Drawer, Form, Input, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import { ErrorBox } from "components/lib";
import { UserSelect } from "components/user-select";
import React, { useEffect } from "react";
import { useAddProject, useEditProject } from "utils/project";
import { useProjectModal } from "./util";

export const ProjectModal: React.FC = () => {
  const { projectModalOpen, close, editProject, isLoading } = useProjectModal();
  console.log("isLoading", isLoading);

  const form = useForm()[0];
  const useMutateProject = editProject ? useEditProject : useAddProject;
  const { mutateAsync, error, isLoading: mutateLoading } = useMutateProject();

  const onFinish = (values: any) => {
    console.log({ ...editProject }, { ...values });

    mutateAsync({ ...editProject, ...values }).then(() => {
      form.resetFields();
      close();
    });
  };
  const closeModal = () => {
    form.resetFields();
    close();
  };

  useEffect(() => {
    form.setFieldsValue(editProject);
  }, [editProject, form]);

  const title = editProject ? "编辑项目" : "新增项目";

  return (
    <Drawer
      forceRender={true}
      width={"100%"}
      visible={projectModalOpen}
      onClose={closeModal}
    >
      {isLoading ? (
        <Spin size={"large"} />
      ) : (
        <>
          <h1>{title}</h1>
          <ErrorBox error={error} />
          <Form
            onFinish={onFinish}
            form={form}
            layout={"vertical"}
            style={{ width: "40rem" }}
          >
            <Form.Item
              label={"名称"}
              name={"name"}
              rules={[
                {
                  required: true,
                  message: "请输入项目名称",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={"部门"}
              name={"organization"}
              rules={[
                {
                  required: true,
                  message: "请输入部门名称",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label={"负责人"} name={"personId"}>
              <UserSelect defaultOptionName={"负责人"} />
            </Form.Item>
            <Form.Item>
              <Button
                loading={mutateLoading}
                type={"primary"}
                htmlType={"submit"}
              >
                提交
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </Drawer>
  );
};
