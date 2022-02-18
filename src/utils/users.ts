import { useEffect } from "react";
import { User } from "screens/project-list/search-panel";
import { cleanObject } from "utils";
import { useHTTP } from "./http";
import { useAsync } from "./use-async";

export const useUsers = (param?: Partial<User>) => {
    const client = useHTTP();

    const { run, ...result } = useAsync<User[]>();

    useEffect(() => {
        run(client("users", { data: cleanObject(param || {}) }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param]);

    return result
}