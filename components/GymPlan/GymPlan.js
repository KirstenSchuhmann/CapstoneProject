import WorkoutSet from './WorkoutSet';

export default function GymPlan() {
   function handleSubmit(event) {
      event.preventDefault();
   }

   return (
      <form onSubmit={handleSubmit}>
         <WorkoutSet sectionName='Warm-up' />
         <WorkoutSet sectionName='Squat' />
         <WorkoutSet sectionName='Bench' />
         <WorkoutSet sectionName='Deadlift' />
         <WorkoutSet sectionName='Assistant' />
      </form>
   );
}
