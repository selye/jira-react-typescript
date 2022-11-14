import { useProject } from './../../utils/project';
import { useUrlQueryParam } from 'utils/url';

export const useProjectModal = () => {
    const [{ projectCreate }, setProjectCreate] = useUrlQueryParam([
        'projectCreate'
    ])
    const [{ editingProjectId }, setEditingProjectId] = useUrlQueryParam([
        "editingProjectId",
    ]);
    const { data: editProject, isLoading } = useProject(Number(editingProjectId === "" ? undefined : editingProjectId))

    const open = () => setProjectCreate({ projectCreate: true })

    const close = () => {
        projectCreate ?
            setProjectCreate({
                projectCreate: ""
            }) :
            setEditingProjectId({
                editingProjectId: ""
            })
    }

    const startEdit = (id: number) =>
        setEditingProjectId({
            editingProjectId: id
        })


    return {
        projectModalOpen: projectCreate === "true" || Boolean(editingProjectId),
        open,
        close,
        startEdit,
        editProject,
        isLoading
    }
}
