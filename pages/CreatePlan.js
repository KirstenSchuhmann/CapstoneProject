import Footer from '../components/Footer';
import Header from '../components/Header';
import CreateGymPlanForm from '../components/CreateGymPlan/CreateGymPlan/CreateGymPlanForm';

export default function CreateGymPlanPage({
   onCreatePlan,
   sections,
   onAddSection,
   onAddExerciseSet,
   onDeleteSection,
   onDeleteSet,
}) {
   return (
      <>
         <Header headline='create a workout routine' />
         <CreateGymPlanForm
            onCreatePlan={onCreatePlan}
            sections={sections}
            onAddSection={onAddSection}
            onAddExerciseSet={onAddExerciseSet}
            onDeleteSection={onDeleteSection}
            onDeleteSet={onDeleteSet}
         />
         <Footer />
      </>
   );
}