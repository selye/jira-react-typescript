import { useTaskType } from "utils/task-type"
import { IdSelect } from "./IdSelect"

export const TaskTypeSelect = (props: React.ComponentProps<typeof IdSelect>) => {
    const { data: tasks } = useTaskType()
    return <IdSelect options={tasks || []} {...props} />
}