import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import EditingPage from './pages/editing/EditingPage';
import Preview from './pages/preview/Preview';
import store from './redux/store';
import './bootstrap-grid-only-12.css';
import './App.css';

const Fragment = React.Fragment;

const baseUrl =
   document.location.hostname.search('github') > -1
      ? 'https://a-maged.github.io/cv-builder-react'
      : '';

console.log(
   'baseUrl: ' + baseUrl,
   'search: ' + document.location.hostname.search('github'),
   'hostname: ' + document.location.hostname
);

const Nav = (
   <div className="nav">
      <NavLink exact to={`${baseUrl}/`} activeClassName="active">
         editor
      </NavLink>
      <NavLink to={`${baseUrl}/preview`} activeClassName="active">
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
