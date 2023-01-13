// ---> Main Page - Shows overview of all the capacity of this app

import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';
import { Fragment } from 'react';
import styled from 'styled-components';

export default function Home({ gymPlans }) {
   return (
      <>
         <Header headline='Lift up your Training' />
         <StyledOverviewAll>
            {/* Show all Plan titles, which are linked directly to the full visible plan */}
            {gymPlans.map(({ id, title }) => (
               <Fragment key={id}>
                  <h4> {title} </h4>
                  <Link href={`${id}`}>
                     <p> see more... </p>
                  </Link>
               </Fragment>
            ))}
         </StyledOverviewAll>

         <Footer />
      </>
   );
}

const StyledOverviewAll = styled.section`
   height: 300px;
   overflow-x: scroll;
   background-color: #f0f0f0;
   box-shadow: rgba(30, 48, 64, 0.25) 0px 10px 20px -20px inset,
      rgba(0, 0, 0, 0.2) 20px 20px 15px -25px inset;
`;
