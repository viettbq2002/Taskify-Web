import { useListByIdQuery } from "@/features/list/queries/list-query";
import TaskBoard from "@/features/task/components/task-board";
import { useParams } from "react-router-dom";

const ListDetails = () => {
  const { listId } = useParams();
  const queryListDetail = useListByIdQuery(Number(listId));
  const { data: queryResult } = queryListDetail;
  const listDetail = queryResult?.data ?? [];
  const tasks = queryResult?.data.items ?? [];

  return (
    <>
      <TaskBoard tasks={tasks} quickAddAction={{}} />
    </>
  );
};

export default ListDetails;
