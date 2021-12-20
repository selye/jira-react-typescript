import { useArray } from "./testhooks";

export interface P {
  name: string;
  age: number;
}
export const ReactHookTest = () => {
  const persons: P[] = [
    {
      name: "Jack Ma",
      age: 20,
    },
    {
      name: "Pony Ma",
      age: 30,
    },
  ];
  const {value, add, removeIndex, clear }  = useArray(persons)

  return (
    <div>
      <button onClick={() => add({
        name:"john",
        age:33
      })}>add</button>
      <button onClick={() =>removeIndex(0) }>removeIndex0</button>
      <button onClick={() => clear()}>clear</button>
      <ul>
        {value.map((person: P, index: number) => {
          return (
            <li key={index}>
              <p>
                {index}: 名称: {person.name}
              </p>
              <p>年龄: {person.age}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
