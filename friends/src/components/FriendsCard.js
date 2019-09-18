import React from "react";
import { Card } from "semantic-ui-react";
const FriendsCard = ({ friend }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{friend.name}</Card.Header>
        <Card.Meta>
          ID: {friend.id}, AGE: {friend.age}
        </Card.Meta>
        <Card.Description>EMAIL: {friend.email}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default FriendsCard;
