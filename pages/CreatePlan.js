import Footer from '../components/Footer';
import Header from '../components/Header';
import CreateGymPlanForm from '../components/CreateGymPlan/CreateGymPlan/CreateGymPlanForm';

export default function CreateGymPlanPage({ onCreatePlan }) {
   return (
      <>
         <Header headline='create a workout routine' />
         <CreateGymPlanForm onCreatePlan={onCreatePlan} />
         <Footer />
      </>
   );
}
