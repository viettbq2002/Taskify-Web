import { useListQuery } from "@/features/list/queries/list-query";
import { NavLink } from "@mantine/core";
import classes from "@shared/styles/sidebar.module.css";
import { IconNotebook, IconPlus } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
const NavLinkStyle = {
  label: {
    fontSize: "var(--mantine-font-size-md)",
    color: "var(--mantine-color-dark-6)",
    fontWeight: "500",
  },
};

const List = () => {
  const queryList = useListQuery(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const { data: queryResult } = queryList;
  const lists = queryResult?.data.map((item) => <NavLink active={currentPath === `/list/${item.id}`} key={item.id} component={Link} label={item.categoryName} to={`/list/${item.id}`} />) ?? [];
  return (
    <NavLink
      leftSection={<IconNotebook className={classes.linkIcon} />}
      styles={NavLinkStyle}
      mt="lg"
      href="#required-for-focus"
      label="My lists"
      rightSection={<IconPlus className={classes.linkIconButton} size="1rem" stroke={1.5} />}
    >
      {lists}
    </NavLink>
  );
};

export default List;
