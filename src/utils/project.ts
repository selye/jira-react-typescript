import { useEffect } from "react";
import { Project } from "screens/project-list/list";
import { cleanObject } from "utils";
import { useHTTP } from "./http";
import { useAsync } from "./use-async";


export const useProjects = (param?: Partial<Project>) => {
    const client = useHTTP();

    const { run, ...result } = useAsync<Project[]>();

    useEffect(() => {
        console.log("param", param)
        run(client("projects", { data: cleanObject(param || {}) }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param]);

    return result
}

export const useEditProject = () => {
    const client = useHTTP();
    const { run, ...asyncResult } = useAsync();
    const mutate = (params: Partial<Project>) => {
        console.log("params", params)
        return run(client(`projects/${params.id}`, {
            data: {
                pin: false
            },
            method: "PATCH"
        }))
    }
    return {
        mutate,
        asyncResult
    }
}
export const useAddProject = () => {
    const client = useHTTP();
    const { run, ...asyncResult } = useAsync();
    const mutate = (params: Partial<Project>) => {
        return run(client(`projects/${params.id}`, {
            data: params,
            method: "POST"
        }))
    }
    return {
        mutate,
        asyncResult
    }
}