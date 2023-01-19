import { useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import EditPlanForm from './EditPlanForm';

export default function SavedWorkoutRoutine({
   gymPlan,
   onUpdatedPlan,
   // sections,
   // setSections,

   onAddSection,

   onAddExerciseSet,
   onDeleteSection,
   onDeleteSet,
}) {
   const [edit, setEdit] = useState(false);
   const [sections, setSections] = useState([]);

   function handleEditSubmit(event) {
      event.preventDefault();

      const formElements = event.target.elements;

      const editedTitle = formElements.editedTitle.value;
      const editedNotes = formElements.editedNotes.value;

      const updatedSections = gymPlan.sections.map((section) => {
         const updatedExerciseSet = section.exerciseSets.map((exerciseSet) => ({
            id: nanoid(),
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

      const addedSections = sections.map((section) => {
         const updatedExerciseSet = section.exerciseSets.map((exerciseSet) => ({
            id: nanoid(),
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

      const id = gymPlan.id;

      const editedPlan = {
         id,
         title: editedTitle,
         notes: editedNotes,
         sectionsOfThisPlan: updatedSections.concat(addedSections),
      };

      const newPlan = editedPlan;

      onUpdatedPlan(newPlan);
      setEdit(!edit);
      console.log(editedPlan);
   }

   // If .. Else Anweisungen in den Funktionen schreiben
   // onAddSection
   // onDeleteSection
   // onDeleteSet
   // onAddExerciseSet

   function handleNewSection(sectionName) {
      const savedSections = gymPlan.sections;

      if (gymPlan.sections === savedSections) {
         setSections([...sections, { name: sectionName, exerciseSets: [] }]);
      } else {
         onAddSection(sectionName);
      }
   }

   function handleAddNewExerciseSet(sectionIndex) {
      console.log(gymPlan.sections[sectionIndex]);

      // if (gymPlan.sections[sectionIndex].exerciseSets) {
      //    gymPlan.sections[sectionIndex].exerciseSets.push({
      //       id: nanoid(),
      //       sets: '',
      //       reps: '',
      //       weight: '',
      //       exercise: '',
      //    });
      //    console.log('Gym Plan ');
      // } else {
      //    onAddExerciseSet(sectionIndex);
      //    console.log('function von appjs');
      //    // onAddExerciseSet(sectionIndex);
      // }
   }

   return (
      <>
         {edit === true ? (
            <>
               <EditPlanForm
                  sections={sections}
                  setSections={setSections}
                  onEditSubmit={handleEditSubmit}
                  onAddNewExerciseSet={handleAddNewExerciseSet}
                  onAddNewSection={handleNewSection}
                  gymPlan={gymPlan}
                  onDeleteSection={onDeleteSection}
                  onAddExerciseSet={onAddExerciseSet}
                  onAddSection={onAddSection}
                  onDeleteSet={onDeleteSet}
               />
            </>
         ) : (
            <StyledPlan>
               <button
                  type='button'
                  onClick={() => onDeletePlan(id)}>
                  Delete This Plan
               </button>
               <button
                  type='button'
                  onClick={() => setEdit(!edit)}>
                  Edit Plan
               </button>
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

               {/* Kurzer Test ab hier: Copy & Past von einem letzten commit*/}
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
