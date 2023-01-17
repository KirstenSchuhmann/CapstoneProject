// Page to view a saved Workout Routine

import { useRouter } from 'next/router';

import Footer from '../components/Footer';
import SavedWorkoutRoutine from '../components/SavedWorkoutRoutine/SavedWorkoutRoutine';

export default function OverviewOfAddedRoutines({
   gymPlans = [],
   onUpdatedPlan,
   sections,
   onChange,
   value,
   onAddExerciseSet,
   onDeleteSection,
   onAddSection,
   onDeleteSet,
}) {
   const router = useRouter();
   const { id } = router.query;

   // Creates new Array of the addressed gymPlan

   if (!gymPlans) {
      return null;
   }
   const currentWorkoutRoutine = gymPlans.find((gymPlan) => gymPlan.id === id);

   if (!currentWorkoutRoutine) {
      return null;
   }

   // console.log(currentWorkoutRoutine.sectionsOfThisPlan);

   return (
      <>
         <SavedWorkoutRoutine
            //  Funktionen, damit Sections hinzugefügt werden können
            // Aktueller Plan
            currentWorkoutRoutine={currentWorkoutRoutine}
            // selbst erklärend
            onUpdatedPlan={onUpdatedPlan}
            // Bereits existierende Funktionen
            value={value}
            onChange={onChange}
            sections={sections}
            onAddSection={onAddSection}
            onAddExerciseSet={onAddExerciseSet}
            onDeleteSection={onDeleteSection}
            onDeleteSet={onDeleteSet}
         />
         <Footer />
      </>
   );
}
