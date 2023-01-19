import SwipeExerciseToLeft from '../CreateGymPlan/SectionAndExerciseSet/SwipeLeftFunction';
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

import {
   StyledSection,
   AddExerciseSet,
   DeleteButton,
} from '../CreateGymPlan/SectionAndExerciseSet/SectionAndExerciseSetStyling';

export default function EditPlanForm({
   onEditSubmit,
   sections,

   gymPlan,
   onAddSection,

   onAddNewSection,
   onAddExerciseSet,
   onAddNewExerciseSet,
   onDeleteSection,
   onDeleteSet,
}) {
   // To Create Buttons
   const createSectionName = [
      'Warm-Up',
      'Squat',
      'Bench',
      'Deadlift',
      'Assistant',
   ];
   console.log(gymPlan, 'GYM PLAN');
   console.log(sections, 'SECTIONS');
   return (
      <StyledForm onSubmit={onEditSubmit}>
         <StyledFieldSet>
            <StyledLabelTitle htmlFor='planTitle'>Title: </StyledLabelTitle>
            <GymPlanTitle
               type='text'
               name='editedTitle'
               aria-label='Type plan name'
               label='editedTitle'
               maxLength={35}
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
                  type='button'
                  onClick={() => onAddNewSection(sectionName)}>
                  {sectionName}
               </AddSectionButton>
            ))}
         </CenterButtons>

         <SectionAndExerciseSet
            sections={sections}
            onDeleteSection={onDeleteSection}
            onAddExerciseSet={onAddNewExerciseSet}
            onDeleteSet={onDeleteSet}
         />

         <SaveButton type='submit'> save my edit </SaveButton>
      </StyledForm>
   );
}
