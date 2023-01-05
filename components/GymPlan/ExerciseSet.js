import styled from 'styled-components';

export default function ExerciseSet({ exerciseSets }) {
   return (
      <>
         {exerciseSets.map((exerciseSet) => (
            <StyledDiv key={exerciseSet.id}>
               <SetAndReps
                  type='number'
                  aria-label='set number'
                  label='set'
                  placeholder='set'
                  min='0'
                  name={`${exerciseSet.id}-sets`}
               />

               <p> x</p>

               <SetAndReps
                  type='number'
                  aria-label='set volume'
                  label='volume'
                  placeholder='vol'
                  min='0'
                  name={`${exerciseSet.id}-reps`}
               />

               <Weight
                  type='number'
                  aria-label='set weight'
                  label='weight'
                  placeholder='weight'
                  min='0'
                  name={`${exerciseSet.id}-weight`}
               />

               <Exercise
                  type='text'
                  aria-label='set exercise'
                  label='exercise'
                  autoComplete='off'
                  placeholder='exercise'
                  name={`${exerciseSet.id}-exercise`}
               />
            </StyledDiv>
         ))}
      </>
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

   input[type='number'] {
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
`;

const SetAndReps = styled.input`
   min-width: 35px;
   flex-basis: 0;
   flex-grow: 0.6;
`;

const Weight = styled.input`
   margin-left: 8px;
   min-width: 45px;
   flex-basis: 0;
   flex-grow: 1;
`;

const Exercise = styled.input`
   min-width: 60px;
   flex-basis: 0;
   flex-grow: 3;
`;
