import {
   StyledSection,
   AddExerciseSet,
   DeleteButton,
} from './SectionAndExerciseSetStyling';

import SwipeExerciseToLeft from './SwipeLeftFunction';

export default function SectionAndExerciseSet({
   gymPlans,
   sections,
   value,
   onChange,
   currentWorkoutRoutine,
   onAddExerciseSet,
   onDeleteSection,
   onDeleteSet,
}) {
   // if (!gymPlans) {
   //    return null;
   // } else gymPlans.find((gymPlan) => gymPlan.id === id);

   // const lookForId = !currentWorkoutRoutine ? [] : currentWorkoutRoutine.id;

   if (!gymPlans) {
      return null;
   }

   const TestA = !currentWorkoutRoutine ? [] : currentWorkoutRoutine.id;

   console.log(currentWorkoutRoutine);
   // const currentWorkoutRoutine = gymPlans.find((gymPlan) => gymPlan.id === id);

   //const lookForPlan = !gymPlans ? null : currentWorkoutRoutine.id;

   // const savedPlan = gymPlans.find((gymPlan) => gymPlan.id === id);

   // if (!savedPlan) {
   //    return null;
   // }
   // const useCase =
   //    currentWorkoutRoutine.id === id
   //       ? currentWorkoutRoutine.sectionsOfThisPlan
   //       : (gymPlans = []).sections;

   return (
      <>
         {sections.map((section, sectionIndex) => (
            <StyledSection key={sectionIndex}>
               <h3> {section.name}</h3>
               <DeleteButton
                  type='button'
                  onClick={() => onDeleteSection(sectionIndex)}>
                  x
               </DeleteButton>

               {section.exerciseSets.map((exerciseSet, id) => (
                  <SwipeExerciseToLeft key={exerciseSet.id}>
                     <input
                        type='number'
                        aria-label='set sets'
                        label='sets'
                        placeholder='sets'
                        min='0'
                        max='500'
                        value={value}
                        onChange={onChange}
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
                        value={value}
                        onChange={onChange}
                        name={`${section.name}-${exerciseSet.id}-reps`}
                     />

                     <input
                        type='number'
                        aria-label='set weight'
                        label='weight'
                        placeholder='weight'
                        min='0'
                        max='500'
                        value={value}
                        onChange={onChange}
                        name={`${section.name}-${exerciseSet.id}-weight`}
                     />

                     <input
                        type='text'
                        aria-label='set exercise'
                        label='exercise'
                        autoComplete='off'
                        placeholder='exercise'
                        value={value}
                        onChange={onChange}
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
                  onClick={() => onAddExerciseSet(sectionIndex)}>
                  add exercise
               </AddExerciseSet>
            </StyledSection>
         ))}
      </>
   );
}
