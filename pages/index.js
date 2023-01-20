// ---> Main Page - Shows overview of all the capacity of this app

import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';

import {
   DeleteButtonPosition,
   ListOfAllPlans,
   CreateGymPlanButton,
} from '../components/ButtonStyling';

import {
   ContentBlock,
   ContentInformation,
   PlaceholderText,
   TextInformation,
   Headline,
   Introductiontext,
   StyledLink,
   StyledOverviewOfPlans,
   GymPlanBoxMain,
} from '../components/PageStyling/StylingMainPage';

export default function Home({ gymPlans = [], onDeletePlan }) {
   return (
      <>
         <Header headline='Lift up your Training' />
         <Headline> Lift up your strength to the next level! </Headline>

         <Introductiontext>
            Get rid of excel and notebooks. <br />
            Use now Lift-Up to save your workout <br />
            routines and never lose your plan.
         </Introductiontext>

         {gymPlans.length === 0 ? (
            <PlaceholderText>
               Start now and add a new
               <br /> workout routine to your gym plans
            </PlaceholderText>
         ) : (
            <>
               <StyledOverviewOfPlans>
                  <TextInformation>
                     Latest gym plans you've saved:
                  </TextInformation>
                  {gymPlans
                     .map(({ id, title }) => (
                        <GymPlanBoxMain key={id}>
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
                        </GymPlanBoxMain>
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
               <CreateGymPlanButton>+</CreateGymPlanButton>
            </Link>
            <StyledLink href='/CreatePlan'></StyledLink>
            <ContentInformation> Have a look at all plans: </ContentInformation>
            <Link href={'/CreatePlan'}>
               <ListOfAllPlans> 📝 </ListOfAllPlans>
            </Link>
         </ContentBlock>

         <Footer />
      </>
   );
}
