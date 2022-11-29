import { useQuery } from "react-query";
import { TaskType } from "types/task-type";
import { useHTTP } from "./http";

/* 获取task类型 */
export const useTaskType = () => {
    const client = useHTTP();

    return useQuery<TaskType[], Error>(["taskTypes"], () => client("taskTypes"))
}