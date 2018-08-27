import React from 'react';
import { NavLink } from 'react-router-dom';

import * as styles from './Nav.css';

const Nav = () => {
   return (
      <div className={styles.nav}>
         <NavLink exact to="/" activeClassName="active">
            editor
         </NavLink>
         <NavLink to="/preview" activeClassName="active">
            preview
         </NavLink>
      </div>
   );
};

export default Nav;
