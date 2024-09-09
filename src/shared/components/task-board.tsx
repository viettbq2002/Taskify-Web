import { Paper } from "@mantine/core";
import React from "react";
type PaperProp = React.ComponentProps<typeof Paper> & {
  children: React.ReactNode;
};
const TaskBoard = ({ children, ...props }: PaperProp) => {
  return (
    <Paper {...props} radius="xl" shadow="md">
      {children}
    </Paper>
  );
};

export default TaskBoard;
