import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';
import Link from 'next/link';
import SavedWorkoutRoutine from '../components/SavedWorkoutRoutine/SavedWorkoutRoutine';

export default function Home({ gymPlans, sections }) {
   return (
      <>
         <Header headline='Lift up your Training' />
         <StyledWorkoutRoutinesInPreview>
            <p>
               Trainingspläne sollen in Boxen zum Scrollen nach rechts sichtbar
               werden.
            </p>
         </StyledWorkoutRoutinesInPreview>

         <p> First: Plan soll vorab erst hier gerendert werden </p>
         <section>
            {gymPlans.map((gymPlan) => (
               <section key={gymPlan.id}>
                  <p> {gymPlan.title} </p>
                  <p> {gymPlan.notes} </p>

                  {sections.map((section, sectionIndex) => (
                     <section key={sectionIndex}>
                        <h3> {section.name}</h3>

                        {section.exerciseSets.map((exerciseSet) => (
                           <>
                              <div key={exerciseSet.id}>
                                 <p>
                                    {`${section.name}-${exerciseSet.id}-sets`}{' '}
                                 </p>

                                 <p>x</p>
                                 <p>
                                    {`${section.name}-${exerciseSet.id}-reps`}{' '}
                                 </p>
                                 <p>
                                    {`${section.name}-${exerciseSet.id}-weight`}
                                 </p>
                                 <p>
                                    name=
                                    {`${section.name}-${exerciseSet.id}-exercise`}
                                 </p>
                              </div>
                           </>
                        ))}
                     </section>
                  ))}
               </section>
            ))}
         </section>
         <Footer />
      </>
   );
}
const StyledWorkoutRoutinesInPreview = styled.div`
   background-color: #eff6ee;
   text-align: center;
   height: 100px;
`;
