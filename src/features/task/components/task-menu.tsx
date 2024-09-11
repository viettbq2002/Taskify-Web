import { Button, Group, Paper, Title } from "@mantine/core";
import { IconArchive, IconCalendarCheck } from "@tabler/icons-react";
const TaskMenu = () => {
  return (
    <Group mb="md">
      <Paper w="25%" py="xs" px="md" radius={"xl"}>
        <Group>
          <Group>
            <IconCalendarCheck />
            <Title order={4}>All my tasks</Title>
          </Group>
        </Group>
      </Paper>
      <Button radius={"xl"} leftSection={<IconArchive width={16} />} variant="white">
        Clear Completed
      </Button>
    </Group>
  );
};

export default TaskMenu;
