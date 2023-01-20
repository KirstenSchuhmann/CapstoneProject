import styled from 'styled-components';
import Link from 'next/link';

export default function Footer() {
   return (
      <StyledFooter>
         <Link
            href='/overview-of-saved-gym-plans'
            aria-label='Go to overview Page'>
            <svg xmlns='http://www.w3.org/2000/svg'>
               <path d='M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z' />
               <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z' />
            </svg>
         </Link>

         <StyledLogo
            href='/'
            aria-label='Main Page'>
            <img
               src='/assets/LiftUp_Logo.png'
               width={80}
            />
         </StyledLogo>
         <AddGymPlan
            href='/CreatePlan'
            aria-label='Link to Create Gym Plan'>
            <p> + </p>
            <p> add gym plan</p>
         </AddGymPlan>
      </StyledFooter>
   );
}

const StyledFooter = styled.footer`
   width: 100%;
   height: 85px;
   bottom: 0;
   position: fixed;
   display: flex;
   /* gap: 5rem; */
   justify-content: center;
   align-items: center;
   border-radius: 10px 10px 0px 0px;
   background: white;
   box-shadow: 0px -5px 5px rgb(32 33 36 / 10%);
   margin-top: auto;
`;

const StyledLogo = styled(Link)`
   height: 90px;
   position: absolute;
   top: 2px;
`;

const AddGymPlan = styled(Link)`
   position: relative;
   top: 5px;
   height: 40px;
   font-size: 15px;
   height: 200px;
`;
