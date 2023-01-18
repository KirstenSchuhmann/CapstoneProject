// Page to view a saved Workout Routine

import { useRouter } from 'next/router';

import Footer from '../components/Footer';
import SavedWorkoutRoutine from '../components/SavedWorkoutRoutine/SavedWorkoutRoutine';

export default function OverviewOfAddedRoutines({
   gymPlans = [],
   onUpdatedPlan,
}) {
   const router = useRouter();
   const { id } = router.query;

   // Creates new Array of the addressed gymPlan

   if (!gymPlans) {
      return null;
   }
   const gymPlan = gymPlans.find((gymPlan) => gymPlan.id === id);

   if (!currentWorkoutRoutine) {
      return null;
   }

   // console.log(currentWorkoutRoutine.sectionsOfThisPlan);

   return (
      <>
         <SavedWorkoutRoutine
            //  Funktionen, damit Sections hinzugefügt werden können
            // Aktueller Plan
            gymPlan={gymPlan}
            onUpdatedPlan={onUpdatedPlan}
         />
         <Footer />
      </>
   );
}
