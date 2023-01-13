// Page to view a saved Workout Routine

import { useRouter } from 'next/router';

import Footer from '../components/Footer';
import SavedWorkoutRoutine from '../components/SavedWorkoutRoutine/SavedWorkoutRoutine';

export default function OverviewOfAddedRoutines({ gymPlans = [] }) {
   const router = useRouter();
   const { id } = router.query;

   // Creates new Array of the addressed gymPlan
   const currentWorkoutRoutine = gymPlans.find((gymPlan) => gymPlan.id === id);

   if (!gymPlans) {
      return <p> Geht grad nicht 🤓 </p>;
   }

   return (
      <>
         <SavedWorkoutRoutine currentWorkoutRoutine={currentWorkoutRoutine} />
         <Footer />
      </>
   );
}
