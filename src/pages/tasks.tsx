import TaskMenu from "@/features/task/components/task-menu";
import { Grid, GridCol } from "@mantine/core";
import TaskBoard from "@/features/task/components/task-board";
import TaskDetailBoard from "@/features/task/components/task-detail-board";
const Tasks = () => {
  return (
    <>
      <TaskMenu />
      <Grid>
        <GridCol span={4}>
          <TaskBoard />
        </GridCol>
        <GridCol span={4}>
          <TaskDetailBoard />
        </GridCol>
      </Grid>
    </>
  );
};

export default Tasks;
