import { Card, Checkbox, Group, Stack, Text } from "@mantine/core";
import classes from "@/features/task/styles/task.module.css";

const TaskCard = () => {
  return (
    <Card radius="md"  className={classes.taskCard}>
      <Card.Section py="2px" px="md">
        <Group>
          <Checkbox classNames={ {input: classes.checkBox}} radius={"xl"} />
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
