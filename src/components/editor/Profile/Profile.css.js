import { css } from 'emotion';

export const profile = css`
   .details {
      cursor: pointer;
      padding: 15px;
      margin-bottom: 10px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
   }
`;

export const popup = css`
   position: fixed;
   top: 25%;
   right: 0;
   background-color: white;
   /* border: 1px solid blue; */
   box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);
   min-width: 400px;
   padding: 15px;
`;
