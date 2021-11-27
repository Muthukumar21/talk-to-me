import React, { useState, useEffect } from "react";
import "./Chat.css";
import MicIcon from "@mui/icons-material/Mic";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import MoreVert from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useParams } from "react-router-dom";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
function Chat() {
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault(); //stop from refresing
    console.log("you typed", input);
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`}
        />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>
            Last seen
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
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
        {messages.map((message) => (
          <p
            className={`chat_message ${
              message.name === user.displayName && "chat_reciever"
            }`}
          >
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timeStamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
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
