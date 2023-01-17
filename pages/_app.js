import GlobalStyles from '../GlobalStyles/GlobalStyles';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useLocalStorage } from '../helpers/hooks';

function MyApp({ Component, pageProps }) {
   const [gymPlans, setGymPlans] = useLocalStorage('gymPlans', []);
   const [sections, setSections] = useState([]);

   function handleCreatePlan(newPlan) {
      setGymPlans([...gymPlans, newPlan]);
   }

   function handleAddSection(sectionName) {
      setSections([...sections, { name: sectionName, exerciseSets: [] }]);
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

   return (
      <>
         <GlobalStyles />
         <Component
            {...pageProps}
            gymPlans={gymPlans}
            sections={sections}
            onCreatePlan={handleCreatePlan}
            onDeleteSection={handleDeleteSection}
            onAddSection={handleAddSection}
            onAddExerciseSet={handleAddExerciseSet}
            onDeleteSet={handleDeleteSet}
         />
      </>
   );
}

export default MyApp;
