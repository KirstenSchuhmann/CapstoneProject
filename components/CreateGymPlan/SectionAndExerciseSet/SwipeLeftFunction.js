import { useRef } from 'react';

import { StyledExerciseSet } from './SectionAndExerciseSetStyling';

export default function SwipeExerciseToLeft({ children }) {
   const ref = useRef();
   let touchX;

   const onPointerMove = (event) => {
      const clientX = event.clientX;

      if (clientX - touchX < -50) {
         ref.current.style.transform = 'translate(-120px)';
         setTimeout(() => {
            if (ref.current) ref.current.style.transform = 'translate(0px)';
         }, 3000);
      } else ref.current.style.transform = 'translate(0px)';
   };

   const onPointerDown = (event) => {
      touchX = event.clientX;
      ref.current.addEventListener('pointermove', onPointerMove);
   };

   const onPointerUp = () => {
      ref.current.removeEventListener('pointermove', onPointerMove);
   };
   return (
      <StyledExerciseSet
         ref={ref}
         onPointerDown={onPointerDown}
         onPointerUp={onPointerUp}>
         {children}
      </StyledExerciseSet>
   );
}
