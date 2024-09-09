import TaskCard from "@/features/task/components/task-card";
import { Box, Grid, GridCol, Paper, Stack } from "@mantine/core";

const Tasks = () => {
  return (
    <Grid styles={{ inner: { height: "100%" } }} h="100%">
      <GridCol span={4}>
        <Paper h="100%" radius="lg">
          <Stack py="md" px="md">
            <TaskCard />
          </Stack>
        </Paper>
      </GridCol>
      <GridCol span={6}>
        <Paper h="100%">
          <Box>Tasks</Box>
        </Paper>
      </GridCol>
    </Grid>
  );
};

export default Tasks;
