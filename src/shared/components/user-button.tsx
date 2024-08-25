import { Group, Text, UnstyledButton, rem } from "@mantine/core";
import classes from "@shared/styles/sidebar.module.css";
import { IconChevronRight } from "@tabler/icons-react";

export function UserButton() {
  return (
    <UnstyledButton className={classes.user}>
      <Group w={"100%"} align="center" justify="space-between">
        <div>
          <Text size="sm" fw={500}>
            Harriette Spoonlicker
          </Text>
          <Text c="dimmed" size="xs">
            hspoonlicker@outlook.com
          </Text>
        </div>
        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}
