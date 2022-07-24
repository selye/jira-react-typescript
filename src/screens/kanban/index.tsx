import { Radio } from "antd";
import React from "react";
import { useSpring, animated } from "react-spring";
import "./index.less";

interface OptionProp {
  id: number;
  content: string;
}

const option: OptionProp[] = [
  {
    content: "银水污染",
    id: 1,
  },
  {
    content: "银水污染",
    id: 2,
  },
  {
    content: "银水污染",
    id: 3,
  },
  {
    content: "银水污染",
    id: 4,
  },
  {
    content: "银水污染",
    id: 5,
  },
  {
    content: "银水污染",
    id: 6,
  },
];

export const KanbanScreens = () => {
  const styles = useSpring({
    delay: 2000,
    from: {
      x: -100,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
  });

  return (
    <div className="container">
      <animated.div style={styles} className="contain-left">
        <p>你平时的工作环境是什么样子的？</p>
      </animated.div>
      <div className="contain-right">
        <Radio.Group>
          {option.map((item) => {
            return (
              <>
                <Radio key={item.id} value={item.id}>
                  {item.content}
                </Radio>
              </>
            );
          })}
        </Radio.Group>
      </div>
    </div>
  );
};
