import SectionAndExerciseSet from '../CreateGymPlan/SectionAndExerciseSet/SectionAndExerciseSet';

import {
   AddSectionButton,
   StyledForm,
   CenterButtons,
   GymPlanTitle,
   StyledNotes,
   StyledNotesLabel,
   StyledLabelTitle,
   StyledFieldSet,
   SaveButton,
} from '../CreateGymPlan/CreateGymPlan/CreateGymPlanStyling.js';

import styled from 'styled-components';
import { nanoid } from 'nanoid';

export default function EditPlanForm({
   onEditSubmit,
   sections,
   gymPlan,
   onAddExerciseSet,
   onAddSection,
   onDeleteSection,
   onDeleteSet,
}) {
   const createSectionName = [
      'Warm-Up',
      'Squat',
      'Bench',
      'Deadlift',
      'Assistant',
   ];

   return (
      <StyledForm onSubmit={onEditSubmit}>
         <StyledFieldSet>
            <StyledLabelTitle htmlFor='planTitle'>Title: </StyledLabelTitle>
            <GymPlanTitle
               type='text'
               name='editedTitle'
               aria-label='Type plan name'
               label='editedTitle'
               maxLength={30}
               defaultValue={gymPlan.title}
               required></GymPlanTitle>

            <StyledNotesLabel htmlFor='notes'>notes: </StyledNotesLabel>
            <StyledNotes
               placeholder='...safe notes for later.'
               name='editedNotes'
               label='editedNotes'
               defaultValue={gymPlan.notes}
               aria-label='Type plan name'
               maxLength={300}
            />
         </StyledFieldSet>
         <CenterButtons>
            {createSectionName.map((sectionName) => (
               <AddSectionButton
                  key={nanoid()}
                  type='button'
                  onClick={() => onAddSection(sectionName)}>
                  {sectionName}
               </AddSectionButton>
            ))}
         </CenterButtons>

         <SectionAndExerciseSet
            sections={sections}
            onDeleteSection={onDeleteSection}
            onDeleteSet={onDeleteSet}
            onAddExerciseSet={onAddExerciseSet}
         />

         <SaveButton type='submit'>save my edit</SaveButton>
      </StyledForm>
   );
}
