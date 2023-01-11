import { nanoid } from 'nanoid';
import { useState } from 'react';

import SectionAndExerciseSet from './SectionAndExerciseSet';

import {
   AddSectionButton,
   StyledForm,
   CenterButtons,
   StyledNotes,
   StyledNotesLabel,
   StyledLabelTitle,
   StyledFieldSet,
   GymPlanTitle,
   SaveButton,
} from './CreateWorkoutRoutineStyling';

export default function CreateWorkoutRoutineForm({
   sections,
   onCreatePlan,
   onAddExerciseSet,
   onDeleteSection,
   onAddSection,
}) {
   // Function storing input values
   function handleSubmit(event) {
      event.preventDefault();

      const formElements = event.target.elements;
      const title = formElements.title.value;
      const notes = formElements.notes.value;

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

      //setSections(updatedSections);

      const newPlan = {
         id: nanoid(),
         title,
         notes,
         updatedSections,
      };

      onCreatePlan(newPlan);
      console.log(newPlan);

      event.target.reset();
   }

   console.log(sections);

   // To Create Buttons
   const createSectionName = [
      'Warm-Up',
      'Squat',
      'Bench',
      'Deadlift',
      'Assistant',
   ];

   return (
      <StyledForm onSubmit={handleSubmit}>
         <StyledFieldSet>
            <StyledLabelTitle htmlFor='planTitle'>Title: </StyledLabelTitle>
            <GymPlanTitle
               type='text'
               name='title'
               placeholder='e.g. Block W1'
               aria-label='Type plan name'
               label='planTitle'
               maxLength={30}></GymPlanTitle>

            <StyledNotesLabel htmlFor='notes'>notes: </StyledNotesLabel>
            <StyledNotes
               placeholder='...safe notes for later.'
               name='notes'
               aria-label='Type plan name'
               label='notes'
               maxLength={300}
            />
         </StyledFieldSet>
         <CenterButtons>
            {createSectionName.map((section) => (
               <AddSectionButton
                  type='button'
                  onClick={() => onAddSection(section)}>
                  {section}
               </AddSectionButton>
            ))}
         </CenterButtons>
         <SectionAndExerciseSet
            sections={sections}
            onAddExerciseSet={onAddExerciseSet}
            onDeleteSection={onDeleteSection}
         />
         <SaveButton
            type='submit'
            aria-label='add workout routine'>
            add workout routine
         </SaveButton>
      </StyledForm>
   );
}
