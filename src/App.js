import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import EditingPage from './pages/editing/EditingPage';
import Preview from './pages/preview/Preview';
import store from './redux/store';
import './bootstrap-grid-only-12.css';
import './App.css';

const Fragment = React.Fragment;

const Nav = (
   <div className="nav">
      <NavLink exact to="/" activeClassName="active">
         editor
      </NavLink>
      <NavLink to="/preview" activeClassName="active">
         preview
      </NavLink>
   </div>
);

const Routes = (
   <Fragment>
      <Route exact={true} path="/" component={EditingPage} />
      <Route path="/preview" component={Preview} />
   </Fragment>
);

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <Router>
               <div className="app">
                  <div className="page">{Routes}</div>
                  {Nav}
               </div>
            </Router>
         </Provider>
      );
   }
}

export default App;
