import React from "react";
import SidebarItem from "./SidebarItem";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./sidebar.css";

import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@material-ui/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="logo" />
      <SidebarItem Icon={HomeIcon} text="Home" />
      <SidebarItem Icon={TagIcon} text="Explore" />
      <SidebarItem Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarItem Icon={MailOutlineIcon} text="Messages" />
      <SidebarItem Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarItem Icon={ListAltIcon} text="Lists" />
      <SidebarItem Icon={PermIdentityIcon} text="Profile" />
      <SidebarItem Icon={MoreHorizIcon} text="More" />
      <Button className="tweet">Tweet</Button>

      <div className="sidebar__user">
        <div>
          <AccountCircleIcon className="user__icon" />
        </div>
        <div>
          <p>Jhon Doe</p>
          <p className="username">@jhondoe </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
