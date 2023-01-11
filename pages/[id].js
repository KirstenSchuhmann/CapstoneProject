// Page to display a workoutRoutine (One Plan! )

import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import SavedWorkoutRoutine from '../components/SavedWorkoutRoutine/SavedWorkoutRoutine';

export default function SavedWorkout() {
   const router = useRouter();
   const { id } = router.query;

   return (
      <>
         <SavedWorkoutRoutine />
         <Footer />
      </>
   );
}
