import styled from 'styled-components';

export {
   AddSectionButton,
   StyledForm,
   CenterButtons,
   GymPlanTitle,
   StyledNotes,
   StyledNotesLabel,
   StyledLabelTitle,
   StyledFieldSet,
   SaveButton,
};

const StyledForm = styled.form`
   padding: 0.5rem;

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
   margin-left: 5px;

   font-family: 'Satoshi-Variable';
   font-size: 35px;
   font-weight: 600;
`;
const StyledNotesLabel = styled.label`
   grid-row: 2 / 2;
   grid-column: 1 / 2;
   place-self: center start;
   margin-left: 8px;

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

   font-size: 20px;

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
   resize: vertical;
   white-space: pre-wrap;
`;

const CenterButtons = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

const AddSectionButton = styled.button`
   height: 35px;
   width: 95px;
   font-size: 16px;
   border-radius: 2rem;
   border: 1.5px solid lightgray;
   margin: 10px;
   color: #393f47;
   background-color: #ebebec;
`;

const SaveButton = styled.button`
   display: inherit;
   margin: 0 auto;
   height: 50px;
   width: 205px;
   font-size: 17px;
   font-weight: 500;
   font-family: 'Satoshi-Variable';
   background-color: #d30077;
   color: white;
   border-radius: 2rem;
   border: 1.5px solid lightgray;
`;
