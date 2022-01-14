import { List } from "./list";
import { SearchPanel } from "./search-panel";
import React, { useState, useEffect } from "react";
import { cleanObject, useMount, useDebounce } from "utils";
import qs from "qs";
import { useHTTP } from "utils/http";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);

  const [list, setList] = useState([]);

  //  2: debunce监听params变化  返回最后一个执行的debuncedValue
  const debuncedParam = useDebounce(param, 1000);

  const client = useHTTP()

  useEffect(() => {
    client('projects', {data: cleanObject(debuncedParam)}).then(setList)
    //  3: 当得到最终的debuncedValue的时候   去请求接口
  }, [debuncedParam]);

  useMount(() => {
    client('users').then(setUsers)
  });
  return (
    <div>
      {/* 1: 当子组件改变父组件的param */}
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
