import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Nav from './components/Nav';
import store from './redux/store';
import './styles/bootstrap-grid-only-12.css';
import AppCss from './styles/App.css';

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <Router>
               <div styleName="AppCss.app">
                  <div className="page">
                     <Routes />
                  </div>

                  <Nav />
               </div>
            </Router>
         </Provider>
      );
   }
}

export default App;
