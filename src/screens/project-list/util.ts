import { useProject } from './../../utils/project';
import { useUrlQueryParam } from 'utils/url';

export const useProjectModal = () => {
    const [{ projectCreate }, setProjectCreate] = useUrlQueryParam([
        'projectCreate'
    ])
    const [{ editProjectId }, setEditProjectId] = useUrlQueryParam([
        'editProjectId'
    ])
    const { data: editProject, isLoading } = useProject(Number(editProjectId))
    console.log("请求", editProject, isLoading)

    const open = () => setProjectCreate({
        projectCreate: true
    })

    const close = () => {
        projectCreate ?
            setProjectCreate({
                projectCreate: undefined
            }) :
            setEditProjectId({
                editProjectId: undefined
            })
    }

    const startEdit = (id: number) => {
        setEditProjectId({
            editProjectId: id
        })
    }

    return {
        projectModalOpen: projectCreate === "true" || Boolean(editProjectId),
        open,
        close,
        startEdit,
        editProject,
        isLoading
    }
}
