import React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './AccountantTemplate.css';

const AccountantTemplate = props => {
   return (
      <div className={`template  ${styles.accountant_1}`}>
         <div className={styles.header}>
            <div className="template__name">{props.name || 'no name'}</div>
            <div className="template__email">{props.email || 'no email'}</div>
            <div className="template__phone">{props.phone || 'no phone'}</div>
            <div className="template__location">
               {props.location || 'no location'}
            </div>
            <div className="template__website">
               {props.website && (
                  <Link to={props.website}>{props.website}</Link>
               )}
            </div>
         </div>

         <div className="template__sections">
            <div className="template__summary">
               <h4>summary</h4>
               <p dangerouslySetInnerHTML={{ __html: props.summary }} />
            </div>
            <div className="template__education">
               <h4>education</h4>
               <p dangerouslySetInnerHTML={{ __html: props.education }} />
            </div>
         </div>
      </div>
   );
};

export default AccountantTemplate;
