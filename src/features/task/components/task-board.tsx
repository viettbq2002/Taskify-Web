import classes from "@/features/task/styles/board.module.css";
import { Box, ScrollArea, Stack, TextInput } from "@mantine/core";
import TaskCard from "@/features/task/components/task-card";
import { IItem } from "@/features/task/types/task.type";
import { FC, useEffect, useState } from "react";
interface TaskBoardProps {
  tasks: IItem[];
}
const TaskBoard: FC<TaskBoardProps> = ({ tasks }) => {
  const [activeTask, setIsActiveTask] = useState<number | null>(null);

  useEffect(() => {
    if (tasks.length > 0) {
      setIsActiveTask(tasks[0].id);
    }
  }, [tasks]);

  const handleActive = (id: number) => {
    setIsActiveTask(id);
  };
  return (
    <>
      <ScrollArea p="md">
        <Stack>
          {tasks.map((task) => (
            <TaskCard onClick={() => handleActive(task.id)} active={activeTask === task.id} key={task.id} task={task} />
          ))}
        </Stack>
      </ScrollArea>
      <Box component="form" className={classes.quickAddContainer}>
        <TextInput placeholder="Add Task" />
      </Box>
    </>
  );
};

export default TaskBoard;
