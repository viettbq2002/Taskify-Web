import { Card, Checkbox, Group, Stack, Text } from "@mantine/core";
import classes from "@/features/task/styles/task.module.css";
import { FC } from "react";
import { IItem } from "@/features/task/types/task.type";
interface TaskCardProps {
  task: IItem;
  active: boolean;
  onClick: () => void;
}
const TaskCard: FC<TaskCardProps> = ({ task, active, onClick }) => {
  return (
    <Card onClick={onClick} bg={active ? "gray.0" : ""} shadow={active ? "sm" : ""} withBorder={active} radius="md" className={classes.taskCard}>
      <Card.Section withBorder py="2px" px="xs">
        <Group>
          <Checkbox checked={task.isCompleted} aria-label="check completed" classNames={{ input: classes.checkBox }} radius={"xl"} />
          <Stack gap="0">
            <Text lh={"sm"}>{task.title}</Text>
            <Text lh={"sm"} fz="sm" c="dimmed">
              {task.categoryName}
            </Text>
          </Stack>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default TaskCard;
