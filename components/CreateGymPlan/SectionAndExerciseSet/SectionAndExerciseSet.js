import {
   StyledSection,
   AddExerciseSet,
   DeleteButton,
   SmallInfoText,
} from './SectionAndExerciseSetStyling';

import SwipeExerciseToLeft from './SwipeLeftFunction';

export default function SectionAndExerciseSet({
   sections,
   onAddExerciseSet,
   onDeleteSection,
   onDeleteSet,
}) {
   return (
      <>
         {sections.map((section, sectionIndex) => (
            <StyledSection key={section.id}>
               <h3> {section.name}</h3>
               <DeleteButton
                  type='button'
                  onClick={() => onDeleteSection(sectionIndex)}>
                  x
               </DeleteButton>
               <SmallInfoText>Swipe to delete</SmallInfoText>

               {section.exerciseSets.map((exerciseSet, id) => (
                  <SwipeExerciseToLeft key={exerciseSet.id}>
                     <input
                        type='number'
                        aria-label='set sets'
                        label='sets'
                        placeholder='sets'
                        min='0'
                        max='500'
                        pattern='[0-9]+'
                        defaultValue={exerciseSet.sets}
                        name={`${section.name}-${exerciseSet.id}-sets`}
                        required
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
                        required
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
                        required
                     />
                     <button
                        type='button'
                        tabIndex='-1'
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
