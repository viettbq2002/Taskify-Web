import { Grid, GridCol } from "@mantine/core";
import { Paper } from "@mantine/core";
import { Outlet } from "react-router-dom";
import TaskDetailBoard from "@/features/task/components/task-detail-board";
import TaskMenu from "@/features/task/components/task-menu";

const TaskBoardLayout = () => {
  return (
    <div>
      <TaskMenu />

      <Grid>
        <GridCol span={4}>
          <Paper
            h="100%"
            radius="lg"
            style={{ display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 120px)", minHeight: "calc(100vh - 120px)" }}
          >
            <Outlet />
          </Paper>
        </GridCol>
        <GridCol span={6}>
          <Paper p="lg" h="100%" radius="lg" style={{ maxHeight: "calc(100vh - 120px)", minHeight: "calc(100vh - 120px)" }}>
            <TaskDetailBoard />
          </Paper>
        </GridCol>
      </Grid>
    </div>
  );
};

export default TaskBoardLayout;
