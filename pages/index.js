// ---> Main Page - Shows overview of all the capacity of this app

import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';
import styled from 'styled-components';

export default function Home({ gymPlans }) {
   return (
      <>
         <Header headline='Lift up your Training' />
         <StyledOverviewOfPlans>
            {gymPlans.map(({ id, title }) => (
               <StyledPlan key={id}>
                  <Link href={`${id}`}>
                     <h4> {title} </h4>
                     <p> see more... </p>
                  </Link>
               </StyledPlan>
            ))}
         </StyledOverviewOfPlans>

         <Footer />
      </>
   );
}

const StyledOverviewOfPlans = styled.section`
   display: grid;
   grid-template-rows: 1;
   place-content: center start;
   overflow-y: scroll;
   height: 10rem;
   width: 100vw;
   box-shadow: rgba(30, 48, 64, 0.25) 0px 10px 20px -20px inset,
      rgba(0, 0, 0, 0.2) 20px 20px 15px -25px inset;
`;

const StyledPlan = styled.div`
   grid-row: 1;
   border-radius: 10px;
   padding: 15px;
   height: 6rem;
   width: 200px;
   margin: 20px;
   background: pink;
   display: flex;
   justify-content: space-around;
   text-align: center;
   align-items: center;
   background-color: #f1f1f1;
   box-shadow: #ccd1d6 0px 10px 20px -20px inset;
   font-size: 18px;

   a {
      color: #1d314c;
      text-decoration: none;
   }
`;
