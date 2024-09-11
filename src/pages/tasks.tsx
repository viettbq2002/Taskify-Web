import TaskCard from "@/features/task/components/task-card";
import TaskMenu from "@/features/task/components/task-menu";
import { Box, Grid, GridCol, Paper, ScrollArea, Stack, TextInput } from "@mantine/core";
import classes from "@/features/task/styles/board.module.css";
const Tasks = () => {
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
            <ScrollArea p="md">
              <Stack>
                <TaskCard />
              </Stack>
            </ScrollArea>
            <Box component="form" className={classes.quickAddContainer}>
              <TextInput placeholder="Add Task" />
            </Box>
          </Paper>
        </GridCol>
        <GridCol span={6}>
          <Paper h="100%" radius="lg">
            <Box>Tasks</Box>
          </Paper>
        </GridCol>
      </Grid>
    </>
  );
};

export default Tasks;
