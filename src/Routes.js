import React from 'react';
import { Route } from 'react-router-dom';

import EditingPage from './pages/editing/EditingPage';
import PreviewPage from './pages/preview/PreviewPage';

const Routes = () => {
   return (
      <React.Fragment>
         <Route exact={true} path="/" component={EditingPage} />
         <Route path="/preview" component={PreviewPage} />
      </React.Fragment>
   );
};

export default Routes;
