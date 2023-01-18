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

         {/* saved Plan / current Workout Routine data will be rendered as a form  from here:  */}
         {gymPlan.sections?.map((section, sectionIndex) => (
            <StyledSection key={section.name}>
               <h3> {section.name}</h3>

               <DeleteButton
                  type='button'
                  onClick={() => onDeleteSection(sectionIndex)}>
                  x
               </DeleteButton>

               {section.exerciseSets?.map((exerciseSet, id) => (
                  <SwipeExerciseToLeft key={exerciseSet.id}>
                     <input
                        type='number'
                        aria-label='set sets'
                        label='sets'
                        placeholder='sets'
                        min='0'
                        max='500'
                        defaultValue={exerciseSet.sets}
                        name={`${section.name}-${exerciseSet.id}-sets`}
                     />
                     <p>x</p>
                     <input
                        type='number'
                        aria-label='set repitition'
                        label='reps'
                        placeholder='reps'
                        min='0'
                        max='500'
                        defaultValue={exerciseSet.reps}
                        name={`${section.name}-${exerciseSet.id}-reps`}
                     />

                     <input
                        type='number'
                        aria-label='set weight'
                        label='weight'
                        placeholder='weight'
                        min='0'
                        max='500'
                        defaultValue={exerciseSet.weight}
                        name={`${section.name}-${exerciseSet.id}-weight`}
                     />

                     <input
                        type='text'
                        aria-label='set exercise'
                        label='exercise'
                        autoComplete='off'
                        placeholder='exercise'
                        defaultValue={exerciseSet.exercise}
                        name={`${section.name}-${exerciseSet.id}-exercise`}
                     />
                     <button
                        type='button'
                        onClick={() => onDeleteSet(sectionIndex, id)}>
                        delete set
                     </button>
                  </SwipeExerciseToLeft>
               ))}

               <AddExerciseSet
                  type='button'
                  onClick={() => onAddNewExerciseSet(sectionIndex)}>
                  add exercise
               </AddExerciseSet>
            </StyledSection>
         ))}

         <SectionAndExerciseSet
            sections={sections}
            onDeleteSection={onDeleteSection}
            onAddExerciseSet={onAddExerciseSet}
            onDeleteSet={onDeleteSet}
         />

         <SaveButton type='submit'> save my edit </SaveButton>
      </StyledForm>
   );
}
