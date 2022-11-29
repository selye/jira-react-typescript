import { Kanban } from "types/kanban";
import { useTask } from "utils/task";
import { useTaskType } from "utils/task-type";
import { useTasksSearchParams } from "./util";
import taskIcon from "asstes/task.svg";
import bugIcon from "asstes/bug.svg"
import styled from "@emotion/styled";
import { Card } from "antd";


const TaskTypeIcon = ({ id }: { id: number }) => {
    const { data: taskTypes } = useTaskType()
    const name = taskTypes?.find(taskType => taskType.id === id)?.name;
    if (!name) {
        return null
    }
    return <img src={name === "task" ? taskIcon : bugIcon} alt={""} />
}

export const KanbanColumn = ({ kanban }: { kanban: Kanban }) => {
    const { data: allTasks } = useTask(useTasksSearchParams())
    const tasks = allTasks?.filter(task => task.kanbanId === kanban.id)
    return (
        <Container>
            <TasksContainer>
                <h3>{kanban.name}</h3>
                {tasks?.map(task => (
                    <Card style={{ "marginBottom": "0.2rem" }} key={task.id}>
                        <div>
                            {task.name}
                        </div>
                        <TaskTypeIcon id={task.typeId} />
                    </Card>
                ))}
            </TasksContainer>

        </Container>
    )
}

const TasksContainer = styled.div`
    overflow: scroll;
    flex: 1;
    ::-webkit-scrollbar{
        display: none;
    }
`

const Container = styled.div`
    min-width: 27rem;
    border-radius: 6px;
    background-color: rgb(244,245,247);
    display: flex;
    flex-direction: column;
    padding: 0.7rem 0.7rem 1rem;
    margin-right: 1.5rem;
`
