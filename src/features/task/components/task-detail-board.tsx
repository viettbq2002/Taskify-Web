import { ActionIcon, Breadcrumbs, Button, Tooltip } from "@mantine/core";
import classes from "@/features/task/styles/board.module.css";
import { Flex, Group, Anchor } from "@mantine/core";
import { IconArchive } from "@tabler/icons-react";
import { useAtomValue } from "jotai";
import { taskAtom } from "@/features/task/atom/task.atom";

const TaskDetailBoard = () => {
  const task = useAtomValue(taskAtom);
  const items = [
    { title: "My List", href: "all" },
    { title: task?.categoryName, href: "#" },
    { title: "use-id", href: "#" },
  ].map((item, index) => (
    <Anchor c="dimmed" fz="sm" href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <Flex align={"center"} justify={"space-between"}>
      <Group>
        <Breadcrumbs separator=">" separatorMargin={"5"}>
          {items}
        </Breadcrumbs>
      </Group>
      <Group>
        <Button radius={"xl"} c="dimmed" variant="default">
          Mark as completed
        </Button>
        <Tooltip withArrow label="Archive" transitionProps={{ transition: "slide-up", duration: 300 }}>
          <ActionIcon
            classNames={{
              icon: classes.archiveIcon,
            }}
            c="dimmed"
            aria-label="Archive"
            variant="white"
          >
            <IconArchive />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Flex>
  );
};

export default TaskDetailBoard;
