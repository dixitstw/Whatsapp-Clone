import React, {useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import { useEffect } from 'react';
import axios from './axios';
 

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => { 
    axios.get('/messages/sync').then((response)=> {
      setMessages(response.data);    
    })
  }, [])

  useEffect(()=> {
    const pusher = new Pusher('1c9995887a0f4695da64', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
       setMessages([...messages, data]);
    });

    return ()=> {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])

  console.log(messages);

  return (
    <div className="app">
    <div className="app_body">
    <Sidebar/>
    <Chat messages = {messages} />
    </div>
  

    </div>
  );
}

export default App;
