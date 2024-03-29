import { nanoid } from 'nanoid';

import SectionAndExerciseSet from '../SectionAndExerciseSet/SectionAndExerciseSet';

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
} from './CreateGymPlanStyling';

export default function CreateGymPlanForm({
   onCreatePlan,
   sections,
   onAddSection,
   onAddExerciseSet,
   onDeleteSection,
   onDeleteSet,
}) {
   function handleSubmit(event) {
      event.preventDefault();

      const formElements = event.target.elements;
      const title = formElements.title.value;
      const notes = formElements.notes.value;

      const updatedSections = sections.map((section) => {
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
            id: nanoid(),
            ...section,
            exerciseSets: updatedExerciseSet,
         };
      });

      const newPlan = {
         id: nanoid(),
         title,
         notes,
         sections: updatedSections,
      };

      onCreatePlan(newPlan);
      location.reload();
   }

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
               maxLength={30}
               autoComplete='off'
               required></GymPlanTitle>

            <StyledNotesLabel htmlFor='notes'>notes: </StyledNotesLabel>
            <StyledNotes
               placeholder='...safe notes for later.'
               name='notes'
               aria-label='Type plan name'
               autoComplete='off'
               maxLength={350}
            />
         </StyledFieldSet>
         <CenterButtons>
            {createSectionName.map((sectionName) => (
               <AddSectionButton
                  key={nanoid()}
                  type='button'
                  autoComplete='off'
                  onClick={() => onAddSection(sectionName)}>
                  {sectionName}
               </AddSectionButton>
            ))}
         </CenterButtons>
         <SectionAndExerciseSet
            sections={sections}
            onAddSection={onAddSection}
            onAddExerciseSet={onAddExerciseSet}
            onDeleteSection={onDeleteSection}
            onDeleteSet={onDeleteSet}
         />
         <SaveButton type='submit'>add workout routine</SaveButton>
      </StyledForm>
   );
}
