import styled from 'styled-components';
import Link from 'next/link';

export {
   StyledButton,
   LinkButton,
   DeleteButtonPosition,
   ListOfAllPlans,
   CreateGymPlanButton,
   AddGymPlan,
};

const LinkButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: 500;
   font-size: 25px;

   border: none;
   position: relative;
   float: right;
   color: white;

   border-radius: 35rem;
   height: 35px;
   width: 35px;
   position: relative;
   top: -50px;
   padding: 10px;
`;
const AddGymPlan = styled(Link)`
   position: relative;
   top: 5px;
   height: 40px;
   font-size: 15px;
   height: 200px;
`;

const StyledButton = styled.button`
   height: 30px;
   width: 30px;
   border-radius: 15px;
   float: right;
   left: 30px;

   display: flex;
   justify-content: center;
   align-content: center;
   border: none;
   background-color: white;

   box-shadow: inset -1px -4px 2px 0px rgb(211 197 197 / 32%),
      0px 2px 17px -8px rgb(242 238 238 / 27%);

   svg {
      position: relative;
      top: 6px;
      right: -1px;
   }
`;

const DeleteButtonPosition = styled(StyledButton)`
   position: relative;
   top: -30px;
   left: 20px;
`;

const ListOfAllPlans = styled(LinkButton)`
   background-color: white;
   font-size: 35px;
`;

const CreateGymPlanButton = styled(LinkButton)`
   background: linear-gradient(
      0deg,
      rgba(20, 167, 62, 1) 0%,
      rgb(115 232 124) 100%
   );

   box-shadow: 0 0.7em 1.5em -0.5em #4a998498;
`;
