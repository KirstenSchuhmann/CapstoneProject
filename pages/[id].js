// This page shows currently ALL Saved WorkoutRoutine, which where submitted in the form

import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Footer from '../components/Footer';

export default function OverviewOfAddedRoutines({ gymPlans = [] }) {
   const router = useRouter();
   const { id } = router.query;

   // Creates new Array of the addressed gymPlan
   const currentWorkoutRoutine = gymPlans.find((gymPlan) => gymPlan.id === id);

   const { title, notes, addedSections } = currentWorkoutRoutine;

   // sections gibt die sections aus, die in einem Plan, beim erstellen, hinzugefügt wurden.
   const sectionsOfThisPlan = currentWorkoutRoutine.addedSections;

   if (!gymPlans) {
      return <p> Geht grad nicht 🤓 </p>;
   }

   return (
      <>
         <section>
            <h4> {title}</h4>
            <p> {notes} </p>
            {sectionsOfThisPlan.map(
               ({
                  name,
                  exerciseSets: [{ id, sets, reps, weight, exercise }],
               }) => (
                  <>
                     <p> {name} </p>
                     <div key={id}>
                        <p> {sets} </p>
                        <p> x </p>
                        <p> {reps} </p>
                        <p> {weight} </p>
                        <p> {exercise} </p>
                     </div>
                  </>
               )
            )}
         </section>
         <Footer />
      </>
   );
}
