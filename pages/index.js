import CreateGymPlanForm from '../components/CreateGymPlan/CreateGymPlanForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
   return (
      <>
         <Header headline='Gym-Plan' />
         <CreateGymPlanForm />
         <Footer />
      </>
   );
}
