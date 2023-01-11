import Footer from '../components/Footer';
import Header from '../components/Header';
import SavedWorkoutRoutine from '../components/SavedWorkoutRoutine/SavedWorkoutRoutine';

import styled from 'styled-components';

export default function Home({ gymPlans }) {
   return (
      <>
         <Header headline='Lift up your Training' />
         <StyledAllWorkoutRoutines>
            <SavedWorkoutRoutine gymPlans={gymPlans} />
         </StyledAllWorkoutRoutines>

         <Footer />
      </>
   );
}

const StyledAllWorkoutRoutines = styled.section`
   height: 300px;
   display: flex;
   overflow-x: scroll;
   background-color: #f0f0f0;
   box-shadow: rgba(30, 48, 64, 0.25) 0px 10px 20px -20px inset,
      rgba(0, 0, 0, 0.2) 20px 20px 15px -25px inset;
`;
