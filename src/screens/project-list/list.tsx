import { Button, Dropdown, Menu, Table, TableProps } from "antd";
import { Pin } from "components/pin";
import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";
import { useEditProject } from "utils/project";
import { User } from "./search-panel";
import { useProjectModal } from "./util";

export interface Project {
  id: number;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps extends TableProps<Project> {
  users: User[];
}

export const List = ({ users, ...props }: ListProps) => {
  const { mutate } = useEditProject();
  const { open } = useProjectModal();
  const pinProject = (id: number) => (pin: boolean) => {
    console.log("pin", pin);
    mutate({ id, pin });
  };
  return (
    <Table
      pagination={false}
      rowKey={(record) => record.id}
      columns={[
        {
          title: <Pin disabled={true} checked={true} />,
          dataIndex: "pinChecked",
          render: (_, record) => (
            <Pin checked={record.pin} onCheckedChange={pinProject(record.id)} />
          ),
        },
        {
          title: "名称",
          key: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, project) {
            return (
              <Link to={String(`/projects/${project.id}`)}>{project.name}</Link>
            );
          },
        },
        {
          title: "部门",
          dataIndex: "organization",
          key: "organization",
        },
        {
          title: "负责人",
          key: "person",
          render(project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
        {
          title: "创建时间",
          key: "created",
          dataIndex: "created",
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : "无"}
              </span>
            );
          },
        },
        {
          render(_, record) {
            return (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key={"edit"}>
                      <Button onClick={open}>创建项目</Button>
                    </Menu.Item>
                  </Menu>
                }
              >
                <Button type={"link"}>...</Button>
              </Dropdown>
            );
          },
        },
      ]}
      {...props}
    />
  );
};
