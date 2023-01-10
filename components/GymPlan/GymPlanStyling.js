import styled from 'styled-components';

export {
   StyledSection,
   AddSectionButton,
   StyledForm,
   AddExerciseSet,
   SaveButton,
   StyledDiv,
   DeleteButton,
   CenterButtons,
   GymPlanTitle,
   StyledNotes,
   StyledNotesLabel,
   StyledLabelTitle,
   StyledFieldSet,
};

const CenterButtons = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

const StyledForm = styled.form`
   h3 {
      display: inline;
   }

   button {
      cursor: pointer;
   }
`;
const StyledFieldSet = styled.fieldset`
   border: none;
   max-width: 700px;
   margin: 0 auto;
   display: grid;

   grid-template-columns: 6.5rem auto;
   grid-template-rows: repeat(2, 2fr);
`;

const StyledLabelTitle = styled.label`
   grid-column: 1 / 2;
   grid-row: 1 / 2;
   place-self: center start;
   margin-left: 14px;

   font-family: 'Satoshi-Variable';
   font-size: 35px;
   font-weight: 600;
`;
const StyledNotesLabel = styled.label`
   grid-row: 2 / 2;
   grid-column: 1 / 2;
   place-self: center start;
   margin-left: 20px;

   font-family: 'Satoshi-Variable';
   font-weight: 400;
   font-size: 25px;
`;
const GymPlanTitle = styled.input`
   grid-row: 1/ 2;
   grid-column: 2/ 2;

   margin-bottom: 0.75rem;
   border: 0px;
   border-bottom: 2px solid #9d9d9d;
   width: 100%;

   ::placeholder {
      font-size: 22.5px;
      position: relative;
      top: 10px;
      font-family: 'Satoshi-Variable';
   }
`;

const StyledNotes = styled.textarea`
   grid-row: 2 / 2;
   grid-column: 2/ 2;
   padding: 10px;
   font-family: 'Satoshi-Variable';
   font-weight: 500;
   min-height: 50px;
   border: 1.5px solid #9d9d9d;
   border-radius: 5px;
   font-family: 'Satoshi-Variable';
   resize: vertical;
`;

const DeleteButton = styled.button`
   float: right;
   text-align: center;
   height: 25px;
   width: 25px;
   border: 1.5px solid lightgray;
   border-radius: 50%;
`;

const StyledSection = styled.section`
   border: 1px solid black;
   border-radius: 15px;
   padding: 13px;
   min-width: 300px;
   max-width: 700px;
   margin: 1.5rem auto;
`;

const AddSectionButton = styled.button`
   height: 2.5rem;
   width: 9rem;
   font-size: 16px;
   border-radius: 2rem;
   border: 1.5px solid lightgray;
   margin: 10px;
   color: #393f47;
   background-color: #ebebec;
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

const SaveButton = styled.button`
   display: inherit;
   margin: 0 auto;
   height: 2.5rem;
   width: 10rem;
   font-size: 16px;
   background-color: #d30077;
   color: white;
   border-radius: 2rem;
   border: 1.5px solid lightgray;
`;

const StyledDiv = styled.div`
   display: flex;
   flex-flow: row wrap;
   align-items: center;

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

      -moz-appearance: textfield;

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
