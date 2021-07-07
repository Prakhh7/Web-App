import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Navbar = () => {
  return (
    <NavbarContainer>
      <img
        src="https://cdn.xebia.com/assets/logos/xebia_logo-large-transparent.png"
        alt=""
      />
      <Button>Login</Button>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0.6rem 3rem;

  > img {
    width: 6rem;
    height: 2rem;
  }
`;
