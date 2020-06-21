import React from "react";
import PropTypes from "prop-types";
import AppLink from "../../SharedComponents/AppLink";
import IconRow from "../../SideBar/SharedComponents/IconRow";
import {
  HomeIcon,
  AboutIcon,
  StoryIcon,
  SupportIcon,
} from "../../SharedStyles/icons";

import "./style.scss";

const LinkMenu = (props) => {
  return (
    <div className="link-menu">
      <div className="menu-section">
        <AppLink
          className="menu-link"
          href="/"
          active={props.router.location.pathname === "/"}
        >
          <IconRow icon={HomeIcon}>NYC Building Monitor</IconRow>
        </AppLink>
        <AppLink
          className="menu-link"
          href="/about"
          active={props.router.location.pathname === "/about"}
        >
          <IconRow icon={AboutIcon}>About this project</IconRow>
        </AppLink>
        {/* <AppLink className="menu-link" href="/story" active={props.router.location.pathname === '/story'}>
          <IconRow icon={StoryIcon}>The story</IconRow>
        </AppLink>
        <AppLink className="menu-link" href="/support" active={props.router.location.pathname === '/support'}>
          <IconRow icon={SupportIcon}>Support the work</IconRow>
        </AppLink> */}
      </div>
    </div>
  );
};

LinkMenu.propTypes = {
  dispatch: PropTypes.func,
  router: PropTypes.object,
};

export default LinkMenu;
