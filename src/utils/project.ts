import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Project } from "screens/project-list/list";
import { useHTTP } from "./http";
import { useAsync } from "./use-async";


export const useProjects = (param?: Partial<Project>) => {
    const client = useHTTP();

    return useQuery<Project[], Error>(["projects", param], () => client("projects", { data: param }))
}

export const useEditProject = () => {
    const client = useHTTP();
    const queryClient = useQueryClient()
    return useMutation((params: Partial<Project>) => client(`projects/${params.id}`, {
        method: "PATCH",
        data: params
    }), {
        onSuccess: () => {
            /* 更新成功之后 使之前缓存的数据失效 */
            queryClient.invalidateQueries(["projects"])
        }
    }
    )
}
export const useAddProject = () => {
    const client = useHTTP();
    const queryClient = useQueryClient()
    return useMutation((params: Partial<Project>) => client(`projects/${params.id}`, {
        method: "POST",
        data: params
    }), {
        onSuccess: () => {
            /* 更新成功之后 使之前缓存的数据失效 */
            queryClient.invalidateQueries(["projects"])
        }
    }
    )
}