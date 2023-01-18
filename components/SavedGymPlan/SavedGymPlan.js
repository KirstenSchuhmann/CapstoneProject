import { useState } from 'react';
import styled from 'styled-components';
import EditPlanForm from './EditPlanForm';

export default function SavedWorkoutRoutine({ gymPlan, onUpdatedPlan }) {
   const [edit, setEdit] = useState(false);

   function handleAddNewSection(sectionName) {
      const sections = gymPlan.sections;
      sections.push[{ name: sectionName, exerciseSets: [] }];
   }

   function handleDeleteSection(sectionIndex) {
      if (sectionIndex >= 0) {
         const removedSection = gymPlan.sections.splice(sectionIndex, 1);
         sections - removedSection;
         setSections([...sections]);
      }
   }

   function handleAddNewExercise(sectionIndex) {
      const updatedSections = gymPlans.sections;
      updatedSections[sectionIndex].exerciseSets.push({
         id: nanoid(),
         sets: '',
         reps: '',
         weight: '',
         exercise: '',
      });
      setSections(() => updatedSections);
   }

   function handleDeleteSet(sectionIndex, setId) {
      const exercisesInSelectedSection =
         gymPlan.sections[sectionIndex].exerciseSets;
      const idOfSet = sections[sectionIndex].exerciseSets[setId];

      if (setId >= 0) {
         let removeSet = exercisesInSelectedSection.splice(setId, 1);
         exercisesInSelectedSection - removeSet;
         setSections([...sections]);
      }
   }

   function handleEditSubmit(event) {
      event.preventDefault();

      const formElements = event.target.elements;

      const editedTitle = formElements.editedTitle.value;
      const editedNotes = formElements.editedNotes.value;

      const updatedSections = currentWorkoutRoutine.sectionsOfThisPlan.map(
         (section) => {
            const updatedExerciseSet = section.exerciseSets.map(
               (exerciseSet) => ({
                  sets: formElements[`${section.name}-${exerciseSet.id}-sets`]
                     .value,
                  reps: formElements[`${section.name}-${exerciseSet.id}-reps`]
                     .value,
                  weight:
                     formElements[`${section.name}-${exerciseSet.id}-weight`]
                        .value,
                  exercise:
                     formElements[`${section.name}-${exerciseSet.id}-exercise`]
                        .value,
               })
            );
            return {
               ...section,
               exerciseSets: updatedExerciseSet,
            };
         }
      );

      const id = currentWorkoutRoutine.id;

      const editedPlan = {
         id,
         title: editedTitle,
         notes: editedNotes,
         sectionsOfThisPlan: updatedSections,
         addedSections,
         // +  ----------------> added Sections hinzufügen (weitere constante erstellen, die durch sections mappt)
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

               <EditPlanForm
                  onEditSubmit={handleEditSubmit}
                  gymPlan={gymPlan}
                  // Ab hier Props Übergabe der sections

                  onDeleteSection={handleDeleteSection}
                  onAddNewExercise={handleAddNewExercise}
                  onAddNewSection={handleAddNewSection}
                  onDeleteSet={handleDeleteSet}
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
               <h2> {currentWorkoutRoutine.title} </h2>

               <p> {currentWorkoutRoutine.notes} </p>

               {currentWorkoutRoutine.sectionsOfThisPlan?.map(
                  (section, sectionIndex) => (
                     <SectionsOfCurrenWorkoutRoutine key={sectionIndex}>
                        <h4> {section.name} </h4>

                        {section.exerciseSets?.map((exerciseSet) => (
                           <ExerciseSetCurrentWorkoutRoutine
                              key={exerciseSet.id}>
                              <StyledInputData>
                                 {exerciseSet.sets}
                              </StyledInputData>
                              <p> x </p>
                              <StyledInputData>
                                 {exerciseSet.reps}
                              </StyledInputData>
                              <StyledInputData>
                                 {exerciseSet.weight}
                              </StyledInputData>
                              <StyledInputData>
                                 {exerciseSet.exercise}
                              </StyledInputData>
                           </ExerciseSetCurrentWorkoutRoutine>
                        ))}
                     </SectionsOfCurrenWorkoutRoutine>
                  )
               )}

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
