import { useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import EditPlanForm from './EditPlanForm';

import { DeleteIconTrashButton, EditGymPlanButton } from '../ButtonStyling';

import {
   StyledPlan,
   ExerciseSet,
   SectionsOfGymPlan,
   InputStyling,
   GetBackToMainPage,
   InputContext,
   StyledNotes,
   X,
} from './SavedGymPlanStyling';

export default function SavedGymPlan({ gymPlan, onUpdatedPlan, onDeletePlan }) {
   // this state is for for the edit mode, to add / delete content in the gymPlan:
   const [edit, setEdit] = useState(false);

   // new state, so the edit functions are referring to this one:
   const [sections, setSections] = useState(gymPlan.sections);

   // functions copied & pasted from _app.js, cause lifting them down wouldn't work with the new State
   // and using the state from _app.js would cause a bug.

   function handleAddSection(sectionName) {
      setSections([
         ...sections,
         { id: nanoid(), name: sectionName, exerciseSets: [] },
      ]);
   }

   function handleAddExerciseSet(sectionIndex) {
      const updatedSections = [...sections];
      updatedSections[sectionIndex].exerciseSets.push({
         id: nanoid(),
         sets: '',
         reps: '',
         weight: '',
         exercise: '',
      });
      setSections(() => updatedSections);
   }

   function handleDeleteSection(sectionIndex) {
      if (sectionIndex >= 0) {
         const removedSection = sections.splice(sectionIndex, 1);
         sections - removedSection;
         setSections([...sections]);
      }
   }

   function handleDeleteSet(sectionIndex, setId) {
      const exercisesInSelectedSection = sections[sectionIndex].exerciseSets;

      if (setId >= 0) {
         let removeSet = exercisesInSelectedSection.splice(setId, 1);
         exercisesInSelectedSection - removeSet;
         setSections([...sections]);
      }
   }

   function handleDeleteSet(sectionIndex, setId) {
      const exercisesInSelectedSection = sections[sectionIndex].exerciseSets;

      if (setId >= 0) {
         let removeSet = exercisesInSelectedSection.splice(setId, 1);
         exercisesInSelectedSection - removeSet;
         setSections([...sections]);
      }
   }

   function handleEditSubmit(event) {
      event.preventDefault();

      const formElements = event.target.elements;
      const editedTitle = formElements.editedTitle.value;
      const editedNotes = formElements.editedNotes.value;

      const updatedSections = sections.map((section) => {
         const updatedExerciseSet = section.exerciseSets.map((exerciseSet) => ({
            id: exerciseSet.id,
            sets: formElements[`${section.name}-${exerciseSet.id}-sets`].value,
            reps: formElements[`${section.name}-${exerciseSet.id}-reps`].value,
            weight:
               formElements[`${section.name}-${exerciseSet.id}-weight`].value,
            exercise:
               formElements[`${section.name}-${exerciseSet.id}-exercise`].value,
         }));

         return {
            id: section.id,
            ...section,
            exerciseSets: updatedExerciseSet,
         };
      });

      const editedPlan = {
         id: gymPlan.id,
         title: editedTitle,
         notes: editedNotes,
         sections: updatedSections,
      };

      onUpdatedPlan(editedPlan);
      setEdit(!edit);
   }

   return (
      <>
         {edit === true ? (
            <>
               <EditPlanForm
                  sections={sections}
                  setSections={setSections}
                  onEditSubmit={handleEditSubmit}
                  gymPlan={gymPlan}
                  edit={edit}
                  setEdit={setEdit}
                  onDeleteSection={handleDeleteSection}
                  onAddExerciseSet={handleAddExerciseSet}
                  onAddSection={handleAddSection}
                  onDeleteSet={handleDeleteSet}
               />
            </>
         ) : (
            <StyledPlan>
               <GetBackToMainPage onClick={() => history.back()}>
                  <svg
                     height='30'
                     width='30'
                     xmlns='http://www.w3.org/2000/svg'
                     version='1.1'
                     viewBox='0 0 1024 1024'>
                     <path d='M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z'></path>
                  </svg>
                  <span>Back</span>
               </GetBackToMainPage>
               <EditGymPlanButton
                  type='button'
                  onClick={() => setEdit(!edit)}>
                  <img
                     src='/assets/Edit_Icon.png'
                     width={25}
                  />
               </EditGymPlanButton>

               <DeleteButtonPositioning onClick={() => onDeletePlan()}>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='currentColor'
                     className='bi bi-trash3'
                     viewBox='0 0 20 19'>
                     <path d='M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z' />
                  </svg>
               </DeleteButtonPositioning>
               <h2> {gymPlan.title} </h2>

               <StyledNotes> {gymPlan.notes} </StyledNotes>

               {gymPlan.sections?.map((section, sectionIndex) => (
                  <SectionsOfGymPlan key={sectionIndex}>
                     <h4> {section.name} </h4>

                     {section.exerciseSets.map((exerciseSet) => (
                        <ExerciseSet key={exerciseSet.id}>
                           <InputStyling>{exerciseSet.sets}</InputStyling>
                           <X> x </X>
                           <InputStyling>{exerciseSet.reps}</InputStyling>
                           <InputStyling>
                              {exerciseSet.weight}
                              <InputContext> kg </InputContext>
                           </InputStyling>

                           <InputStyling>{exerciseSet.exercise}</InputStyling>
                        </ExerciseSet>
                     ))}
                  </SectionsOfGymPlan>
               ))}
            </StyledPlan>
         )}
      </>
   );
}

const DeleteButtonPositioning = styled(DeleteIconTrashButton)`
   position: relative;
   width: 45px;
   height: 45px;
   left: 50px;
   top: 5px;

   border-radius: 50%;

   svg {
      position: relative;
      left: 2px;
   }
`;
