import useBoardTitle from "@/shared/hooks/useBoardTitle";
import { Button, Group, Paper, Title } from "@mantine/core";
import { IconArchive, IconCalendarCheck } from "@tabler/icons-react";
const TaskMenu = () => {
  const title = useBoardTitle();
  return (
    <Group mb="md">
      <Paper w="25%" py="xs" px="md" radius={"xl"}>
        <Group>
          <Group>
            <IconCalendarCheck />
            <Title order={4}>{title}</Title>
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
