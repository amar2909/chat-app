import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BiPowerOff } from "react-icons/bi";

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
      Logout
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7f68e0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #9a86f3;
  }

  svg {
    font-size: 1.2rem;
    margin-right: 0.5rem;
    background-color: #ebe7ff;
    padding: 0.2rem;
    border-radius: 50%;
  }
`;
