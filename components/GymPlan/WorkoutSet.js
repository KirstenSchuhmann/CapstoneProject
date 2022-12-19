import styled from "styled-components";
import ExerciseSet from "./ExerciseSet";
import { useState } from "react";

export default function WorkoutSet({ setName }) {
  const [InputFields, setInputFields] = useState(0);
  const newSet = [];

  for (let i = 0; i < InputFields; i++) {
    newSet.push(<ExerciseSet key={i} number={i} />);
  }

  function addComponent() {
    setInputFields((count) => count + 1);
  }

  return (
    <StyledSection>
      <h3> {setName} </h3>
      {newSet}
      <button onClick={addComponent}> add exercise </button>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  border: 1px solid black;
  border-radius: 15px;
  padding: 13px;
  margin: 0 1rem 1.5rem 1rem;
  min-width: 300px;
  max-width: 550px;

  h3 {
    margin: 2px;
    padding-left: 5px;
  }

  button {
    height: 30px;
    width: 100%;
    margin: 8px auto 2px;
    border-radius: 5px;
    border: 1.5px solid lightgray;
    cursor: pointer;
    font-weight: 400;
    color: #423f3f;
`;
