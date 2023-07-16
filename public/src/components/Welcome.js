import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome({ currentUser }) {
  if (!currentUser) {
    return null; // Return null or any other fallback component if 'currentUser' is undefined
  }

  return (
    <Container>
      <img src={Robot} alt="Robo" />
      <h1>
        Welcome, <span>{currentUser.username}</span>
      </h1>
      <h3>Select a Chat to start your Private Message!</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #4e00ff;
  }
`;
