// Component for displaying the full Routine

export default function SavedWorkoutRoutine({ gymPlans, sections }) {
   return (
      <section>
         {gymPlans.map((gymPlan) => (
            <section key={gymPlan.id}>
               <p> {gymPlan.title} </p>
               <p> {gymPlan.notes} </p>

               {sections.map((section, sectionIndex) => (
                  <section key={sectionIndex}>
                     <h3> {section.name}</h3>

                     {section.exerciseSets.map((exerciseSet) => (
                        <>
                           <div key={exerciseSet.id}>
                              <p>{`${section.name}-${exerciseSet.id}-sets`}</p>

                              <p>x</p>
                              <p>{`${section.name}-${exerciseSet.id}-reps`} </p>
                              <p>
                                 {`${section.name}-${exerciseSet.id}-weight`}
                              </p>
                              <p>
                                 name=
                                 {`${section.name}-${exerciseSet.id}-exercise`}
                              </p>
                           </div>
                        </>
                     ))}
                  </section>
               ))}
            </section>
         ))}
      </section>
   );
}
