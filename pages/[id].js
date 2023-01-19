// Page to view a saved Workout Routine

import { useRouter } from 'next/router';

import Footer from '../components/Footer';
import SavedGymPlan from '../components/SavedGymPlan/SavedGymPlan';

export default function DynamicPageOfEachGymPlan({
   gymPlans = [],
   onUpdatedPlan,
   onDeletePlan,
   // Funktionen aus _app.js werden herunter gereicht
}) {
   const router = useRouter();
   const { id } = router.query;

   if (!gymPlans) {
      return null;
   }
   const gymPlan = gymPlans.find((gymPlan) => gymPlan.id === id);

   if (!gymPlan) {
      return null;
   }

   return (
      <>
         <SavedGymPlan
            gymPlan={gymPlan}
            onUpdatedPlan={onUpdatedPlan}
            onDeletePlan={onDeletePlan}
         />
         <Footer />
      </>
   );
}
