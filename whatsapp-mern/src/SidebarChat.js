import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';

function SidebarChat() {
  return (
  <div className = 'sidebarChat'>
    <Avatar/>
    <div classname = 'sidebarChat__Info'>
        <h2>Room name</h2>
        <p>This is the last message</p>
    </div>
  </div>
  );
}

export default SidebarChat