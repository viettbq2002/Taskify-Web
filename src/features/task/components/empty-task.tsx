import { Flex, Text } from "@mantine/core";

const EmptyTask = () => {
  return (
    <Flex h="100%" justify={"center"} direction={"column"} align={"center"} p="xl">
      <Text c="dimmed" fz="h3" fs="italic" fw={"lighter"} mt="md">
        There are no tasks, try to add one
      </Text>
    </Flex>
  );
};

export default EmptyTask;
