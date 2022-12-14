import styled from "styled-components";

export default function WorkoutSet({ setName }) {
  return (
    <>
      <StyledSection>
        <h3> {setName} </h3>
        <form>
          <input type="number" name="set" label="set" placeholder="2" />
          <p> x </p>
          <input type="number" name="volume" label="volume" placeholder="5" />
          <input
            type="text"
            name="exercise"
            label="exercise"
            autoComplete="off"
            placeholder="exercise"
          />
          <input
            type="number"
            name="weight"
            label="weight"
            placeholder="10 kg"
          />
        </form>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px;
  margin: 0 1rem 1.5rem 1rem;
  overflow: hidden;
  min-width: 265px;
  max-width: 600px;

  h3 {
    margin: 8px;
  }

  form {
    display: flex;
    justify-content: space-around;
    align-items: center;
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
