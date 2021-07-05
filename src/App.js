import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="app">
             {!user ?(
          <Login></Login>
        ) : (
          <div className="app__body">
 
          <Router>
            
            <Sidebar></Sidebar>
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat></Chat>
              </Route>
              <Route path="/">
                <Chat></Chat>
              </Route>
            </Switch>
          </Router>
        </div>
        )}

    </div>
  );
}

export default App;
