import styled from "styled-components";
import ExerciseSet from "./ExerciseSet";

export default function WorkoutSet({ setName }) {
  return (
    <StyledSection>
      <h3> {setName} </h3>
      <ExerciseSet />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  border: 1px solid black;
  border-radius: 15px;
  padding: 13px;
  margin: 0 1rem 1.5rem 1rem;
  min-width: 300px;
  max-width: 700px;

  h3 {
    margin: 2px;
    padding-left: 5px;
  }
`;
