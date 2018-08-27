import { css } from 'emotion';

export const nav = css`
   padding: 0 40px;
   background-color: white;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   border-bottom: 1px solid #eee;

   a {
      padding: 20px;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: normal;
   }

   a:hover,
   a.active {
      background-color: blue;
      color: white;
      font-weight: bold;
   }
`;
