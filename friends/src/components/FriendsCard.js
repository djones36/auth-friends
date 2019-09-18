import React from "react";

const FriendsCard = () => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          ID: {props.id}, AGE: {props.age}
        </Card.Meta>
        <Card.Description>EMAIL: {props.email}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default FriendsCard;
