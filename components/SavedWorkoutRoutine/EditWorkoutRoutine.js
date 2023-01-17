import SwipeExerciseToLeft from '../CreateGymPlan/SectionAndExerciseSet/SwipeLeftFunction';

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
} from '../CreateGymPlan/CreateWorkoutRoutineForm/CreateWorkoutRoutineStyling';

import {
   StyledSection,
   AddExerciseSet,
   DeleteButton,
} from '../CreateGymPlan/SectionAndExerciseSet/SectionAndExerciseSetStyling';

export default function EditCurrenWorkoutRoutine({
   currentWorkoutRoutine,
   onEditSubmit,
   onAddExerciseSet,
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

   function handleAddingMoreSections(sectionName) {
      const currentSections = currentWorkoutRoutine.addedSections;
      [...currentSections, { name: sectionName, exerciseSets: [] }];
      console.log(currentWorkoutRoutine.addedSections);
   }

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
               defaultValue={currentWorkoutRoutine.title}
               required></GymPlanTitle>

            <StyledNotesLabel htmlFor='notes'>notes: </StyledNotesLabel>
            <StyledNotes
               placeholder='...safe notes for later.'
               name='editedNotes'
               label='editedNotes'
               defaultValue={currentWorkoutRoutine.notes}
               aria-label='Type plan name'
               maxLength={300}
            />
         </StyledFieldSet>
         <CenterButtons>
            {createSectionName.map((sectionName) => (
               <AddSectionButton
                  type='button'
                  onClick={() => handleAddingMoreSections(sectionName)}>
                  {sectionName}
               </AddSectionButton>
            ))}
         </CenterButtons>
         {currentWorkoutRoutine.addedSections?.map(({ name, exerciseSets }) => (
            <StyledSection key={name}>
               <h3> {name}</h3>

               <DeleteButton
                  type='button'
                  onClick={() => onDeleteSection(sectionIndex)}>
                  x
               </DeleteButton>

               {exerciseSets?.map(({ id, sets, reps, weight, exercise }) => (
                  <SwipeExerciseToLeft key={id}>
                     <input
                        type='number'
                        aria-label='set sets'
                        label='sets'
                        placeholder='sets'
                        min='0'
                        max='500'
                        defaultValue={sets}
                        name={`${id}-editedSets`}
                     />
                     <p>x</p>
                     <input
                        type='number'
                        aria-label='set repitition'
                        label='reps'
                        placeholder='reps'
                        min='0'
                        max='500'
                        defaultValue={reps}
                        name={`${id}-editedReps`}
                     />

                     <input
                        type='number'
                        aria-label='set weight'
                        label='weight'
                        placeholder='weight'
                        min='0'
                        max='500'
                        defaultValue={weight}
                        name={`${id}-editedWeight`}
                     />

                     <input
                        type='text'
                        aria-label='set exercise'
                        label='exercise'
                        autoComplete='off'
                        placeholder='exercise'
                        defaultValue={exercise}
                        name={`${id}-editedExercise`}
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
                  onClick={() => onAddExerciseSet(sectionIndex)}>
                  add exercise
               </AddExerciseSet>
            </StyledSection>
         ))}
         <SaveButton type='submit'> save my edit </SaveButton>
      </StyledForm>
   );
}
