import styled from 'styled-components';
import Link from 'next/link';

export {
   ContentBlock,
   ContentInformation,
   PlaceholderText,
   TextInformation,
   Headline,
   Introductiontext,
   StyledLink,
   StyledOverviewOfPlans,
   GymPlanBoxMain,
};

const ContentBlock = styled.section`
   border-radius: 15px;
   padding: 13px;
   min-width: 300px;
   max-width: 700px;
   margin: 1.5rem auto;
   overflow: hidden;
`;

const ContentInformation = styled.p`
   font-size: 20px;
   font-weight: 600;
`;

const PlaceholderText = styled.p`
   font-weight: 500;
   font-size: 16px;
   font-style: italic;

   text-align: center;
`;
const TextInformation = styled.h2`
   font-size: 17px;
   margin: 20px 10px 0;
`;

const Headline = styled.h1`
   font-size: 20px;
   text-align: center;
`;

const Introductiontext = styled.p`
   position: relative;
   text-align: center;
   font-size: 15px;
   margin: 0 16px 0;
`;

const StyledLink = styled(Link)`
   text-decoration: none;
`;

const StyledOverviewOfPlans = styled.section`
   display: flex;
   flex-flow: wrap;
   justify-content: center;
`;

const GymPlanBoxMain = styled.div`
   grid-row: 1;
   border-radius: 10px;
   padding: 10px;
   height: 104px;
   width: 160px;
   margin: 20px;
   display: grid;
   grid-template-columns: 2;
   grid-template-rows: 2;
   place-self: start center;

   align-items: center;
   background-color: #f1f1f1;
   box-shadow: #969899 -1px 1px 0px 0px;
   font-size: 16px;

   h4 {
      margin: 0px;
      grid-column: 1 / 1;
      grid-row: 1;
   }
   p {
      grid-column: 1 / 1;
      grid-row: 2 / 2;
      margin: 0%;
      place-self: end;
   }
   button {
      grid-column: 2 / 2;
   }

   a {
      color: #1d314c;
      text-decoration: none;
   }
`;
