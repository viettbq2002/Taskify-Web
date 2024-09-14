import { useListByIdQuery } from "@/features/list/queries/list-query";
import TaskBoard from "@/features/task/components/task-board";
import { useCreateItem } from "@/features/task/queries/queryTask";
import { useParams } from "react-router-dom";

const ListDetails = () => {
  const { listId } = useParams();
  const queryListDetail = useListByIdQuery(Number(listId));
  const { data: queryResult } = queryListDetail;
  const tasks = queryResult?.data.items ?? [];
  const { item, handleInputChange, handleAddItem } = useCreateItem();

  return (
    <>
      <TaskBoard
        tasks={tasks}
        quickAddAction={{
          onChange: (e) => handleInputChange(e.target.value, Number(listId)),
          value: item ? item.title : "",
          onKeyUp: (e) => {
            e.preventDefault();
            if (e.key === "Enter") {
              handleAddItem();
            }
          },
        }}
      />
    </>
  );
};

export default ListDetails;
