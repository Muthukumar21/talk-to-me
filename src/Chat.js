import React, { useState, useEffect } from "react";
import "./Chat.css";
import MicIcon from "@mui/icons-material/Mic";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import MoreVert from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault(); //stop from refresing
    console.log("you typed", input);
    setInput("");
  };
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`}
        />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chat_name">Muthu</span>
          Hey Guys
          <span className="chat_timeStamp">3.05pm</span>
        </p>
      </div>
      <div className="chat_footer">
        <EmojiEmotionsIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type the message"
          />
          <button onClick={sendMessage}>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
