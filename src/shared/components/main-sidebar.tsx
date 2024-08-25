import { UserButton } from "@/shared/components/user-button";
import { Button, NavLink } from "@mantine/core";
import classes from "@shared/styles/sidebar.module.css";
import { IconListDetails, IconNotebook, IconPlus, IconTag } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
const NavLinkStyle = {
  label: {
    fontSize: "var(--mantine-font-size-md)",
    color: "var(--mantine-color-dark-6)",
    fontWeight: "500",
  },
};
interface NavbarLinkProps {
  toggle: () => void;
}
const MainSideBar = ({ toggle }: Readonly<NavbarLinkProps>) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const data = [{ link: "/all", label: "All Tasks", icon: IconListDetails }];
  const links = data.map((item) => (
    <NavLink
      color="dark.2"
      active={currentPath === item.link}
      component={Link}
      key={item.label}
      styles={NavLinkStyle}
      to={item.link}
      label={item.label}
      leftSection={<item.icon className={classes.linkIcon} />}
    />
  ));
  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <UserButton />
      </div>
      <Button hiddenFrom="sm" onClick={toggle} variant="default" mb="lg" mx={"sm"}>
        Close
      </Button>
      {links}
      <NavLink
        leftSection={<IconNotebook className={classes.linkIcon} />}
        styles={NavLinkStyle}
        mt="lg"
        href="#required-for-focus"
        label="My lists"
        rightSection={<IconPlus size="1rem" stroke={1.5} />}
      >
        <NavLink label="First child link" href="#required-for-focus" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink>
      <NavLink
        leftSection={<IconTag className={classes.linkIcon} />}
        styles={NavLinkStyle}
        mt="lg"
        href="#required-for-focus"
        label="Tags"
        rightSection={<IconPlus size="1rem" stroke={1.5} />}
      >
        <NavLink label="First child link" href="#required-for-focus" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink>
    </nav>
  );
};

export default MainSideBar;
