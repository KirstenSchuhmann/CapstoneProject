import styled from "styled-components";

export default function ExerciseSet() {
  return (
    <StyledDiv>
      <input
        aria-label="set number"
        type="number"
        name="set"
        label="set"
        placeholder="set"
        min="0"
      />
      <p> * </p>
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
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-left: 0;
  margin-right: 0;

  p {
    font-size: small;
    margin-right: 8px;
  }

  input {
    height: 30px;
    border-radius: 5px;
    border: 1.5px solid lightgray;
    text-align: center;
  }

  input[type="number"] {
    margin-right: 8px;
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
    flex-grow: 0.6;
  }

  input[name="weight"] {
    margin-left: 8px;
    min-width: 45px;
    flex-basis: 0;
    flex-grow: 1;
  }
  input[name="exercise"] {
    min-width: 60px;
    flex-basis: 0;
    flex-grow: 3;
  }
`;
