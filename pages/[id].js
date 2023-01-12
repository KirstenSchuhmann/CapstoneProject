import { useRouter } from 'next/router';
import Footer from '../components/Footer';

export default function SavedWorkout({ gymPlans = [] }) {
   const router = useRouter();
   const { id } = router.query;

   if (!gymPlans) {
      return null;
   }

   const currentWorkoutRoutine = gymPlans.find((gymPlan) => gymPlan.id === id);

   if (!currentWorkoutRoutine) {
      return null;
   }

   return (
      <>
         {gymPlans.map(({ id, title, notes, addedSections }) => (
            <section>
               <div key={id}>
                  <h6> {title} </h6>
                  <p> {notes} </p>
               </div>
               {addedSections.map((section, sectionIndex) => (
                  <section key={sectionIndex}>
                     <h3> {section.name}</h3>

                     {section.exerciseSets.map((exerciseSet) => (
                        <>
                           <div key={exerciseSet.id}>
                              <p>{exerciseSet.sets}</p>

                              <p>x</p>
                              <p>{exerciseSet.reps} </p>
                              <p>{exerciseSet.weight}</p>
                              <p>{exerciseSet.exercise}</p>
                           </div>
                        </>
                     ))}
                  </section>
               ))}
            </section>
         ))}

         <Footer />
      </>
   );
}
