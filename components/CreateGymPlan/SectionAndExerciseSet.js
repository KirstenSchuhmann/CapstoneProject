import {
   StyledSection,
   AddExerciseSet,
   StyledDiv,
   DeleteButton,
} from './CreateWorkoutRoutineStyling';

export default function SectionAndExerciseSet({
   sections,
   onAddExerciseSet,
   onDeleteSection,
}) {
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

               {section.exerciseSets.map((exerciseSet) => (
                  <>
                     <StyledDiv key={exerciseSet.id}>
                        <input
                           type='number'
                           aria-label='set sets'
                           label='set'
                           placeholder='set'
                           min='0'
                           name={`${section.name}-${exerciseSet.id}-sets`}
                        />
                        <p>x</p>
                        <input
                           type='number'
                           aria-label='set repitition'
                           label='reps'
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
                  onClick={() => onAddExerciseSet(sectionIndex)}>
                  add exercise
               </AddExerciseSet>
            </StyledSection>
         ))}
      </>
   );
}
