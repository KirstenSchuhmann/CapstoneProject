import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';
import SavedWorkoutRoutine from '../components/SavedWorkoutRoutine/SavedWorkoutRoutine';

export default function Home({ gymPlans, sections }) {
   return (
      <>
         <Header headline='Lift up your Training' />
         <StyledWorkoutRoutinesInPreview>
            <p>
               Trainingspläne sollen in Boxen zum Scrollen nach rechts sichtbar
               werden.
            </p>
         </StyledWorkoutRoutinesInPreview>

         <p> First: Plan soll vorab erst hier gerendert werden </p>
         <SavedWorkoutRoutine
            gymPlans={gymPlans}
            sections={sections}
         />
         <Footer />
      </>
   );
}
const StyledWorkoutRoutinesInPreview = styled.div`
   background-color: #eff6ee;
   text-align: center;
   height: 100px;
`;
