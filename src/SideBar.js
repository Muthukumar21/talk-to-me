import "./SideBar.css";
import React, { useState, useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Avatar from "@mui/material/Avatar";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import SidebarChat from "./SidebarChat";
import db from "./firebase";

function SideBar() {
  const [rooms, setRooms] = useState([]);
  // useEffect(() => {
  //   db.collection("rooms").onSnapshot((snapshot) =>
  //     setRooms(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   );
  // }, []);
  return (
    <div className="sideBar">
      <div className="sideBar_header">
        <Avatar />
        <div className="sideBar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sideBar_search">
        <div className="sideBar_searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sideBar_chats">
        <SidebarChat addNewChat />
        {/* {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))} */}
      </div>
    </div>
  );
}

export default SideBar;
