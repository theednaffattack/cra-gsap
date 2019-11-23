import React from "react";
import styled from "styled-components";

import PetGrid from "./pet-card/pet-grid";

const StyledExampleDiv = styled.div`
  font-family: sans-serif;
  text-align: left;
`;

const GsapExample = () => {
  return (
    <StyledExampleDiv>
      GSAP Example
      <PetGrid />
    </StyledExampleDiv>
  );
};

export default GsapExample;
