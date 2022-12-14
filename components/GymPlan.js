import styled from "styled-components";

export default function GymPlan() {
  return (
    <>
      <StyledHeadline> Gym Plan </StyledHeadline>
      <StyledSection>
        <StyledHeadlineSection> Warm-Up </StyledHeadlineSection>
        <form>
          <StyledInputNumber type="number" name="set" placeholder="2" />
          <StyledP> x </StyledP>
          <StyledInputNumber type="number" name="volume" placeholder="5" />
          <StyledInputText
            type="text"
            name="exercise"
            autoComplete="off"
            placeholder="exercise"
          />
          <StyledInputForWeight type="number" name="kg" placeholder=" - " />
          <button> </button>
        </form>
      </StyledSection>
      <StyledSection>
        <StyledHeadlineSection> Squat </StyledHeadlineSection>
        <form>
          <StyledInputNumber type="number" name="set" placeholder="2" />
          <StyledP> x </StyledP>
          <StyledInputNumber type="number" name="volume" placeholder="5" />
          <StyledInputText
            type="text"
            name="exercise"
            autoComplete="off"
            placeholder="exercise"
          />
          <StyledInputForWeight type="number" name="kg" placeholder="50 kg" />
        </form>
      </StyledSection>
      <StyledSection>
        <StyledHeadlineSection> Bench </StyledHeadlineSection>
        <form>
          <StyledInputNumber type="number" name="set" placeholder="2" />
          <StyledP> x </StyledP>
          <StyledInputNumber type="number" name="volume" placeholder="5" />
          <StyledInputText
            type="text"
            name="exercise"
            autoComplete="off"
            placeholder="exercise"
          />
          <StyledInputForWeight type="number" name="kg" placeholder="30 kg" />
        </form>
      </StyledSection>
      <StyledSection>
        <StyledHeadlineSection> Deadlift </StyledHeadlineSection>
        <form>
          <StyledInputNumber type="number" name="set" placeholder="2" />
          <StyledP> x </StyledP>
          <StyledInputNumber type="number" name="volume" placeholder="5" />
          <StyledInputText
            type="text"
            name="exercise"
            autoComplete="off"
            placeholder="exercise"
          />
          <StyledInputForWeight type="number" name="kg" placeholder="50 kg" />
        </form>
      </StyledSection>
      <StyledSection>
        <StyledHeadlineSection> Assistant </StyledHeadlineSection>
        <form>
          <StyledInputNumber type="number" name="set" placeholder="2" />
          <StyledP> x </StyledP>
          <StyledInputNumber type="number" name="volume" placeholder="5" />
          <StyledInputText
            type="text"
            name="exercise"
            autoComplete="off"
            placeholder="exercise"
          />
          <StyledInputForWeight type="number" name="kg" placeholder="10 kg" />
        </form>
      </StyledSection>
    </>
  );
}

// Styling starts here

const StyledHeadline = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSection = styled.section`
  background-color: white;
  border-radius: 15px;
  border: 1px solid black;
  max-width: 500px;
  margin: 20px;
  overflow: hidden;
`;

const StyledHeadlineSection = styled.h3`
  margin: 10px;
  padding: 10px;
`;

const StyledP = styled.p`
  display: inline;
`;

const StyledInputText = styled.input`
  height: 35px;
  min-width: 105px;
  width: 45%;
  border-radius: 5px;
  border: 0.5px solid grey;
  //margin: 5px;
`;

const StyledInputNumber = styled.input`
  //Chrome, Safari, Edge, Opera - hide arrows
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  // Firefox - hide arrows
  -moz-appearance: textfield;
  // normal styling
  height: 35px;
  min-width: 30px;
  width: 10%;
  background-color: lightgrey;
  border-radius: 5px;
  border: 0.5px solid transparent;
  margin: 5px;
  text-align: center;
`;

const StyledInputForWeight = styled.input`
  //Chrome, Safari, Edge, Opera - hide arrows
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  // Firefox - hide arrows (CSS - letters shouldn't be allowed! Needs to be fixed later!!!)
  -moz-appearance: textfield;
  // normal styling
  height: 35px;
  min-width: 35px;
  width: 17%;
  background-color: lightgrey;
  margin: 5px;
  border-radius: 5px;
  border: 0.5px solid transparent;
  margin: 5px 10px 10px 10px;
  text-align: center;
`;
