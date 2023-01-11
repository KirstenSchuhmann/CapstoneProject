import GlobalStyles from '../GlobalStyles/GlobalStyles';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function MyApp({ Component, pageProps }) {
   const [gymPlans, setGymPlans] = useState([]);
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

   // Delete Section
   function handleDeleteSection(sectionIndex) {
      if (sectionIndex >= 0) {
         const removedSection = sections.splice(sectionIndex, 1);
         sections - removedSection;
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
         />
      </>
   );
}

export default MyApp;
