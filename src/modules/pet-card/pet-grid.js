import React, { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "./pet-card";
import styled from "styled-components";

// Define Styled Components outside of the render method
// It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass. Defining a styled component within the render method will thwart caching and drastically slow down rendering speed, and should be avoided.
export const DogButton = styled.button`
  width: 100px;
  height: 30px;
  background: ${props => (props.primary ? "#FFF" : "#2a2223")};
  color: ${props => (props.primary ? "#2a2223" : "#FFF")};
  border: 0;
  margin: 5px 10px;
  transition: 0.2s ease-in;
  border: ${props =>
    props.primary ? "2px solid #99f3eb" : "2px solid #2a2223"};
  &:hover {
    background: ${props => (props.primary ? "#2a2223" : "#fff")};
    color: ${props => (props.primary ? "#fff" : "#2a2223")};
    border: ${props =>
      props.primary ? "2px solid #2a2223" : "2px solid #99f3eb"};
  }
`;

const StyledContainer = styled.div`
  background: #e62739;
  width: 100%;
  max-width: 850px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
  min-height: 100vh;
  height: auto;
  box-shadow: 0px 1px 6px -2px grey;
`;

const Entry = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function PetGrid() {
  // https://dog.ceo/api/breed/hound/images/random/15
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("pug");

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/6`)
      .then(response => {
        const doggos = response.data.message;
        console.log(doggos);
        setPets(doggos);
      })
      .catch(error => {
        console.log("Sorry no doggos", error);
      });
  }, [breed]);

  return (
    <StyledContainer className="container">
      <DogButton onClick={() => setBreed("mastiff")}>Mastiff</DogButton>
      <DogButton primary onClick={() => setBreed("labrador")}>
        Labrador
      </DogButton>
      <Entry>
        {pets.map(item => {
          return <PetCard key={item} breed={breed} imgUrl={item} />;
        })}
      </Entry>
    </StyledContainer>
  );
}
