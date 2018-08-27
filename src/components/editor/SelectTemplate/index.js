import React from 'react';
import uniqid from 'uniqid';

import * as styles from './SelectTemplate.css';
import WithForm from '../../../containers/WithForm';
import templates from '../../templates';
const SelectTemplate = props => {
   let selectedTemplateId = parseInt(props.selectedTemplate, 10);

   return (
      <div className={styles.selectTemplate}>
         <h4>select template</h4>
         <div className="row">
            {templates.map(template => {
               let templateId = parseInt(template.id, 10) - 1;
               return (
                  <img
                     onClick={props.selectedTemplateChanged}
                     template-id={templateId}
                     className={`${
                        selectedTemplateId === templateId ? 'selected' : ''
                     } ${props.styleClasses || 'col-xs-6  col-sm-4'}`}
                     src={template.imageUrl}
                     key={uniqid()}
                     alt=""
                  />
               );
            })}
         </div>
      </div>
   );
};

export default WithForm(SelectTemplate);
