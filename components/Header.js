import styled from 'styled-components';

export default function Header({ headline }) {
   return (
      <StyledHeadline>
         <Logo
            src='/assets/LiftUp_Logo.png'
            width={135}
         />
      </StyledHeadline>
   );
}

const Logo = styled.img`
   position: absolute;
   margin-top: 1rem;
`;
const StyledHeadline = styled.h1`
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   margin: 0;
   height: 8rem;
   width: 100vw;

   position: relative;
   top: 0;

   box-shadow: rgba(30, 48, 64, 0.25) 0px 10px 20px -20px,
      rgba(0, 0, 0, 0.2) 20px 20px 15px -25px;
`;
