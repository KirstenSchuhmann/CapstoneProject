import {
   StyledSection,
   AddExerciseSet,
   SwipeToDeleteInfo,
} from './SectionAndExerciseSetStyling';

import styled from 'styled-components';

import SwipeExerciseToLeft from './SwipeLeftFunction';

import { DeleteIconTrashButton } from '../../ButtonStyling';

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
               <DeleteButtonPositioning
                  type='button'
                  onClick={() => onDeleteSection(sectionIndex)}>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='currentColor'
                     class='bi bi-trash3'>
                     <path d='M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z' />
                  </svg>
               </DeleteButtonPositioning>
               {sections.map && (
                  <SwipeToDeleteInfo>
                     Add exercise and swipe to delete.
                  </SwipeToDeleteInfo>
               )}

               {section.exerciseSets.map((exerciseSet, id) => (
                  <SwipeExerciseToLeft key={exerciseSet.id}>
                     <input
                        autoComplete='off'
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
                        autoComplete='off'
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
                        autoComplete='off'
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
                        autoComplete='off'
                        type='text'
                        aria-label='set exercise'
                        label='exercise'
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

const DeleteButtonPositioning = styled(DeleteIconTrashButton)`
   left: 30px;
   margin-bottom: 5px;
`;
