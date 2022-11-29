import { useProject } from './../../utils/project';
import { useLocation } from "react-router"

export const useProjectIdInUrl = () => {
    const { pathname } = useLocation()
    const id = pathname.match(/projects\/(\d+)/)?.[1]
    return Number(id)
}

export const useProjectInUrl = () => useProject(useProjectIdInUrl())

/* 获取看板id */
export const useKanbanSearchParams = () => ({ projectId: useProjectIdInUrl() })
export const useKanbanQueryKey = () => ["kanbans", useKanbanSearchParams()]

export const useTasksSearchParams = () => ({ projectId: useProjectIdInUrl() })
export const useTaskQueryKey = () => ["tasks", useTasksSearchParams()]
