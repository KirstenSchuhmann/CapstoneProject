import { useState } from 'react';
import { nanoid } from 'nanoid';

import SectionAndExerciseSet from './Section+ExerciseSet';

import {
   AddSectionButton,
   StyledForm,
   SaveButton,
   CenterButtons,
   StyledNotes,
   StyledNotesLabel,
   StyledLabelTitle,
   StyledFieldSet,
   GymPlanTitle,
} from './GymPlanStyling';

export default function GymPlan() {
   const [sections, setSections] = useState([]);

   function addSection(sectionName) {
      setSections([...sections, { name: sectionName, exerciseSets: [] }]);
   }
   // Delete Section
   function deleteSection(sectionIndex) {
      if (sectionIndex >= 0) {
         const removedSection = sections.splice(sectionIndex, 1);
         sections - removedSection;
         setSections([...sections]);
      }
   }

   const addExerciseSet = (sectionIndex) => {
      const updatedSections = [...sections];
      updatedSections[sectionIndex].exerciseSets.push({
         id: nanoid(),
         sets: '',
         reps: '',
         weight: '',
         exercise: '',
      });
      setSections(() => updatedSections);
   };

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

   // To Create Buttons
   const createSectionName = [
      'Warm-Up',
      'Squat',
      'Bench',
      'Deadlift',
      'Assistant',
   ];

   console.log(sections);

   return (
      <StyledForm onSubmit={handleSubmit}>
         <StyledFieldSet>
            <StyledLabelTitle htmlFor='planTitle'>Title: </StyledLabelTitle>
            <GymPlanTitle
               type='text'
               placeholder='e.g. Block W1'
               aria-label='Type plan name'
               label='planTitle'
               maxLength={30}></GymPlanTitle>

            <StyledNotesLabel htmlFor='notes'>notes: </StyledNotesLabel>
            <StyledNotes
               placeholder='...safe notes for later.'
               aria-label='Type plan name'
               label='notes'
               maxLength={30}
            />
         </StyledFieldSet>
         <CenterButtons>
            {createSectionName.map((section) => (
               <AddSectionButton
                  type='button'
                  onClick={() => addSection(section)}>
                  {section}
               </AddSectionButton>
            ))}
         </CenterButtons>
         <SectionAndExerciseSet
            sections={sections}
            addSection={addSection}
            addExerciseSet={addExerciseSet}
            deleteSection={deleteSection}
         />

         <SaveButton type='submit'> Save Gym Plan </SaveButton>
      </StyledForm>
   );
}
