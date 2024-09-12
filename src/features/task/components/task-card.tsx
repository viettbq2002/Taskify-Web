import { Card, Checkbox, Group, Stack, Text } from "@mantine/core";
import classes from "@/features/task/styles/task.module.css";
import { FC, useState } from "react";
import { IItem } from "@/features/task/types/task.type";
interface TaskCardProps {
  task: IItem;
}
const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const [active, setActive] = useState(false);
  return (
    <Card onClick={() => setActive(!active)} bg={active ? "gray.0" : ""} withBorder={active} radius="md" className={classes.taskCard}>
      <Card.Section withBorder py="2px" px="xs">
        <Group>
          <Checkbox classNames={{ input: classes.checkBox }} radius={"xl"} />
          <Stack gap="0">
            <Text lh={"sm"}>Task Title</Text>
            <Text lh={"sm"} fz="sm" c="dimmed">
              Task Name
            </Text>
          </Stack>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default TaskCard;
