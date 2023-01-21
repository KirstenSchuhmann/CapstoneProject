import styled from 'styled-components';

export {
   StyledPlan,
   SectionsOfGymPlan,
   InputStyling,
   GetBackToMainPage,
   InputContext,
   StyledNotes,
   X,
};

const InputContext = styled.p`
   display: inline;
`;

const GetBackToMainPage = styled.button`
   display: flex;
   gap: 10px;
   align-items: center;
   border: none;
   position: relative;
   left: -8px;
   background-color: #f8f8f8;
   letter-spacing: 1px;
`;

const StyledPlan = styled.section`
   margin: 1rem auto;
   padding: 1rem;
   width: 90%;

   box-shadow: 3px 2px 5px 0px rgb(168 168 168 / 32%),
      10px 10px 16px 7px rgb(166 166 166 / 30%);
   border: 1px solid #fbf6ec;
   background-color: #f8f8f8;
   border-radius: 20px;

   h2 {
      font-size: 22px;
      word-break: break-word;
   }
`;

const StyledNotes = styled.p`
   font-size: 16px;
`;

const SectionsOfGymPlan = styled.section`
   padding: 10px;
   margin: 15px 0px 15px 0px;
   border: 1px solid;
   height: 80%;
   border-radius: 10px;

   h4 {
      margin: 5px 0 5px 0px;
      font-size: 18px;
   }
`;

const InputStyling = styled.p`
   display: inline-block;
   background-color: #efefef;
   border: 1px solid #dfe0e2;
   padding: 2px 10px;
   border-radius: 10px;
   //text-align: center;
   margin: 0 8px 0 0;
   font-size: 14px;
`;

const X = styled.p`
   display: inline-block;
   font-size: 14px;
   margin-right: 8px;
`;
