import Footer from '../components/Footer';
import Header from '../components/Header';
import CreateWorkoutRoutineForm from '../components/CreateGymPlan/CreateWorkoutRoutineForm/CreateWorkoutRoutineForm';

export default function CreateGymPlan({
   sections,
   onCreatePlan,
   onAddExerciseSet,
   onDeleteSection,
   onAddSection,
   onDeleteSet,
}) {
   return (
      <>
         <Header headline='create a workout routine' />
         <CreateWorkoutRoutineForm
            sections={sections}
            onCreatePlan={onCreatePlan}
            onDeleteSection={onDeleteSection}
            onAddSection={onAddSection}
            onAddExerciseSet={onAddExerciseSet}
            onDeleteSet={onDeleteSet}
         />
         <Footer />
      </>
   );
}