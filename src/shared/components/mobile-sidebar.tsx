import { Box, Burger, Center, Stack, Tooltip, UnstyledButton, rem } from "@mantine/core";
import classes from "@shared/styles/mobile-sidebar.module.css";
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
} from "@tabler/icons-react";
import { useState } from "react";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}
interface MobileSidebarProps {
  opened: boolean;
  toggle: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: Readonly<NavbarLinkProps>) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home" },
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
  { icon: IconCalendarStats, label: "Releases" },
  { icon: IconUser, label: "Account" },
  { icon: IconFingerprint, label: "Security" },
  { icon: IconSettings, label: "Settings" },
];

export function MobileSidebar({ opened, toggle }: Readonly<MobileSidebarProps>) {
  const [active, setActive] = useState(2);
  const links = mockdata.map((link, index) => <NavbarLink {...link} key={link.label} active={index === active} onClick={() => setActive(index)} />);

  return (
    <Box component="nav" hiddenFrom="sm" className={classes.navbar}>
      <Center>
        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </Box>
  );
}
