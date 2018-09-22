import React from 'react';
import { css } from 'emotion';

import ProfileCard from './ProfileCard';
import SummaryCard from './SummaryCard';
import EducationCard from './EducationCard';

const Editor = () => {
   return (
      <div className={editorCss}>
         <h4>edit your info</h4>
         <ProfileCard />
         <SummaryCard />
         <EducationCard />
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
