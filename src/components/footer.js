import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";

const FooterWrap = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.2rem;
  font-size: 0.7rem;
  border-top: 1px solid white;
  height: 5vh;
`;

export default function Footer() {
  return (
    <FooterWrap>
      <span>9 E 37th St New York, NY 10016 (212)725-3863 </span>
    </FooterWrap>
  );
}
