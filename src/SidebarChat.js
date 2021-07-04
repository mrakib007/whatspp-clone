import React from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import { useEffect } from 'react';
import { useState } from 'react';
const SidebarChat = ({addNewChat}) => {
    const [seed,setSeed] = useState('');

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);

    const createChat = () =>{
        const roomName = prompt("Please enter name for chat");

        if(roomName){
            //come to it later
        }
    };
    return !addNewChat ?  (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last Message...</p>
            </div>
        </div>
    ) : (
       <div onClick={createChat} className="sidebarChat">
           <h2>Create New Chat</h2>
       </div>
    );
};

export default SidebarChat;