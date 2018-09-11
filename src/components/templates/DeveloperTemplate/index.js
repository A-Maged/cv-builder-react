import React from 'react';

import * as styles from './DeveloperTemplate.css';

const DeveloperTemplate = props => {
   return (
      <div className={`template  ${styles.developer_1}`}>
         <div className={styles.header}>
            <div className="template__name">{props.name}</div>
            <div className="template__email">{props.email}</div>
            <div className="template__phone">{props.phone}</div>
            <div className="template__location">{props.location}</div>
            <div className="template__website">{props.website}</div>
         </div>

         <div className="template__sections">
            <div className="template__summary">
               <h4>summary</h4>
               <p>{props.summary}</p>
            </div>
            <div className="template__education">
               <h4>education</h4>
               <p>{props.education}</p>
            </div>
         </div>
      </div>
   );
};

export default DeveloperTemplate;
