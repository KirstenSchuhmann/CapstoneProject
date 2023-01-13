export default function SavedWorkoutRoutine({ title, notes, addedSections }) {
   return (
      <section>
         <h1> {title} </h1>
         <p> {notes} </p>
         {addedSections.map((section, sectionIndex) => (
            <section key={sectionIndex}>
               <h4> {section.name}</h4>

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
   );
}
