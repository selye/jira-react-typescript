import { useQuery } from "react-query";
import { User } from "screens/project-list/search-panel";
import { useHTTP } from "./http";

export const useUsers = (param?: Partial<User>) => {
    const client = useHTTP();
    return useQuery<User[]>(["users", param], () =>
        client("users", { data: param })
    );
}