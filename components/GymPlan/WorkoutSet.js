import styled from "styled-components";
import ExerciseSet from "./ExerciseSet";
import { useState } from "react";

export default function WorkoutSet({ setName }) {
  const [InputFields, setInputFields] = useState(0);
  // const [newSet, setNewSet] = useState([]);
  const newSet = [];

  for (let i = 1; i < InputFields; i++) {
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
  /* display: flex;
  flex-flow: row wrap;
  align-items: center; */
  border: 1px solid black;
  border-radius: 15px;
  padding: 13px;
  min-width: 300px;
  margin: 0 1rem 1.5rem 1rem;

  h3 {
    flex-basis: 100%;
    margin: 2px;
    padding-left: 5px;
  }

  button {
    width: 100%;
    flex-basis: 100%;
    height: 30px;
    flex-grow: 1;
    margin: 5px auto 2px;
    border-radius: 5px;
    border: 1.5px solid lightgray;
    cursor: pointer;
    font-weight: 400;
    color: #423f3f;

    :first-of-type {
      background-color: #05b7ce;
      color: #f1fffa;
      border: 1px white;
      box-shadow: 1px 1px 5px #e2e2e2, -1px -1px 5px #ffffff;
      :hover {
        background-color: #15aabf;
        box-shadow: 1px 1px 5px rgba(10, 82, 92, 0.5);
      }
    }
  }
`;
