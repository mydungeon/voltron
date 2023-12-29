import React, { useState } from "react";
import { useAppSelector } from "src/redux/store";
import Header from "src/ui/elements/Header";
import Logo from "src/ui/components/Logo";
import LoggedOutMenu from "src/ui/features/Menus/LoggedOut";
import LoggedInMenu from "src/ui/features/Menus/LoggedIn/LoggedIn";
import Tooltip from "src/ui/components/Tooltip";
import Icon from "src/ui/components/Icon";
import "./Site.styles.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";

export default function SiteHeader() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const user = useAppSelector((state) => state.userState.user);
  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
    console.log("toggleMenu", toggleMenu);
  }
  return (
    <Header classNames="site" data-testid="siteHeader">
      <Logo classNames="siteHeader" logoText="Mason" />
      <div className="right">
        {!user ? <LoggedOutMenu /> : <LoggedInMenu {...user} />}
        <Tooltip message="Open Menu" direction={TooltipDirection.LEFT}>
          <Icon
            classNames="menuIcon"
            icon={faBars}
            handleClick={handleToggleMenu}
            size="2x"
          />
        </Tooltip>
      </div>
    </Header>
  );
}
