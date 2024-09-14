import { Grid, GridCol } from "@mantine/core";
import { Paper } from "@mantine/core";
import { Outlet } from "react-router-dom";
import TaskDetailBoard from "@/features/task/components/task-detail-board";
import TaskMenu from "@/features/task/components/task-menu";
import { useState } from "react";
import { IItem } from "@/features/task/types/task.type";
export type contextType = { task: IItem | null; setTask: React.Dispatch<React.SetStateAction<IItem | null>> };
const TaskBoardLayout = () => {
  const [task, setTask] = useState<IItem | null>({
    id: 0,
    createdAt: new Date("2024-09-14T10:00:00Z"),
    updatedAt: new Date("2024-09-14T12:00:00Z"),
    title: "Complete Project Report",
    note: "Finalize and submit the report to the manager",
    isCompleted: false,
    isArchived: false,
    categoryName: "Work",
    dueDate: new Date("2024-09-20T09:00:00Z"),
    subItems: [],
  });
  return (
    <>
      <TaskMenu />

      <Grid>
        <GridCol span={4}>
          <Paper
            h="100%"
            radius="lg"
            style={{ display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 120px)", minHeight: "calc(100vh - 120px)" }}
          >
            <Outlet context={{ task, setTask } satisfies contextType} />
          </Paper>
        </GridCol>
        <GridCol span={6}>
          <Paper p="lg" h="100%" radius="lg" style={{ maxHeight: "calc(100vh - 120px)", minHeight: "calc(100vh - 120px)" }}>
            <TaskDetailBoard />
          </Paper>
        </GridCol>
      </Grid>
    </>
  );
};

export default TaskBoardLayout;
