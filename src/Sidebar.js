import React, { useState } from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, SearchOutlined } from "@material-ui/icons";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useEffect } from "react";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {

  const [rooms,setRooms] = useState([]);
  const [{user},dispatch] = useStateValue();

  useEffect(()=>{
   const unsubscribe = db.collection('rooms').onSnapshot(snapshot =>(
        setRooms(snapshot.docs.map(doc=>
          ({
            id: doc.id,
            data: doc.data(),
          })
          ))
    ));
    return () => {
      unsubscribe();
    }
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL}></Avatar>
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
      {
        rooms.map(room=> (
          <SidebarChat key={room.id}
          id={room.id}
          name= {room.data.name}>            
          </SidebarChat>
        ))
      }
      </div>
    </div>
  );
};

export default Sidebar;
