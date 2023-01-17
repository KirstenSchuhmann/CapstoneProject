import GlobalStyles from '../GlobalStyles/GlobalStyles';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useLocalStorage } from '../helpers/hooks';

function MyApp({ Component, pageProps }) {
   const [gymPlans, setGymPlans] = useLocalStorage('gymPlans', []);
   const [sections, setSections] = useState([]);
   // const [value, setValue] = useState('');

   // function handleChange(event) {
   //    setValue(event.target.value);
   // }

   function handleCreatePlan(newPlan) {
      setGymPlans([newPlan, ...gymPlans]);
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

   // createPlan: Funktionen um Sections & Exercises hinzuzufügen
   function handleAddSection(sectionName) {
      setSections([...sections, { name: sectionName, exerciseSets: [] }]);
      console.log(sections);
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
            gymPlans={gymPlans}
            sections={sections}
            // value={value}
            // onChange={handleChange}
            onCreatePlan={handleCreatePlan}
            onDeleteSection={handleDeleteSection}
            onAddSection={handleAddSection}
            onAddExerciseSet={handleAddExerciseSet}
            onDeleteSet={handleDeleteSet}
            onUpdatedPlan={handleUpdatedPlan}
         />
      </>
   );
}

export default MyApp;
