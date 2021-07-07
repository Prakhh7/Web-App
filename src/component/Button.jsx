import React from "react";
import styled from "styled-components";

const Button = ({ children, size }) => {
  return (
    <ButtonContainer>
      {size === "lg" ? (
        <ButtonLarge>{children}</ButtonLarge>
      ) : (
        <ButtonMedium>{children}</ButtonMedium>
      )}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div``;

const ButtonLarge = styled.div`
  color: white;
  display: grid;
  place-items: center;
  background-color: #111;
  font-family: "Ubuntu";
  font-size: 40px;
  font-weight: bold;
  height: 7rem;
  width: 15rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #111;
    border: 5px solid #111;
  }
`;

const ButtonMedium = styled.div`
  color: white;
  display: grid;
  place-items: center;
  background-color: #111;
  font-family: "Ubuntu";
  font-size: 20px;
  font-weight: bold;
  height: 3rem;
  width: 5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #111;
    border: 2px solid #111;
  }
`;
