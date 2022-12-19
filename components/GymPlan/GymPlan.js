import WorkoutSet from "./WorkoutSet";

export default function GymPlan() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <WorkoutSet setName="Warm-up" />
      <WorkoutSet setName="Squat" />
      <WorkoutSet setName="Bench" />
      <WorkoutSet setName="Deadlift" />
      <WorkoutSet setName="Assistant" />
    </form>
  );
}
