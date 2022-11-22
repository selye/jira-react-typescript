export interface Task {
    id: number;
    name: string;
    processId: number;
    projectId: number;
    epicId: number;
    kanbanId: number;
    typeId: number;
    note: string
}