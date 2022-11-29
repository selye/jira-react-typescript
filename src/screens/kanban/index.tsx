import styled from "@emotion/styled";
import { useDocumentTitle } from "utils";
import { useKanbans } from "utils/kanban";
import { KanbanColumn } from "./kanbanColumns";
import { useKanbanSearchParams, useProjectInUrl } from "./util";

export const KanbanScreens = () => {
  useDocumentTitle("看板列表")
  const { data: currentProject } = useProjectInUrl()

  const { data: kanbans = [] } = useKanbans(useKanbanSearchParams())
  return (
    <div>
      <h1>{currentProject?.name}看板</h1>
      <KanbanContainer>
        {kanbans?.map(kanban => <KanbanColumn kanban={kanban} key={kanban.id} />)}
      </KanbanContainer>
    </div>
  )
};

const KanbanContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin-right: 2rem;
`
