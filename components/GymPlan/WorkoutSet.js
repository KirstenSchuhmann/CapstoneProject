import styled from "styled-components";

export default function WorkoutSet({ setName }) {
  return (
    <>
      <StyledSection>
        <h3> {setName} </h3>

        <StyledDiv>
          <input
            id="number"
            type="number"
            name="set"
            label="set"
            placeholder="set"
          />
          <p> x </p>
          <input
            id="volume"
            type="number"
            name="volume"
            label="volume"
            placeholder="vol"
          />
          <input
            id="exercise"
            type="text"
            name="exercise"
            label="exercise"
            autoComplete="off"
            placeholder="exercise"
          />
          <input
            id="weight"
            type="number"
            name="weight"
            label="weight"
            placeholder="weight"
          />
        </StyledDiv>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  border: 1px solid black;
  border-radius: 15px;
  padding: 13px;
  margin: 0 1rem 1.5rem 1rem;
  overflow: hidden;
  min-width: 265px;

  h3 {
    margin: 2px;
    padding-left: 5px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: small;
    grid-column: 2;
  }

  input {
    height: 30px;
    border-radius: 5px;
    border: 1.5px solid lightgray;
    margin: 8px;
    text-align: center;
  }

  input[type="number"] {
    width: 10%;
    //Chrome, Safari, Edge, Opera - hide arrows
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    // Firefox - hide arrows (CSS - letters shouldn't be allowed! Needs to be fixed later!!!)
    -moz-appearance: textfield;
    // normal styling
    background-color: lightgrey;
    border: 0.5px solid transparent;

    ::placeholder {
      color: grey;
      font-size: 15px;
    }
  }

  input[name="set"] {
    grid-column: 1;
  }

  input[name="set"],
  input[name="volume"] {
    min-width: 40px;
    max-width: 65px;
  }

  input[name="exercise"] {
    min-width: 79px;
    width: 90%;
  }

  input[name="weight"] {
    min-width: 55px;
  }
`;
