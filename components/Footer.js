import styled from 'styled-components';
import Link from 'next/link';

import { LinkButton } from '../components/ButtonStyling';

export default function Footer() {
   return (
      <StyledFooter>
         <LinkToOverviewGymPlans
            href='/overview-of-saved-gym-plans'
            aria-label='Saved gym plans'>
            <img
               src='/assets/icons8-notebook-62.png'
               width={40}
            />
         </LinkToOverviewGymPlans>
         <StyledLogo
            href='/'
            aria-label='Main Page'>
            <img
               src='/assets/LiftUp_Logo.png'
               width={80}
            />
         </StyledLogo>
         <Link href={'/CreatePlan'}>
            <NavCreateGymPlanButton>+</NavCreateGymPlanButton>
         </Link>
      </StyledFooter>
   );
}

const LinkToOverviewGymPlans = styled(Link)`
   position: relative;
   top: 5px;
`;

const NavCreateGymPlanButton = styled(LinkButton)`
   position: relative;
   top: 0px;
   background-color: white;
   border: 3px dotted black;
   color: black;
`;

const StyledFooter = styled.footer`
   width: 100%;
   height: 85px;
   bottom: 0;
   position: fixed;
   display: flex;
   justify-content: space-around;
   align-items: center;
   gap: 100px;

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
