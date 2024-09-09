import { Card, Checkbox, Group, Stack, Text } from "@mantine/core";
import classes from "@/features/task/styles/task.module.css";
import React from "react";

const TaskCard = () => {
  return (
    <Card radius="md"  className={classes.taskCard}>
      <Card.Section py="2px" px="md">
        <Group>
          <Checkbox radius={"xl"} />
          <Stack gap="0">
            <Text>Hello</Text>
            <Text fz="sm" c="dimmed">
              World
            </Text>
          </Stack>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default TaskCard;
