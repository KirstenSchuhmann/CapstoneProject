import { getStorybook } from '@storybook/react';
import GlobalStyles from '../GlobalStyles/GlobalStyles';

import { useLocalStorage } from '../helpers/hooks';

function MyApp({ Component, pageProps }) {
   const [gymPlans, setGymPlans] = useLocalStorage([]);

   function handleCreatePlan(newPlan) {
      setGymPlans([newPlan, ...gymPlans]);
   }

   console.log(gymPlans);

   function handleDeletePlan(id) {
      const currentGymPlans = gymPlans.filter((gymPlan) => {
         return gymPlan.id !== id;
      });
      setGymPlans([...currentGymPlans]);
   }

   function handleUpdatedPlan(editedPlan) {
      setGymPlans(
         gymPlans.map((gymPlan) => {
            if (gymPlan.id === editedPlan.id) {
               return editedPlan;
            } else {
               return gymPlan;
            }
         })
      );
   }

   // createPlan: Funktionen um Sections & Exercises hinzuzufügen

   return (
      <>
         <GlobalStyles />
         <Component
            {...pageProps}
            onCreatePlan={handleCreatePlan}
            onUpdatedPlan={handleUpdatedPlan}
            onDeletePlan={handleDeletePlan}
         />
      </>
   );
}

export default MyApp;
