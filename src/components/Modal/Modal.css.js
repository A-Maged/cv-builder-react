import { css } from 'emotion';

export const popup = css`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   background-color: white;
   box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);
   min-width: 400px;
   max-width: 50vw;
   padding: 15px;

   @media (max-width: 660px) {
      width: 100%;
   }

   & textarea {
      min-height: 25vh;
   }
`;

export const overlay = css`
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   background-color: rgba(0, 0, 0, 0.1);
   width: 100%;
   height: 100%;
   transition: all 500ms;
`;
