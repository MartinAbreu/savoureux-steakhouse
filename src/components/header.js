import React from "react";
import Button from "@material-ui/core/Button/";
import ButtonGroup from "@material-ui/core/ButtonGroup/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavButton = styled(Button)`
  color: white;
`;

const Title = styled.span`
  font-family: Dancing Script, cursive;
  font-size: 1.5rem;
`;

const DividerLine = styled.hr`
  color: white;
  width: 50%;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Subtitle = styled.span`
  font-family: serif;
  font-size: 0.5rem;
`;

export default function Header() {
  return (
    <Grid
      container
      style={{
        flexGrow: 1,
        WebkitTransform: "translate3d(0, 0, 0)",
      }}
    >
      <Grid item xs>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Title>Savoureux</Title>
            <Subtitle>Steakhouse & Bistro</Subtitle>
          </div>
        </div>
      </Grid>
      <Grid item xs>
        <ButtonGroup
          variant="text"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "20px",
          }}
          color="inherit"
        >
          <Link to="/">
            <NavButton>Home</NavButton>
          </Link>

          <Link to="/about">
            <NavButton>About</NavButton>
          </Link>

          <Link to="/menu">
            <NavButton>Menu</NavButton>
          </Link>

          <Link to="/reservations">
            <NavButton>Reservations</NavButton>
          </Link>

          <Link to="/contact">
            <NavButton>Contact</NavButton>
          </Link>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
