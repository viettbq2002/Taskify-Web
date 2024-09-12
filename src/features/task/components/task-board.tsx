import classes from "@/features/task/styles/board.module.css";
import { Box, ScrollArea, Stack, TextInput } from "@mantine/core";
import TaskCard from "@/features/task/components/task-card";

const TaskBoard = () => {
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
