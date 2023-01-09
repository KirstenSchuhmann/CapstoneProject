import styled from 'styled-components';
import GymPlan from '../components/GymPlan/GymPlan';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
   return (
      <>
         <Header headline='Gym-Plan' />
         <StyledMain>
            <GymPlan />
         </StyledMain>
         <Footer />
      </>
   );
}

const StyledMain = styled.main`
   padding: 10px;
`;
