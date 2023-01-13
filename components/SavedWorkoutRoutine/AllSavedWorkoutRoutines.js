// ----> This Component shows all added gymPlans, which will be an overview for the user.

export default function AllSavedWorkoutRoutines({ gymPlans }) {
   return (
      <section>
         {gymPlans.map(({ id, title, notes, addedSections }) => (
            <div key={id}>
               <h6> {title} </h6>
               <p> {notes} </p>
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
            </div>
         ))}
      </section>
   );
}
