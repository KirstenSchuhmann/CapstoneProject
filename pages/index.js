import GymPlan from '../components/GymPlan/GymPlan';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
   return (
      <>
         <Header headline='Gym-Plan' />
         <GymPlan />
         <Footer />
      </>
   );
}
