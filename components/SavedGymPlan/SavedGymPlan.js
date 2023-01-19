import { useState } from 'react';
import { nanoid } from 'nanoid';

import EditPlanForm from './EditPlanForm';

export { DeleteButton } from '../components/CreateGymPlan/SectionAndExerciseSet/SectionAndExerciseSetStyling';
import {
   StyledPlan,
   SecctionsOfGymPlan,
   StyledExerciseSet,
   InputStyling,
} from './SavedGymPlanStyling';

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
            id: section.id,
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
               <DeleteButton onClick={() => onDeletePlan()}>
                  Delete this plan
               </DeleteButton>
               <h2> {gymPlan.title} </h2>

               <p> {gymPlan.notes} </p>

               {gymPlan.sections?.map((section, sectionIndex) => (
                  <SecctionsOfGymPlan key={sectionIndex}>
                     <h4> {section.name} </h4>

                     {section.exerciseSets.map((exerciseSet) => (
                        <StyledExerciseSet key={exerciseSet.id}>
                           <InputStyling>{exerciseSet.sets}</InputStyling>
                           <p> x </p>
                           <InputStyling>{exerciseSet.reps}</InputStyling>
                           <InputStyling>{exerciseSet.weight}</InputStyling>
                           <InputStyling>{exerciseSet.exercise}</InputStyling>
                        </StyledExerciseSet>
                     ))}
                  </SecctionsOfGymPlan>
               ))}
            </StyledPlan>
         )}
      </>
   );
}
