// Component for displaying the full Routine

export default function SavedWorkoutRoutine({ gymPlans }) {
   return (
      <section>
         {gymPlans.map(({ id, title, notes, addedSections }) => (
            <div key={id}>
               <p> {title} </p>
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
