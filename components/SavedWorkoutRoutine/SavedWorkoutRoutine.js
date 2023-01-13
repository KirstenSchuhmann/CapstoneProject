import styled from 'styled-components';

export default function SavedWorkoutRoutine({ currentWorkoutRoutine }) {
   return (
      <StyledPlan>
         <h2> {currentWorkoutRoutine.title}</h2>
         <p> {currentWorkoutRoutine.notes} </p>

         {currentWorkoutRoutine.addedSections.map(
            ({
               name,
               exerciseSets: [{ id, sets, reps, weight, exercise }],
            }) => (
               <StyledSection>
                  <h4> {name} </h4>
                  <StyledDiv key={id}>
                     <StyledInputData> {sets} </StyledInputData>
                     <p> x </p>
                     <StyledInputData> {reps} </StyledInputData>
                     <StyledInputData> {weight} </StyledInputData>
                     <StyledInputData> {exercise} </StyledInputData>
                  </StyledDiv>
               </StyledSection>
            )
         )}
      </StyledPlan>
   );
}

const StyledPlan = styled.section`
   margin: 2rem auto;
   padding: 1rem;
   width: 85%;

   box-shadow: 0px 14px 17px -11px rgba(0, 0, 0, 0.07);
   border: 1px solid #fbf6ec;
   background-color: #f8f8f8;
   border-radius: 20px;

   h2,
   p {
      text-align: center;
   }
`;
const StyledSection = styled.section`
   padding: 10px;
   margin: 15px 0px 15px 0px;
   border: 1px solid;
   height: 80%;
   border-radius: 10px;

   h4 {
      margin: 5px 0 10px 0px;
   }
`;
const StyledDiv = styled.div`
   display: flex;
   flex-flow: row wrap;
   align-items: center;

   p {
      font-size: small;
      margin: 0px 5px 10px 0px;
   }
`;

const StyledInputData = styled.p`
   background-color: #efefef;
   border: 1px solid #dfe0e2;
   padding: 10px;
   border-radius: 10px;
`;
