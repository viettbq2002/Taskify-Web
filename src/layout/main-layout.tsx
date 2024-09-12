import MainSideBar from "@/shared/components/main-sidebar";
import { MobileSidebar } from "@/shared/components/mobile-sidebar";
import { AppShell, Container, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Navbar>
        <MainSideBar toggle={toggle} />
      </AppShell.Navbar>
      <AppShell.Main bg={"gray.1"}>
        <Flex>
          <MobileSidebar opened={opened} toggle={toggle} />
          <Container w="100%" size="100%" pt="lg" px="xl">
            <Outlet />
          </Container>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
};

export default MainLayout;
