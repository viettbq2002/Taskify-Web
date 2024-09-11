import classes from "@/features/task/styles/board.module.css";
import { Box, Paper, ScrollArea, Stack, TextInput } from "@mantine/core";
import TaskCard from "@/features/task/components/task-card";

const TaskBoard = () => {
  return (
    <Paper
      h="100%"
      radius="lg"
      style={{ display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 120px)", minHeight: "calc(100vh - 120px)" }}
    >
      <ScrollArea p="md">
        <Stack>
          <TaskCard />
        </Stack>
      </ScrollArea>
      <Box component="form" className={classes.quickAddContainer}>
        <TextInput placeholder="Add Task" />
      </Box>
    </Paper>
  );
};

export default TaskBoard;
