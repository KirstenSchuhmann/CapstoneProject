import { useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import EditPlanForm from './EditPlanForm';

export default function SavedWorkoutRoutine({
   gymPlan,
   onUpdatedPlan,
   onDeletePlan,
}) {
   const [edit, setEdit] = useState(false);
   // this state is for for the edit mode, to add / delete content in the gymPlan
   const [sections, setSections] = useState(gymPlan.sections);

   // functions copied & pasted from _app.js, cause lifting them down wouldn't work with the new State
   // and using the state from _app.js would cause a bug.

   function handleAddSection(sectionName) {
      setSections([...sections, { name: sectionName, exerciseSets: [] }]);
   }

   function handleAddExerciseSet(sectionIndex) {
      const updatedSections = [...sections];
      updatedSections[sectionIndex].exerciseSets.push({
         id: nanoid(),
         sets: '',
         reps: '',
         weight: '',
         exercise: '',
      });
      setSections(() => updatedSections);
   }

   function handleDeleteSection(sectionIndex) {
      if (sectionIndex >= 0) {
         const removedSection = sections.splice(sectionIndex, 1);
         sections - removedSection;
         setSections([...sections]);
      }
   }

   function handleDeleteSet(sectionIndex, setId) {
      const exercisesInSelectedSection = sections[sectionIndex].exerciseSets;

      if (setId >= 0) {
         let removeSet = exercisesInSelectedSection.splice(setId, 1);
         exercisesInSelectedSection - removeSet;
         setSections([...sections]);
      }
   }

   function handleDeleteSet(sectionIndex, setId) {
      const exercisesInSelectedSection = sections[sectionIndex].exerciseSets;

      if (setId >= 0) {
         let removeSet = exercisesInSelectedSection.splice(setId, 1);
         exercisesInSelectedSection - removeSet;
         setSections([...sections]);
      }
   }

   // Submit Funktion
   function handleEditSubmit(event) {
      event.preventDefault();

      const formElements = event.target.elements;
      const editedTitle = formElements.editedTitle.value;
      const editedNotes = formElements.editedNotes.value;

      const updatedSections = sections.map((section) => {
         const updatedExerciseSet = section.exerciseSets.map((exerciseSet) => ({
            id: exerciseSet.id,
            sets: formElements[`${section.name}-${exerciseSet.id}-sets`].value,
            reps: formElements[`${section.name}-${exerciseSet.id}-reps`].value,
            weight:
               formElements[`${section.name}-${exerciseSet.id}-weight`].value,
            exercise:
               formElements[`${section.name}-${exerciseSet.id}-exercise`].value,
         }));

         return {
            ...section,
            exerciseSets: updatedExerciseSet,
         };
      });

      const editedPlan = {
         id: gymPlan.id,
         title: editedTitle,
         notes: editedNotes,
         sections: updatedSections,
      };

      onUpdatedPlan(editedPlan);
      console.log(editedPlan, 'EDITED PLAN');
      setEdit(!edit);
   }

   return (
      <>
         {edit === true ? (
            <>
               <EditPlanForm
                  sections={sections}
                  setSections={setSections}
                  onEditSubmit={handleEditSubmit}
                  gymPlan={gymPlan}
                  // Currently, functions exist in the same way, as they do in app.js

                  onDeleteSection={handleDeleteSection}
                  onAddExerciseSet={handleAddExerciseSet}
                  onAddSection={handleAddSection}
                  onDeleteSet={handleDeleteSet}
               />
            </>
         ) : (
            <StyledPlan>
               <button
                  type='button'
                  onClick={() => setEdit(!edit)}>
                  Edit Plan
               </button>
               <button onClick={() => onDeletePlan()}>Delete this plan</button>
               <h2> {gymPlan.title} </h2>

               <p> {gymPlan.notes} </p>

               {gymPlan.sections?.map((section, sectionIndex) => (
                  <SectionsOfCurrenWorkoutRoutine key={sectionIndex}>
                     <h4> {section.name} </h4>

                     {section.exerciseSets.map((exerciseSet) => (
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
