import { useState } from 'react';
import styled from 'styled-components';
import EditCurrenWorkoutRoutine from './EditWorkoutRoutine';

export default function SavedWorkoutRoutine({
   currentWorkoutRoutine,
   onUpdatedPlan,

   sections,
   onAddExerciseSet,
   onDeleteSection,
   onAddSection,
   onDeleteSet,
}) {
   const [edit, setEdit] = useState(false);

   function handleEditSubmit(event) {
      event.preventDefault();
      const formElements = event.target.elements;
      const editedTitle = formElements.editedTitle.value;
      const editedNotes = formElements.editedNotes.value;

      const updatedSections = currentWorkoutRoutine.addedSections.map(
         (section) => {
            const updatedExerciseSet = section.exerciseSets.map(
               (exerciseSet) => ({
                  sets: formElements[`${exerciseSet.id}-editedSets`].value,
                  reps: formElements[`${exerciseSet.id}-editedReps`].value,
                  weight: formElements[`${exerciseSet.id}-editedWeight`].value,
                  exercise:
                     formElements[`${exerciseSet.id}-editedExercise`].value,
               })
            );
            return { ...section, exerciseSets: updatedExerciseSet };
         }
      );

      const id = currentWorkoutRoutine.id;

      const editedPlan = {
         id,
         title: editedTitle,
         notes: editedNotes,
         addedSections: updatedSections,
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
                  onClick={() => setEdit(edit)}>
                  Cancel Edit
               </button>
               <EditCurrenWorkoutRoutine
                  sections={sections}
                  onAddExerciseSet={onAddExerciseSet}
                  onDeleteSection={onDeleteSection}
                  // Ab hier aktuell funktioniert
                  onDeleteSet={onDeleteSet}
                  onEditSubmit={handleEditSubmit}
                  currentWorkoutRoutine={currentWorkoutRoutine}
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

               {currentWorkoutRoutine.addedSections?.map((section) => (
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
