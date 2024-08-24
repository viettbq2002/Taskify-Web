import { UserButton } from "@/shared/components/user-button";
import classes from "@shared/styles/sidebar.module.css";
import { Icon2fa, IconBellRinging, IconDatabaseImport, IconFingerprint, IconKey, IconReceipt2, IconSettings } from "@tabler/icons-react";
import { useState } from "react";
const MainSideBar = () => {
  const [active, setActive] = useState("Billing");
  const data = [
    { link: "", label: "Notifications", icon: IconBellRinging },
    { link: "", label: "Billing", icon: IconReceipt2 },
    { link: "", label: "Security", icon: IconFingerprint },
    { link: "", label: "SSH Keys", icon: IconKey },
    { link: "", label: "Databases", icon: IconDatabaseImport },
    { link: "", label: "Authentication", icon: Icon2fa },
    { link: "", label: "Other Settings", icon: IconSettings },
  ];
  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));
  return (
    <div>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          <div className={classes.header}>
            <UserButton />
          </div>
          {links}
        </div>
      </nav>
    </div>
  );
};

export default MainSideBar;
