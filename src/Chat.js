import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import db from "./firebase";

const Chat = () => {
  const [seed, setSeed] = useState("");
  const [input,setInput] = useState("");
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(()=>{
    if(roomId){
      db.collection('rooms').doc(roomId).onSnapshot(snapshot =>(
        setRoomName(snapshot.data().name)
      ))
    }
  },[roomId])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) =>{
    e.preventDefault();
    console.log(input);

    setInput("");
  }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        ></Avatar>

        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last Seen At</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined></SearchOutlined>
          </IconButton>
          <IconButton>
            <AttachFile></AttachFile>
          </IconButton>
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        </div>

        {/* </div> */}
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && 
          'chat__receiver'}`}>
          <span className="chat__name">Rakib Hasan</span>
          Hey guys
          <span className="chat__timestamp">3.52pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon></InsertEmoticon>
        <form>
          <input type="text" value={input} 
          onChange={(e)=> setInput(e.target.value)}
           placeholder="Type a message"
           name="" id="" />
          <button type="submit" onClick={sendMessage}>Send a Message</button>
          <Mic></Mic>
        </form>
      </div>
    </div>
  );
};

export default Chat;
