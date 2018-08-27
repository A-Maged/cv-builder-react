import React from 'react';

import Profile from './Profile';
import Summary from './Summary';
import Education from './Education';
import { css } from 'emotion';

const Editor = () => {
   return (
      <div className={editorCss}>
         <h4>edit your info</h4>
         <Profile />
         <Summary />
         <Education />
      </div>
   );
};

const editorCss = css`
   width: 100%;
   padding: 15px;
   display: inline-block;
   vertical-align: top;

   h4 {
      text-transform: uppercase;
   }
`;
export default Editor;
