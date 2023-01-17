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

import SectionAndExerciseSet from '../CreateGymPlan/SectionAndExerciseSet/SectionAndExerciseSet';

export default function EditCurrenWorkoutRoutine({
   currentWorkoutRoutine,
   onEditSubmit,

   onChange,
   value,
   sections,

   onAddSection,
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

   // console.log(currentWorkoutRoutine.sectionsOfThisPlan);

   //const currentSections = currentWorkoutRoutine.sectionsOfThisPlan;

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
                  onClick={() => onAddSection(sectionName)}>
                  {sectionName}
               </AddSectionButton>
            ))}
         </CenterButtons>

         {/* saved Plan / current Workout Routine data will be rendered as a form  from here:  */}
         {currentWorkoutRoutine.sectionsOfThisPlan?.map((section) => (
            <StyledSection key={section.name}>
               <h3> {section.name}</h3>

               <DeleteButton
                  type='button'
                  onClick={() => onDeleteSection(sectionIndex)}>
                  x
               </DeleteButton>

               {/* {section.exerciseSets?.map((exerciseSet, id) => (
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
               ))} */}

               <AddExerciseSet
                  type='button'
                  onClick={() => onAddExerciseSet(sectionIndex)}>
                  add exercise
               </AddExerciseSet>
            </StyledSection>
         ))}
         {/* Ab hier werden neue Sections mit neuen Übungen hinzugefügt, wenn notwendig */}
         <SectionAndExerciseSet
            onChange={onChange}
            value={value}
            sections={sections}
            currentWorkoutRoutine={currentWorkoutRoutine}
            onAddExerciseSet={onAddExerciseSet}
            onDeleteSection={onDeleteSection}
            onDeleteSet={onDeleteSet}
         />
         <SaveButton type='submit'> save my edit </SaveButton>
      </StyledForm>
   );
}
