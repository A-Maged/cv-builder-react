import React from 'react';
import { Link } from 'react-router-dom';

const DeveloperTemplate = props => {
   return (
      <div className="template developer-1">
         <div className="developer-1__header">
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
               <p>{props.summary || 'no summary'}</p>
            </div>
            <div className="template__education">
               <h4>education</h4>
               <p>{props.education || 'no education'}</p>
            </div>
         </div>
      </div>
   );
};

export default DeveloperTemplate;
