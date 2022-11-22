import { useQuery } from "react-query";
import { Task } from "types/task";
import { useHTTP } from "./http";

export const useTask = (param?: Partial<Task>) => {
    const client = useHTTP();

    return useQuery<Task[], Error>(["Tasks", param], () => client("Tasks", { data: param }))
}