import React from "react";
import "./App.css";
import LoginForm from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends with Authorization</h1>
        <Route exact path="/" component={LoginForm} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
