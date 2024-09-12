import classes from "@/features/task/styles/board.module.css";
import { Box, ScrollArea, Stack, TextInput } from "@mantine/core";
import TaskCard from "@/features/task/components/task-card";
import { IItem } from "@/features/task/types/task.type";
import { FC } from "react";
interface TaskBoardProps {
  tasks: IItem[];
}
const TaskBoard: FC<TaskBoardProps> = ({ tasks }) => {
  return (
    <>
      <ScrollArea p="md">
        <Stack>
          <TaskCard />
        </Stack>
      </ScrollArea>
      <Box component="form" className={classes.quickAddContainer}>
        <TextInput placeholder="Add Task" />
      </Box>
    </>
  );
};

export default TaskBoard;
