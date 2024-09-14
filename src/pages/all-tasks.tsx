import TaskBoard from "@/features/task/components/task-board";
import { useCreateItem, useQueryTasks } from "@/features/task/queries/queryTask";
const AllTasks = () => {
  const queryTasks = useQueryTasks(false);
  const { data: queryResult } = queryTasks;
  const tasks = queryResult?.data ?? [];
  const { item, handleInputChange, handleAddItem } = useCreateItem();

  return (
    <>
      <TaskBoard
        quickAddAction={{
          value: item ? item.title : "",
          onChange: (e) => handleInputChange(e.target.value),
          onKeyUp: (e) => {
            e.preventDefault();
            if (e.key === "Enter") {
              handleAddItem();
            }
          },
        }}
        tasks={tasks}
      />
    </>
  );
};

export default AllTasks;
