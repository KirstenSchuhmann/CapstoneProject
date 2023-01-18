import SwipeExerciseToLeft from '../CreateGymPlan/SectionAndExerciseSet/SwipeLeftFunction';
import { nanoid } from 'nanoid';

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

   sections,
   setSections,

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

   function handleDeleteSection(sectionIndex) {
      if (sectionIndex >= 0) {
         const removedSection = currentWorkoutRoutine.sectionsOfThisPlan.splice(
            sectionIndex,
            1
         );
         sections - removedSection;
         setSections([...sections]);
      }
   }

   function handleAddNewExercise(sectionIndex) {
      const updatedSections = currentWorkoutRoutine.sectionsOfThisPlan;
      updatedSections[sectionIndex].exerciseSets.push({
         id: nanoid(),
         sets: '',
         reps: '',
         weight: '',
         exercise: '',
      });
      setSections(() => updatedSections);
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
                  onClick={() => onAddSection(sectionName)}>
                  {sectionName}
               </AddSectionButton>
            ))}
         </CenterButtons>

         {/* saved Plan / current Workout Routine data will be rendered as a form  from here:  */}
         {currentWorkoutRoutine.sectionsOfThisPlan?.map(
            (section, sectionIndex) => (
               <StyledSection key={section.name}>
                  <h3> {section.name}</h3>

                  <DeleteButton
                     type='button'
                     onClick={() => handleDeleteSection(sectionIndex)}>
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
                           onClick={() => onDeleteSet(exerciseSet.id)}>
                           delete set
                        </button>
                     </SwipeExerciseToLeft>
                  ))}

                  <AddExerciseSet
                     type='button'
                     onClick={() => handleAddNewExercise(sectionIndex)}>
                     add exercise
                  </AddExerciseSet>
               </StyledSection>
            )
         )}
         {/* new added Sections and exercises will be rendered from this part  */}
         <SectionAndExerciseSet
            sections={sections}
            currentWorkoutRoutine={currentWorkoutRoutine}
            onDeleteSection={onDeleteSection}
            onDeleteSet={onDeleteSet}
            onAddExerciseSet={onAddExerciseSet}
         />
         <SaveButton type='submit'> save my edit </SaveButton>
      </StyledForm>
   );
}
