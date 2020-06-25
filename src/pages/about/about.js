import React from "react";
import HeaderImg from "../../images/about-img.jpg";
import StoryBg from "../../images/chef-food.jpg";
import WineBg from "../../images/wine-table.jpg";
import FoodBg from "../../images/rib-eye-steak.png";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AboutPageWrap maxWidth="sm">
      <HeaderBg />
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Title>About</Title>
        <AboutContent>
          <Story xs={12}>
            <StoryText>
              <span>Our Story</span>
              <hr />
              Savoureux ethos embodies authenticity and grandeur. A setting
              where anything is possible. Summoning Chef Philip Masuer
              meticulous approach to the craft of cooking, Savoureux exemplifies
              the purity of contemporary haute cuisine.
            </StoryText>
            <StoryImg>
              <Image src={StoryBg} />
            </StoryImg>
          </Story>
          <Foods xs={12}>
            <FoodImg>
              <Image src={FoodBg} />
            </FoodImg>
            <FoodText>
              <span>Foods</span>
              <hr />
              Savoureux offers guests the choice of a three course menu with two
              options per course. À la carte for each guest to hand select their
              dining experience or Chef's Selection featuring pristine
              ingredients and refined technique of the seasonally inspired menu.
            </FoodText>
          </Foods>
          <Wines xs={12}>
            <WineImg>
              <Image src={WineBg} />
            </WineImg>
            <WineText>
              <span>Wines</span>
              <hr />
              With a cellar display in the middle of the dining room, Savoureux
              makes wine the literal and figurative center of the guest
              experience. Managed by wine director Rafael Lopez, the selections
              excel in a number of regions; Burgundy is the biggest strength,
              followed by California, the Rhône, Bordeaux, Italy, Champagne and
              Germany.
            </WineText>
          </Wines>
        </AboutContent>
      </motion.div>
    </AboutPageWrap>
  );
};

//
//Header Area
//
const Image = styled.img`
  height: auto;
  width: 100%;
`;

const AboutPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderBg = styled.div`
  background: rgba(0, 0, 0, 0.4) url(${HeaderImg});
  background-blend-mode: multiply;
  height: 40vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const AboutContent = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 10vh;
`;

const Title = styled.span`
  font-family: Dancing Script, cursive;
  font-size: 6rem;
  letter-spacing: 0;
  padding-top: 20vh;
  padding-left: 20px;
  color: white;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`;

//
//Story Grid section
//
const Story = styled(Grid)`
  display: grid;
  grid-template-areas: "StoryImg StoryText";
  justify-content: center;
  width: 100%;
  margin-bottom: 4rem;
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-areas:
      "StoryText"
      "StoryImg";
  }
`;

const StoryText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  text-align: center;
  padding: 1rem;
  grid-area: StoryText;
  justify-content: center;
  letter-spacing: 0.05rem;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);

  span {
    font-size: 2rem;
    font-family: Dancing Script, cursive;
    line-height: 1.5rem;
  }

  hr {
    width: 8rem;
    margin-bottom: 1rem;
  }
`;

const StoryImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: StoryImg;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
`;

//
//Food Grid section
//
const Foods = styled(Grid)`
  display: grid;
  grid-template-areas: "FoodText FoodImg";
  justify-content: center;
  width: 100%;
  grid-gap: 1rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-areas:
      "FoodText"
      "FoodImg";
  }
`;

const FoodText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  text-align: center;
  padding: 1rem;
  grid-area: FoodText;
  justify-content: center;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);

  span {
    font-size: 2rem;
    font-family: Dancing Script, cursive;
    line-height: 1.5rem;
  }

  hr {
    width: 8rem;
    margin-bottom: 1rem;
  }
`;

const FoodImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: FoodImg;
`;

//
//Wine grid Section
//
const Wines = styled(Grid)`
  display: grid;
  grid-template-areas: "WineImg WineText";
  justify-content: center;
  width: 100%;
  grid-gap: 1rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-areas:
      "WineText"
      "WineImg";
  }
`;
const WineText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  text-align: center;
  padding: 1rem;
  grid-area: WineText;
  justify-content: center;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);

  span {
    font-size: 2rem;
    font-family: Dancing Script, cursive;
    line-height: 1.5rem;
  }

  hr {
    width: 8rem;
    margin-bottom: 1rem;
  }
`;

const WineImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: WineImg;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
`;

export default About;
