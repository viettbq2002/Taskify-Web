import TaskCard from "@/features/task/components/task-card";
import TaskMenu from "@/features/task/components/task-menu";
import { Box, Grid, GridCol, Paper, ScrollArea, Stack, TextInput } from "@mantine/core";

const Tasks = () => {
  return (
    <>
      <TaskMenu />
      <Grid styles={{ inner: { height: "100%" } }} h="calc(100vh - 100px)">
        <GridCol span={4}>
          <Paper h="100%" radius="lg" style={{ display: "flex", flexDirection: "column" }}>
          
            <Box component="form" style={{ marginTop: "auto", padding: "16px" }}>
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
