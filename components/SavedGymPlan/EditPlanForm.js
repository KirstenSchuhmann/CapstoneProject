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

export default function EditPlanForm({
   onEditSubmit,
   sections,
   gymPlan,

   onAddExerciseSet,
   // onAddNewSection,
   // onAddNewExerciseSet,
   onAddSection,
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
                  onClick={() => onAddSection(sectionName)}>
                  {sectionName}
               </AddSectionButton>
            ))}
         </CenterButtons>

         <SectionAndExerciseSet
            // onAddExerciseSet={onAddNewExerciseSet} //  1 - das was mit Thomas noch funktioniert hat
            // Funktionen von _app.js werden heruntergereicht:
            sections={sections}
            onDeleteSection={onDeleteSection}
            onDeleteSet={onDeleteSet}
            onAddExerciseSet={onAddExerciseSet}
         />

         <SaveButton type='submit'> save my edit </SaveButton>
      </StyledForm>
   );
}
