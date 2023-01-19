import styled from 'styled-components';
import { keyframes } from 'styled-components';

export {
   SmallInfoText,
   StyledSection,
   AddExerciseSet,
   StyledExerciseSet,
   DeleteButton,
};

const Bounce = keyframes`
  	0%, 20%, 50%, 80%, 100% 
   {opacity: 1; transform: translateY(0);}
    10%{transform: translateX(-10px);}
    40% {transform: translateX(-15px);}
    0% { opacity: 1; }
    100% { opacity: 0;}
`;

const SmallInfoText = styled.span`
   font-size: 12px;
   font-style: italic;
   margin: 0;
   float: right;
   position: relative;
   top: 21px;
   left: 22px;
   opacity: 0;
   animation-iteration-count: 1;
   transition-duration: 4s;
   animation: ${Bounce} 2.2s ease-in;
`;

const DeleteButton = styled.button`
   text-align: center;
   height: 25px;
   width: 25px;
   border: 1.5px solid lightgray;
   border-radius: 50%;
   float: right;
   position: relative;
   top: -5px;
`;

const AddExerciseSet = styled.button`
   width: 100%;
   height: 30px;
   font-size: 17px;
   margin: 5px auto 2px;
   border-radius: 5px;
   border: 1px white;
   border-color: transparent;
   background-color: #05b7ce;
   color: #f1fffa;
   box-shadow: 1px 1px 5px #e2e2e2, -1px -1px 5px #ffffff;

   :hover {
      background-color: #15aabf;
      box-shadow: 1px 1px 5px rgba(10, 82, 92, 0.5);
   }
`;

const StyledSection = styled.section`
   border: 1px solid black;
   border-radius: 15px;
   padding: 13px;
   min-width: 300px;
   max-width: 700px;
   margin: 1.5rem auto;
   overflow: hidden;
`;

const StyledExerciseSet = styled.div`
   touch-action: none;
   scroll-snap-type: x mandatory;

   transition: transform 600ms ease;
   height: 45px;
   display: grid;
   grid-template-columns: 14% 10px 15% 15% 50% 20%;
   grid-template-rows: 1fr;
   align-items: center;
   text-align: center;

   //grid-gap: 1.1%;
   grid-gap: 1.5%;

   p {
      grid-column: 2 / 2;
      grid-row: 1;
      font-size: 16px;
      margin: 0;
   }

   input {
      height: 30px;
      border-radius: 5px;
      border: 1.5px solid lightgray;
      text-align: center;

      ::placeholder {
         color: grey;
         font-weight: 400;
         font-size: 14px;
      }
   }

   input[type='number'] {
      //Chrome, Safari, Edge, Opera - hide arrows
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
         -webkit-appearance: none;
      }
      //-moz-appearance: textfield;
      background-color: #efefef;
      border: 0.5px solid lightgrey;
      font-weight: 600;
   }

   input[label='sets'],
   input[label='reps'] {
      min-width: 35px;
   }

   input[label='sets'] {
      grid-column: 1 / 1;
      grid-row: 1;
   }

   input[label='reps'] {
      grid-column: 3 / 3;
      grid-row: 1;
   }

   input[label='weight'] {
      grid-column: 4 / 4;
      grid-row: 1;

      min-width: 45px;
   }
   input[label='exercise'] {
      grid-column: 5 / 5;
      grid-row: 1;
      margin-right: 5px;
      min-width: 60px;
   }

   button {
      grid-column: 6 / 6;
      margin-left: 2px;
      grid-row: 1;

      // Styling
      width: 100px;
      font-size: 17px;
      font-weight: 600;
      font-family: 'Satoshi-Variable';
      height: 30px;

      background-color: red;
      color: white;
      border-radius: 5px;
      height: 30px;
      border: none;
   }
`;
