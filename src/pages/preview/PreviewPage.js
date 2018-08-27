import React from 'react';

import store from '../../redux/store';
import DeveloperTemplate from '../../components/templates/DeveloperTemplate';

const Preview = () => {
   const { form } = store.getState();

   return (
      <div className="preview">
         <DeveloperTemplate {...form} />
      </div>
   );
};

export default Preview;
