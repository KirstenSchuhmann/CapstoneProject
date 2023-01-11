import Footer from '../components/Footer';
import Header from '../components/Header';
import CreateWorkoutRoutineForm from '../components/CreateGymPlan/CreateWorkoutRoutineForm';

export default function CreateGymPlan({ onCreatePlan }) {
   return (
      <>
         <Header headline='create a workout routine' />
         <CreateWorkoutRoutineForm onCreatePlan={onCreatePlan} />
         <Footer />
      </>
   );
}
