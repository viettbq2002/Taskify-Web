import TaskBoard from "@/features/task/components/task-board";
import { useQueryTasks } from "@/features/task/queries/queryTask";
const AllTasks = () => {
  const queryTasks = useQueryTasks(false);
  const { data: queryResult } = queryTasks;
  const tasks = queryResult?.data ?? [];

  return (
    <>
      <TaskBoard tasks={tasks} />
    </>
  );
};

export default AllTasks;
