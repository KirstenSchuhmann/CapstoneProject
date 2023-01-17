import { useState } from 'react';
import styled from 'styled-components';
import EditCurrenWorkoutRoutine from './EditWorkoutRoutine';

export default function SavedWorkoutRoutine({
   currentWorkoutRoutine,
   onUpdatedPlan,
   sections,
   onChange,
   value,
   onAddExerciseSet,
   onDeleteSection,
   onAddSection,
   onDeleteSet,
}) {
   const [edit, setEdit] = useState(false);

   function handleEditSubmit(event) {
      event.preventDefault();

      const editedTitle = event.target.editedTitle.value;
      const editedNotes = event.target.editedNotes.value;

      const updatedSections = sections.map((section) => {
         const updatedExerciseSet = section.exerciseSets.map((exerciseSet) => ({
            sets: [`${section.name}-${exerciseSet.id}-sets`].value,
            reps: [`${section.name}-${exerciseSet.id}-reps`].value,
            weight: [`${section.name}-${exerciseSet.id}-weight`].value,
            exercise: [`${section.name}-${exerciseSet.id}-exercise`].value,
         }));
         return {
            ...section,
            exerciseSets: updatedExerciseSet,
         };
      });

      const id = currentWorkoutRoutine.id;

      const editedPlan = {
         id,
         title: editedTitle,
         notes: editedNotes,
         sectionsOfThisPlan: updatedSections,
      };

      onUpdatedPlan(editedPlan);
      setEdit(!edit);
   }

   return (
      <>
         {edit === true ? (
            <>
               <button
                  type='button'
                  onClick={() => setEdit(!edit)}>
                  Cancel Edit
               </button>
               <EditCurrenWorkoutRoutine
                  onEditSubmit={handleEditSubmit}
                  currentWorkoutRoutine={currentWorkoutRoutine}
                  sections={sections}
                  value={value}
                  onChange={onChange}
                  // Ab hier Props Übergabe der sections

                  onAddSection={onAddSection}
                  onAddExerciseSet={onAddExerciseSet}
                  onDeleteSection={onDeleteSection}
                  onDeleteSet={onDeleteSet}
               />
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

               {currentWorkoutRoutine.sectionsOfThisPlan?.map((section) => (
                  <SectionsOfCurrenWorkoutRoutine>
                     <h4> {section.name} </h4>

                     {section.exerciseSets?.map((exerciseSet) => (
                        <ExerciseSetCurrentWorkoutRoutine key={exerciseSet.id}>
                           <StyledInputData>{exerciseSet.sets}</StyledInputData>
                           <p> x </p>
                           <StyledInputData>{exerciseSet.reps}</StyledInputData>
                           <StyledInputData>
                              {exerciseSet.weight}
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

   h2 {
      font-size: 1.5rem;
      margin: 0;
      text-align: center;
   }

   p {
      font-size: 1rem;
      margin: 0.25rem;
      text-align: center;
   }
`;
const SectionsOfCurrenWorkoutRoutine = styled.section`
   padding: 10px;
   margin: 15px 0px 15px 0px;
   border: 1px solid;
   height: 80%;
   border-radius: 10px;

   h4 {
      margin: 5px 0 10px 0px;
      font-size: 1rem;
   }
`;
const ExerciseSetCurrentWorkoutRoutine = styled.div`
   display: flex;
   flex-flow: row wrap;
   align-items: center;

   p {
      font-size: small;
      margin: 0px 5px 10px 0px;
      font-size: 16px;
   }
`;

const StyledInputData = styled.p`
   background-color: #efefef;
   border: 1px solid #dfe0e2;
   padding: 10px;
   border-radius: 10px;
`;
