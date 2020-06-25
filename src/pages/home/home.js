import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HeroBg from "../../images/hero-img1.jpg";

const Home = () => {
  return (
    <HomePage>
      <HeroImage />
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <HeroIntro maxWidth="xs">
          <Title>Savoureux</Title>
          <hr style={{ width: "50%" }} />
          <Subtitle>Steakhouse & Bistro</Subtitle>
          <Link to="/menu">
            <WelcomeBtn variant="outlined" size="large">
              Menu
            </WelcomeBtn>
          </Link>
        </HeroIntro>
      </motion.div>
    </HomePage>
  );
};

const Title = styled.span`
  font-family: Dancing Script, cursive;
  font-size: 6rem;
  letter-spacing: 0;
`;

const Subtitle = styled.span`
  font-size: 2rem;
  font-family: serif;
`;

const HeroIntro = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  color: white;
`;

const HeroImage = styled.div`
  background-image: url(${HeroBg});
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const HomePage = styled(Container)`
  color: white;
  width: 100%;
  height: 100%;
`;

const WelcomeBtn = styled(Button)`
  color: white;
  border: 1px solid white;
  margin-top: 2.5rem;
`;

export default Home;
