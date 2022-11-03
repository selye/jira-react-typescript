import { useUrlQueryParam } from 'utils/url';

export const useProjectModal = () => {
    const [{ projectCreate }, setProjectCreate] = useUrlQueryParam([
        'projectCreate'
    ])

    const open = () => setProjectCreate({
        projectCreate: true
    })

    const close = () => setProjectCreate({
        projectCreate: undefined
    })

    return {
        projectModalOpen: projectCreate === "true",
        open,
        close
    }
}
