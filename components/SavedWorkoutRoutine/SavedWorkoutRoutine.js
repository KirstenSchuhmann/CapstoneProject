import { useState } from 'react';
import styled from 'styled-components';
import EditCurrenWorkoutRoutine from '../SavedWorkoutRoutine/EditWorkoutRoutine';

export default function SavedWorkoutRoutine({ currentWorkoutRoutine }) {
   const [edit, setEdit] = useState(false);

   return (
      <>
         {edit === true ? (
            <>
               <p> Implemented Ternary Operator for Switching</p>
            </>
         ) : (
            <StyledPlan>
               <button
                  type='button'
                  onClick={() => setEdit(!edit)}>
                  Edit Plan
               </button>
               <h2> {currentWorkoutRoutine.title} </h2>

               <p> {currentWorkoutRoutine.notes} </p>

               {currentWorkoutRoutine.addedSections?.map((section) => (
                  <SectionsOfCurrenWorkoutRoutine>
                     <h4> {section.name} </h4>

                     {section.exerciseSets?.map((exerciseSet) => (
                        <ExerciseSetCurrentWorkoutRoutine key={exerciseSet.id}>
                           <StyledInputData>{exerciseSet.sets}</StyledInputData>
                           <p> x </p>
                           <StyledInputData>
                              {' '}
                              {exerciseSet.reps}{' '}
                           </StyledInputData>
                           <StyledInputData>
                              {' '}
                              {exerciseSet.weight}{' '}
                           </StyledInputData>
                           <StyledInputData>
                              {exerciseSet.exercise}
                           </StyledInputData>
                        </ExerciseSetCurrentWorkoutRoutine>
                     ))}
                  </SectionsOfCurrenWorkoutRoutine>
               ))}
            </StyledPlan>
         )}
      </>
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

   h1 {
      font-size: 2rem;
      margin: 0;
      text-align: center;
   }

   p {
      margin: 0.5rem;
      text-align: center;
   }
`;
const SectionsOfCurrenWorkoutRoutine = styled.section`
   padding: 10px;
   margin: 15px 0px 15px 0px;
   border: 1px solid;
   height: 80%;
   border-radius: 10px;

   h2 {
      margin: 5px 0 10px 0px;
      font-size: 1.25rem;
   }
`;
const ExerciseSetCurrentWorkoutRoutine = styled.div`
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
