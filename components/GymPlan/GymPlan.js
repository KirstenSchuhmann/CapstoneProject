import WorkoutSet from "./WorkoutSet";

export default function GymPlan() {
  return (
    <form>
      <WorkoutSet setName="Warm-up" />
      <WorkoutSet setName="Squat" />
      <WorkoutSet setName="Bench" />
      <WorkoutSet setName="Deadlift" />
      <WorkoutSet setName="Assistant" />
    </form>
  );
}
