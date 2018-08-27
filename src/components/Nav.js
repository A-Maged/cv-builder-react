import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
   return (
      <div className="nav">
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
