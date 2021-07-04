import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, SearchOutlined } from "@material-ui/icons";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar></Avatar>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge></DonutLarge>
          </IconButton>
          <IconButton>
            <ChatIcon></ChatIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
          <div className="sidebar__searchContainer">
      
          <SearchOutlined></SearchOutlined>
          <input placeholder="Search or Start a New Chat" type="text"></input>
      </div>  
      </div>
      <div className="sidebar__chats">
      <SidebarChat addNewChat></SidebarChat>
      <SidebarChat></SidebarChat>
      </div>
    </div>
  );
};

export default Sidebar;
