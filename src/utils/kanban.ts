import { useQuery } from "react-query";
import { Kanban } from "types/kanban";
import { Task } from "types/task";
import { useHTTP } from "./http";

export const useKanbans = (param?: Partial<Kanban>) => {
    const client = useHTTP();

    return useQuery<Task[], Error>(["Kanbans", param], () => client("Kanbans", { data: param }))
}