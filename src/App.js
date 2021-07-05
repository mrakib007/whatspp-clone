import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
