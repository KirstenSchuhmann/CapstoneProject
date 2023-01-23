import GlobalStyles from '../GlobalStyles/GlobalStyles';

import { useLocalStorage } from '../helpers/hooks';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function MyApp({ Component, pageProps }) {
   const [gymPlans, setGymPlans] = useLocalStorage('gymPlans', []);
   const [sections, setSections] = useState([]);

   function handleCreatePlan(newPlan) {
      setGymPlans([newPlan, ...gymPlans]);
   }

   function handleDeletePlan(id) {
      const currentGymPlans = gymPlans.filter((gymPlan) => {
         return gymPlan.id !== id;
      });
      setGymPlans([...currentGymPlans]);
   }

   function handleUpdatedPlan(editedPlan) {
      setGymPlans(
         gymPlans.map((gymPlan) => {
            if (gymPlan.id === editedPlan.id) {
               return editedPlan;
            } else {
               return gymPlan;
            }
         })
      );
   }

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
      const idOfSet = sections[sectionIndex].exerciseSets[setId];

      if (setId >= 0) {
         let removeSet = exercisesInSelectedSection.splice(setId, 1);
         exercisesInSelectedSection - removeSet;
         setSections([...sections]);
      }
   }

   function handleDeleteSet(sectionIndex, setId) {
      const exercisesInSelectedSection = sections[sectionIndex].exerciseSets;
      const idOfSet = sections[sectionIndex].exerciseSets[setId];

      if (setId >= 0) {
         let removeSet = exercisesInSelectedSection.splice(setId, 1);
         exercisesInSelectedSection - removeSet;
         setSections([...sections]);
      }
   }

   return (
      <>
         <GlobalStyles />
         <Component
            {...pageProps}
            onCreatePlan={handleCreatePlan}
            onUpdatedPlan={handleUpdatedPlan}
            onDeletePlan={handleDeletePlan}
            gymPlans={gymPlans}
            sections={sections}
            onAddSection={handleAddSection}
            onAddExerciseSet={handleAddExerciseSet}
            onDeleteSection={handleDeleteSection}
            onDeleteSet={handleDeleteSet}
         />
      </>
   );
}

export default MyApp;
