import React from "react";
import "./App.css";
import LoginForm from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1>Friends with Authorization</h1>
      <h2>Please Login</h2>
      <LoginForm />
    </div>
  );
}

export default App;
