import { css } from 'emotion';

export const selectTemplate = css`
   display: inline-block;
   padding: 15px;
   h4 {
      text-transform: uppercase;
   }
   img {
      display: inline-block;
      margin-bottom: 40px;
      cursor: pointer;
   }
   .selected {
      outline: 5px solid blue;
   }
`;
