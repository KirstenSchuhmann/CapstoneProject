import styled from 'styled-components';

export {
   StyledSection,
   AddSectionButton,
   StyledForm,
   AddExerciseSet,
   SaveButton,
   StyledDiv,
};

const StyledForm = styled.form`
   button {
      cursor: pointer;
   }
`;

const StyledSection = styled.section`
   border: 1px solid black;
   border-radius: 15px;
   padding: 13px;
   min-width: 300px;
   max-width: 700px;
   margin: 0.5rem 0.5rem 1.5rem 0.5rem;
`;

const AddSectionButton = styled.button`
   height: 2rem;
   width: 7rem;
   border-radius: 2rem;
   border: 1.5px solid lightgray;
   margin: 10px;
   font-size: 16px;
   color: #393f47;
`;

const AddExerciseSet = styled.button`
   width: 100%;
   height: 30px;
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

const SaveButton = styled.button`
   background-color: #d30077;
   color: white;
   height: 2rem;
   max-width: 8rem;
   border-radius: 2rem;
   border: 1.5px solid lightgray;
`;

const StyledDiv = styled.div`
   display: flex;
   flex-flow: row wrap;
   align-items: center;
   margin-left: 0;
   margin-right: 0;

   p {
      font-size: small;
      margin-right: 8px;
   }

   input {
      height: 30px;
      border-radius: 5px;
      border: 1.5px solid lightgray;
      text-align: center;
   }

   input[type='number'] {
      margin-right: 8px;
      //Chrome, Safari, Edge, Opera - hide arrows
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
         -webkit-appearance: none;
      }
      // Firefox - hide arrows (CSS - letters shouldn't be allowed! Needs to be fixed later!!!)
      -moz-appearance: textfield;
      // normal styling
      background-color: #efefef;
      border: 0.5px solid lightgrey;
      font-weight: 600;

      ::placeholder {
         color: grey;
         font-weight: 500;
         font-size: 15px;
      }
   }
   input[label='set'],
   input[label='reps'] {
      min-width: 35px;
      flex-basis: 0;
      flex-grow: 0.6;
   }

   input[label='weight'] {
      margin-left: 8px;
      min-width: 45px;
      flex-basis: 0;
      flex-grow: 1;
   }
   input[label='exercise'] {
      min-width: 60px;
      flex-basis: 0;
      flex-grow: 3;
   }
`;