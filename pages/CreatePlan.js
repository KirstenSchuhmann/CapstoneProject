import Footer from '../components/Footer';
import styled from 'styled-components';
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
         <Heading> Create your </Heading>
         <Heading> workout routine </Heading>
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

const Heading = styled.h1`
   font-size: 35px;
   margin: 0;
   text-align: center;
   color: #46444e;
`;
