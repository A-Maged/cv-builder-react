import React, { Component } from 'react';

/* COMPONENTS */
import Routes from './Routes';
import Nav from './components/Nav';

/* CSS */
import './styles/bootstrap-grid-only-12.css';
import './styles/global.css';
import * as styles from './styles/App.css.js';

class App extends Component {
   render() {
      return (
         <div className={styles.app}>
            <Nav />
            <div className={styles.page}>
               <Routes />
            </div>
         </div>
      );
   }
}

export default App;
