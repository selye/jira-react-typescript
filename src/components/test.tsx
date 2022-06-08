import { Button } from "antd";
import React, { useEffect, useState } from "react";

const test = () => {
  let num = 0;
  const effect = () => {
    num += 1;
    const message = `num的值:${num}`;
    const unMount = () => {
      console.log(message);
    };
    return unMount;
  };
  return effect;
};

const add = test();
const unMount = add();
add();
add();
unMount();

export const Test = () => {
  const [count, setCount] = useState<number>(0);

  const add = () => {
    setCount((count) => (count += 1));
  };

  // useCallback  返回一个回调函数
  // useMemo 返回一个回调函数的值

  useEffect(() => {
    return () => {
      console.log("卸载值:" + count);
    };
  }, [count]);

  return (
    <div>
      <Button onClick={add}>add</Button>
      <p>{count}</p>
    </div>
  );
};
