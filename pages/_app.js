import GlobalStyles from '../GlobalStyles/GlobalStyles';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
   const [gymPlans, setGymPlans] = useState([]);

   function handleCreatePlan(newPlan) {
      setGymPlans([...gymPlans, { name: newPlan }]);
   }

   return (
      <>
         <GlobalStyles />
         <Component
            {...pageProps}
            onCreatePlan={handleCreatePlan}
            gymPlans={gymPlans}
         />
      </>
   );
}

export default MyApp;
