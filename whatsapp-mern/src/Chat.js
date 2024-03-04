import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import MoreVert from "@mui/icons-material/MoreVert";
import AttachFile from "@mui/icons-material/AttachFile";
import { InsertEmoticon } from "@mui/icons-material";
import { Mic } from "@mui/icons-material";
import { useState } from "react"; 
import axios from './axios';
function Chat( {messages}) {

  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

   await axios.post('/messages/new', {
      message: input,
      name: 'DEMO APP',
      timestamp: 'just now!',
      received: false
    });
  setInput('');
  };

  return (
    <div classname="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRIght">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map(message => (
           <p className={`chat__message ${message.received && 'chat_receiver'}`}>
          <span className="chat__name">{message.name}</span>
          {message.message}
          <span className="chat__timestamp">{message.timestamp}</span>
        </p>
        ))}
      </div>

      <div className = 'chat__footer'>
          <InsertEmoticon/>
          <form>
              <input
              value = {input}
              onChange = {(e) => setInput(e.target.value)}
              placeholder="Type a message"
              type="text" 
              />
              <button onCick = {sendMessage}  type="submit">Send a message</button>
          </form>
          <Mic/>
      </div> 
    </div>
  );
}

export default Chat;
