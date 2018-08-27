import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

/* COMPONENTS */
import Routes from './Routes';
import Nav from './components/Nav';
import store from './redux/store';

/* CSS */
import './styles/bootstrap-grid-only-12.css';
import './styles/global.css';
import * as styles from './styles/App.css.js';

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <Router>
               <div className={styles.app}>
                  <div className={styles.page}>
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
