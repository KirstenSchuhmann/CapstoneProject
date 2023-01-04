import ExerciseSet from './ExerciseSet';
import WorkoutSet from './WorkoutSet';

export default function GymPlan({ sectionName }) {
   function handleSubmit(event) {
      event.preventDefault();
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <WorkoutSet sectionName='Warm-up' />
            <WorkoutSet sectionName='Squat' />
            <WorkoutSet sectionName='Bench' />
            <WorkoutSet sectionName='Deadlift' />
            <WorkoutSet sectionName='Assistant' />
         </form>
      </>
   );
}
