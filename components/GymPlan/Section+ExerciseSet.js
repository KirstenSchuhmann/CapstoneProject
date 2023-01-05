import { nanoid } from 'nanoid';

import {
   StyledSection,
   AddSectionButton,
   StyledForm,
   AddExerciseSet,
   SaveButton,
} from './GymPlanStyling';

export default function SectionAndExerciseSet({ sections }) {
   const addExerciseSet = (sectionIndex) => {
      const updatedSections = [...sections];
      updatedSections[sectionIndex].exerciseSets.push({
         id: nanoid(),
         sets: '',
         reps: '',
         weight: '',
         exercise: '',
      });
      setSections(() => updatedSections);
   };

   return (
      <>
         {sections.map((section, sectionIndex) => (
            <StyledSection key={sectionIndex}>
               <h3> {section.name}</h3>

               {section.exerciseSets.map((exerciseSet, setId) => (
                  <>
                     <StyledDiv key={exerciseSet.id}>
                        <input
                           type='number'
                           aria-label='set number'
                           label='set'
                           placeholder='set'
                           min='0'
                           name={`${section.name}-${exerciseSet.id}-sets`}
                        />
                        <p>x</p>
                        <input
                           type='number'
                           aria-label='set volume'
                           label='volume'
                           placeholder='reps'
                           min='0'
                           name={`${section.name}-${exerciseSet.id}-reps`}
                        />

                        <input
                           type='number'
                           aria-label='set weight'
                           label='weight'
                           placeholder='weight'
                           min='0'
                           name={`${section.name}-${exerciseSet.id}-weight`}
                        />

                        <input
                           type='text'
                           aria-label='set exercise'
                           label='exercise'
                           autoComplete='off'
                           placeholder='exercise'
                           name={`${section.name}-${exerciseSet.id}-exercise`}
                        />
                     </StyledDiv>
                  </>
               ))}

               <AddExerciseSet
                  type='button'
                  onClick={() => addExerciseSet(sectionIndex)}>
                  add exercise
               </AddExerciseSet>
            </StyledSection>
         ))}
      </>
   );
}
