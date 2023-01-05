import { useState } from 'react';

import SectionAndExerciseSet from './Section+ExerciseSet';

import {
   StyledSection,
   AddSectionButton,
   StyledForm,
   AddExerciseSet,
   SaveButton,
} from './GymPlanStyling';

export default function GymPlan() {
   const [sections, setSections] = useState([]);

   function addSection(sectionName) {
      setSections([...sections, { name: sectionName, exerciseSets: [] }]);
   }

   // Function storing input values
   function handleSubmit(event) {
      event.preventDefault();

      const formElements = event.target.elements;

      const updatedSections = sections.map((section) => {
         const updatedExerciseSet = section.exerciseSets.map((exerciseSet) => ({
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
      setSections(updatedSections);
   }

   return (
      <StyledForm onSubmit={handleSubmit}>
         <AddSectionButton
            type='button'
            onClick={() => addSection('Warm-Up')}>
            add Warm-Up
         </AddSectionButton>
         <AddSectionButton
            type='button'
            onClick={() => addSection('Squat')}>
            add Squat
         </AddSectionButton>
         <AddSectionButton
            type='button'
            onClick={() => addSection('Bench')}>
            add Bench
         </AddSectionButton>
         <AddSectionButton
            type='button'
            onClick={() => addSection('Deadlift')}>
            add Deadlift
         </AddSectionButton>
         <AddSectionButton
            type='button'
            onClick={() => addSection('Assistant')}>
            add Assistant
         </AddSectionButton>

         <SectionAndExerciseSet
            sections={sections}
            addSection={addSection}
         />

         <SaveButton type='submit'> Save Gym Plan </SaveButton>
      </StyledForm>
   );
}
