import styled, { isStyledComponent } from "styled-components";
import WorkoutSet from "./WorkoutSet";

export default function GymPlan() {
  return (
    <>
      <WorkoutSet setName="Warm-up" />
      <WorkoutSet setName="Squat" />
      <WorkoutSet setName="Bench" />
      <WorkoutSet setName="Deadlift" />
      <WorkoutSet setName="Assistant" />
    </>
  );
}
