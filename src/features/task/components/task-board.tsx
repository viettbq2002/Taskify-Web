import classes from "@/features/task/styles/board.module.css";
import { Box, ScrollArea, Stack, TextInput } from "@mantine/core";
import TaskCard from "@/features/task/components/task-card";
import { IItem } from "@/features/task/types/task.type";
import { FC, useEffect, useState } from "react";
import EmptyTask from "@/features/task/components/empty-task";
interface TaskBoardProps {
  tasks: IItem[];
  quickAddAction: React.ComponentProps<typeof TextInput>;
}
const TaskBoard: FC<TaskBoardProps> = ({ tasks, quickAddAction }) => {
  const [activeTask, setIsActiveTask] = useState<IItem | null>(null);

  useEffect(() => {
    if (tasks.length > 0) {
      setIsActiveTask(tasks[0]);
    }
  }, [tasks]);

  const handleActive = (task: IItem) => {
    setIsActiveTask((prev) => {
      return prev?.id === task.id ? prev : { ...task };
    });
  };
  return (
    <>
      {tasks.length === 0 && <EmptyTask />}
      <ScrollArea p="md">
        <Stack>
          {tasks.map((task) => (
            <TaskCard onClick={() => handleActive(task)} active={activeTask?.id === task.id} key={task.id} task={task} />
          ))}
        </Stack>
      </ScrollArea>
      <Box className={classes.quickAddContainer}>
        <TextInput aria-label="Quick Add Task" {...quickAddAction} placeholder="Add Task" />
      </Box>
    </>
  );
};

export default TaskBoard;
