import React from "react";
import styled from "styled-components";
import Button from "../component/Button";

const Homepage = () => {
  return (
    <HomepageContainer>
      <HeroSection>
        <HeroContent>
          <span>🎯</span>
          <HeroHeading>Increase your productivity</HeroHeading>
          <HeroSubHeading>
            Best Todo list application for fast world
          </HeroSubHeading>
          <Button size="lg">Get Started</Button>
        </HeroContent>
      </HeroSection>
    </HomepageContainer>
  );
};

export default Homepage;

const HomepageContainer = styled.div`
  height: auto;
  width: auto;
`;

const HeroSection = styled.div`
  height: 50vh;
  padding: 5rem 10rem;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 70px;
  }
`;

const HeroHeading = styled.span`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const HeroSubHeading = styled.div`
  font-family: "Open Sans";
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 2rem;
`;
