import React from 'react';

import Profile from './Profile';
import Summary from './Summary';
import Education from './Education';

const Editor = () => {
   return (
      <div className="editor">
         <h4>edit your info</h4>
         <Profile />
         <Summary />
         <Education />
      </div>
   );
};

export default Editor;
