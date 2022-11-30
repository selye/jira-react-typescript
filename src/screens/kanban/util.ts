import { useMemo } from 'react';
import { useProject } from './../../utils/project';
import { useLocation } from "react-router"
import { useUrlQueryParam } from 'utils/url';

export const useProjectIdInUrl = () => {
    const { pathname } = useLocation()
    const id = pathname.match(/projects\/(\d+)/)?.[1]
    return Number(id)
}

export const useProjectInUrl = () => useProject(useProjectIdInUrl())

/* 获取看板id */
export const useKanbanSearchParams = () => ({ projectId: useProjectIdInUrl() })
export const useKanbanQueryKey = () => ["kanbans", useKanbanSearchParams()]

export const useTasksSearchParams = () => {
    const [param] = useUrlQueryParam([
        "name",
        "typeId",
        "processorId",
        "tagId"
    ])
    const projectId = useProjectIdInUrl()
    return useMemo(() => ({
        projectId,
        name: param.name,
        typeId: Number(param.typeId) || undefined,
        processorId: Number(param.processorId) || undefined,
        tagId: Number(param.tagId) || undefined,
    }), [projectId, param])
}
export const useTaskQueryKey = () => ["tasks", useTasksSearchParams()]
