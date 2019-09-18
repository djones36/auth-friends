import React, { useState, useEffect } from "react";
import FriendsCard from "./FriendsCard";
import FriendsForm from "./Form";
import { axiosWithAuth } from "../utlities/AxiosWithAuth";
import { NavLink } from "react-router-dom";

const FriendsList = props => {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriend(res.data);
      })
      .catch(err => console.log("error", err.res));
  }, []);

  return (
    <div>
      <NavLink
        onClick={() => {
          localStorage.removeItem("token");
          window.location = "/";
        }}
      >
        Log Out
      </NavLink>
      <h2>My Friends</h2>
      <div className="FriendsCard">
        {friend.map(friend => (
          <FriendsCard key={friend.id} friend={friend} />
        ))}
      </div>

      <h2>Create a New Friend</h2>
      <FriendsForm />
    </div>
  );
};

export default FriendsList;
