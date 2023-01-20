import styled from 'styled-components';

export { StyledButton };

const StyledButton = styled.button`
   height: 30px;
   width: 30px;
   border-radius: 15px;
   float: right;
   left: 30px;

   display: flex;
   justify-content: center;
   align-content: center;
   border: none;
   background-color: white;

   box-shadow: inset -1px -4px 2px 0px rgb(211 197 197 / 32%),
      0px 2px 17px -8px rgb(242 238 238 / 27%);

   svg {
      position: relative;
      top: 6px;
      right: -1px;
   }
`;
