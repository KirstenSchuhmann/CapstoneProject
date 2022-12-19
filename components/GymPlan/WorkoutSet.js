import styled from "styled-components";

export default function WorkoutSet({ setName }) {
  return (
    <StyledSection>
      <h3> {setName} </h3>

      <StyledDiv>
        <input
          aria-label="set number"
          type="number"
          name="set"
          label="set"
          placeholder="set"
          min="0"
        />
        <p> x </p>
        <input
          aria-label="set volume"
          type="number"
          name="volume"
          label="volume"
          placeholder="vol"
          min="0"
        />

        <input
          aria-label="set weight"
          type="number"
          name="weight"
          label="weight"
          placeholder="weight"
          min="0"
        />
        <input
          aria-label="set exercise"
          type="text"
          name="exercise"
          label="exercise"
          autoComplete="off"
          placeholder="exercise"
        />
      </StyledDiv>
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

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  p {
    font-size: small;
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
    background-color: #efefef;
    border: 0.5px solid lightgrey;
    font-weight: 600;

    ::placeholder {
      color: grey;
      font-weight: 500;
      font-size: 15px;
    }
  }
  input[name="set"],
  input[name="volume"] {
    min-width: 35px;
    flex-basis: 0;
    flex-grow: 0.5;
  }

  input[name="weight"] {
    min-width: 55px;
    flex-basis: 0;
    flex-grow: 1;
  }
  input[name="exercise"] {
    min-width: 70px;
    flex-basis: 0;
    flex-grow: 3;
  }
`;
