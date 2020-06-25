import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import HeaderImg from "../../images/menuBg.jpg";
import FoodOne from "../../images/top-plate-1.png";
import SalmonImg from "../../images/salmon.png";
import SteakImg from "../../images/steak.png";
import PorkImg from "../../images/pork.png";
import SaladImg from "../../images/salad.png";
import RatatImg from "../../images/ratat.png";

import { motion } from "framer-motion";

const Menu = () => {
  return (
    <MenuWrap>
      <HeaderBg />
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title>Menu</Title>
        <MenuContent>
          <TitleWrap>
            <span style={{ fontSize: "3rem" }}>Dinner</span>
            <hr />
          </TitleWrap>
          <MenuItems
            xs={12}
            container
            direction={
              window.matchMedia("(max-width: 700px)").matches ? "column" : "row"
            }
            justify="center"
            alignItems="center"
          >
            <ColumnOne
              item
              xs={6}
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <MenuItem>
                <Image src={SalmonImg} />
                <Food>Saumon</Food>
                <Price>$35</Price>
              </MenuItem>
              <MenuItem>
                <Image src={RatatImg} />
                <Food>Ratatouille</Food>
                <Price>$25</Price>
              </MenuItem>
              <MenuItem>
                <Image src={FoodOne} />
                <Food>Le Poulett</Food>
                <Price>$24</Price>
              </MenuItem>
            </ColumnOne>
            <ColumnTwo
              item
              xs={6}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <MenuItem>
                <Image src={SteakImg} />
                <Food>le bifteck</Food>
                <Price>$45</Price>
              </MenuItem>
              <MenuItem>
                <Image src={PorkImg} />
                <Food>Porc</Food>
                <Price>$27</Price>
              </MenuItem>
              <MenuItem>
                <Image src={SaladImg} />
                <Food>Salade</Food>
                <Price>$22</Price>
              </MenuItem>
            </ColumnTwo>
          </MenuItems>
        </MenuContent>
      </motion.div>
    </MenuWrap>
  );
};

const Image = styled.img`
  height: 30vh;
  width: auto;

  @media (max-width: 950px) {
    height: 20vh;
  }
`;

const MenuWrap = styled.div`
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

const MenuContent = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 15vh;
  align-items: center;

  hr {
    width: 12rem;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Dancing Script, cursive;
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

const MenuItems = styled(Grid)``;
const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  height: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ColumnOne = styled(Grid)`
  margin: 0 auto;
`;
const ColumnTwo = styled(Grid)`
  margin: 0 auto;
`;

const Price = styled.span`
  font-style: italic;
`;

const Food = styled.span`
  text-decoration: underline;
  font-size: 1.2rem;
`;

export default Menu;
