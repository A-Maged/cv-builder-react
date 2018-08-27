import { css } from 'emotion';

export const accountant_1 = css`
   background-color: #ddd;

   .template__sections {
      padding: 25px 80px;
      text-align: center;

      & > *:not(:last-child) {
         margin-bottom: 45px;
      }
   }

   h4 {
      font-size: 14px;
      text-transform: uppercase;
   }

   p {
      font-size: 18px;
   }
`;

export const header = css`
   color: white;
   background-color: white;
   padding: 80px 90px;
   letter-spacing: 0.3px;

   * {
      color: #333;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 15px;
   }

   & > * {
      display: inline-block;
      margin-right: 15px;
      margin-bottom: 10px;
   }

   .template__name {
      font-size: 40px;
      margin-bottom: 30px;
      display: block;
   }

   .template__email {
      text-transform: lowercase;
   }
`;
