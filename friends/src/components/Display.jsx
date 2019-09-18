import React from "react";
import FriensList from "./";
import Form from "./Form";
const Display = () => {
  return (
    <div>
      <FriendsList />
      <h2>Create a New Friend</h2>
      <Form />
    </div>
  );
};

export default Display;
