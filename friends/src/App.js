import React from "react";
import "./App.css";
import LoginForm from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends with Authorization</h1>
        <h2>Please Login</h2>
        <Route exact path="/" component={LoginForm} />
      </div>
    </Router>
  );
}

export default App;
