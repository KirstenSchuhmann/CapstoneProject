import styled from 'styled-components';

export {
   StyledPlan,
   SectionsOfGymPlan,
   StyledExerciseSet,
   InputStyling,
   GetBackToMainPage,
};

const GetBackToMainPage = styled.button`
   display: flex;
   height: 3em;
   width: 100px;
   align-items: center;
   justify-content: center;

   border-radius: 10px;
   letter-spacing: 1px;

   cursor: pointer;
   border: none;
   background-color: #f8f8f8;

   letter-spacing: 1px;

   border: none;
`;

const StyledPlan = styled.section`
   margin: 2rem auto;
   padding: 1rem;
   width: 85%;

   box-shadow: 3px 2px 5px 0px rgb(168 168 168 / 32%),
      10px 10px 16px 7px rgb(166 166 166 / 30%);
   border: 1px solid #fbf6ec;
   background-color: #f8f8f8;
   border-radius: 20px;

   h2 {
      font-size: 1.5rem;
      margin: 0;
      text-align: center;
   }

   p {
      font-size: 1rem;
      margin: 0.25rem;
      text-align: center;
   }
`;
const SectionsOfGymPlan = styled.section`
   padding: 10px;
   margin: 15px 0px 15px 0px;
   border: 1px solid;
   height: 80%;
   border-radius: 10px;

   h4 {
      margin: 5px 0 10px 0px;
      font-size: 1rem;
   }
`;
const StyledExerciseSet = styled.div`
   display: flex;
   flex-flow: row wrap;
   align-items: center;

   p {
      font-size: small;
      margin: 0px 5px 10px 0px;
      font-size: 16px;
   }
`;

const InputStyling = styled.p`
   background-color: #efefef;
   border: 1px solid #dfe0e2;
   padding: 10px;
   border-radius: 10px;
`;
