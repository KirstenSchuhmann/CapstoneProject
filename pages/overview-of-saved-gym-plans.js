// Page to view a saved Workout Routine

import Footer from '../components/Footer';
import styled from 'styled-components';

import { DeleteIconTrashButton } from '../components/ButtonStyling';
import { StyledLink } from '../components/PageStyling/StylingMainPage';

import {
   StyledPlan,
   GetBackToMainPage,
} from '../components/SavedGymPlan/SavedGymPlanStyling';

export default function OverviewAllGymPlans({ gymPlans = [], onDeletePlan }) {
   return (
      <>
         <StyledPlan>
            <GetBackToMainPage onClick={() => location.assign('/')}>
               <svg
                  height='25'
                  width='35'
                  xmlns='http://www.w3.org/2000/svg'
                  version='1.1'
                  viewBox='0 0 1024 1024'>
                  <path d='M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z'></path>
               </svg>
               <span>Back</span>
            </GetBackToMainPage>

            {gymPlans.length >= 1 ? (
               gymPlans.map((gymPlan) => (
                  <div key={gymPlan.id}>
                     <DeleteIconTrashButton
                        onClick={() => onDeletePlan(gymPlan.id)}>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           fill='currentColor'
                           class='bi bi-trash3'>
                           <path d='M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z' />
                        </svg>
                     </DeleteIconTrashButton>
                     <GymPlanTitle>
                        <StyledLink href={`${gymPlan.id}`}>
                           {gymPlan.title}
                        </StyledLink>
                     </GymPlanTitle>
                  </div>
               ))
            ) : (
               <>
                  <PlaceholderIfNoContent>
                     Nothing saved yet.
                  </PlaceholderIfNoContent>
                  <PlaceholderIfNoContent>
                     Create a plan for your next workout routine, to see more.
                  </PlaceholderIfNoContent>
               </>
            )}
         </StyledPlan>
         <Footer />
      </>
   );
}

const GymPlanTitle = styled.h3`
   border-bottom: 2px dotted #d8d3d3;
`;

const PlaceholderIfNoContent = styled.p`
   font-size: 16px;
   font-style: italic;
`;
