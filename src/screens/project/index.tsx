import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

export const ProjectScreen = () => {
  const project = [
    {
      id: 1,
      name: "李寻欢",
      skill: "小李飞刀",
    },
    {
      id: 2,
      name: "阿飞",
      skill: "无情剑",
    },
    {
      id: 3,
      name: "乔峰",
      skill: "降龙掌",
    },
    {
      id: 4,
      name: "段誉",
      skill: "一阳指",
    },
    {
      id: 5,
      name: "虚竹",
      skill: "北冥功",
    },
  ];

  const [personArray, setPersonArray] = useState(project); // 数据源
  const [itemIndex, setItemIndex] = useState<number>(0); // 数组下标

  const itemChoose = (itemId: number) => {
    setItemIndex(itemId);
  };
  const upItem = () => {
    if (itemIndex === 0) {
      console.log("已经第一项了");
      return;
    }
    //  [1,2,3,4,5 ]
    // splice(1,0,)
    personArray.splice(itemIndex - 1, 0, personArray[itemIndex]); // 在上一项插入
    personArray.splice(itemIndex + 1, 1); // 删除后一项
    setPersonArray([...personArray]);
    console.log(personArray);
  };
  const downItem = () => {
    console.log("down");
  };

  return (
    <div>
      {personArray.map((item, index) => {
        return (
          <Contain
            key={item.id}
            onClick={() => {
              itemChoose(index);
            }}
          >
            <p>名称:{item.name}</p>
            <p>技能:{item.skill}</p>
          </Contain>
        );
      })}
      <BtnBox>
        <Button color={"primary"} onClick={upItem}>
          上移
        </Button>
        <Button color={"warnning"} onClick={downItem}>
          下移
        </Button>
      </BtnBox>
    </div>
  );
};

const Contain = styled.div`
  width: 800px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  cursor: pointer;
`;
const BtnBox = styled.div`
  text-align: center;
  width: 800px;
  margin: 0 auto;
`;
