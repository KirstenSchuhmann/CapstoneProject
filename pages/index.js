// ---> Main Page - Shows overview of all the capacity of this app

import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';
import styled from 'styled-components';

import { StyledButton } from '../components/ButtonStyling';

export default function Home({ gymPlans = [], onDeletePlan }) {
   return (
      <>
         <Header headline='Lift up your Training' />
         <Headline> Lift up your strength to the next level! </Headline>

         <IntroducionText>
            Get rid of excel and notebooks. <br />
            Use now Lift-Up to save your workout <br />
            routines and never lose your plan.
         </IntroducionText>

         {gymPlans.length === 0 ? (
            <PlaceholderText>
               Start now and add a new
               <br /> workout routine to your gym plans!
            </PlaceholderText>
         ) : (
            <>
               <StyledOverviewOfPlans>
                  <TextInformation>
                     Latest gym plans you've saved:
                  </TextInformation>
                  {gymPlans
                     .map(({ id, title }) => (
                        <StyledBox key={id}>
                           <Link href={`${id}`}>
                              <h4> {title} </h4>
                              <p> see more... </p>
                           </Link>
                           <DeleteButtonPosition
                              type='button'
                              onClick={() => onDeletePlan(id)}>
                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 fill='currentColor'
                                 class='bi bi-trash3'>
                                 <path d='M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z' />
                              </svg>
                           </DeleteButtonPosition>
                        </StyledBox>
                     ))
                     .slice(0, 2)}
               </StyledOverviewOfPlans>

               {gymPlans.length >= 2 && (
                  <Link href='/overview-of-saved-gym-plans'>
                     <StyledBox>
                        <p> ... click here to see them all.</p>
                     </StyledBox>
                  </Link>
               )}
            </>
         )}

         <ContentBlock>
            <ContentInformation> Add new Plan: </ContentInformation>
            <Link href={'/CreatePlan'}>
               <AddButton>+</AddButton>
            </Link>
            <StyledLink href='/CreatePlan'></StyledLink>
            <ContentInformation> Have a look at all plans: </ContentInformation>
         </ContentBlock>

         <Footer />
      </>
   );
}

const DeleteButtonPosition = styled(StyledButton)`
   position: relative;
   top: -30px;
   left: 20px;
`;

const ContentBlock = styled.section`
   border: 1px solid black;
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
   :first-child {
      display: inline;
   }
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

const IntroducionText = styled.p`
   position: relative;
   text-align: center;
   font-size: 15px;
   margin: 0 16px 0;
`;

const StyledLink = styled(Link)`
   text-decoration: none;
`;

const AddButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: 500;
   font-size: 25px;

   border: none;
   position: relative;
   float: right;
   color: white;

   background: linear-gradient(
      0deg,
      rgba(20, 167, 62, 1) 0%,
      rgb(115 232 124) 100%
   );

   box-shadow: 0 0.7em 1.5em -0.5em #4a998498;
   border-radius: 35rem;
   height: 35px;
   width: 35px;

   padding: 10px;
`;

const StyledOverviewOfPlans = styled.section`
   display: flex;
   flex-flow: wrap;
`;

const StyledBox = styled.div`
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
