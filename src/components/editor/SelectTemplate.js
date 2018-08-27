import React from 'react';
import uniqid from 'uniqid';

import WithForm from '../../containers/WithForm';
import templates from '../templates';

const SelectTemplate = props => {
   return (
      <React.Fragment>
         {templates.map(template => {
            return (
               <img
                  onClick={props.selectedTemplateChanged}
                  className={props.styleClasses}
                  key={uniqid()}
                  template-id={template.id}
                  src={template.imageUrl}
                  alt=""
               />
            );
         })}
      </React.Fragment>
   );
};

export default WithForm(SelectTemplate);
