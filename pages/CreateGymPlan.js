import Footer from '../components/Footer';
import Header from '../components/Header';
import CreateGymPlanForm from '../components/CreateGymPlan/CreateGymPlanForm';

export default function CreateGymPlan() {
   return (
      <>
         <Header headline='Create a Training Plan' />
         <CreateGymPlanForm />
         <Footer />
      </>
   );
}
