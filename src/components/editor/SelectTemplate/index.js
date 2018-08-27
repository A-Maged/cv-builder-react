import React from 'react';
import uniqid from 'uniqid';

import * as styles from './SelectTemplate.css';
import WithForm from '../../../containers/WithForm';
import templates from '../../templates';
const SelectTemplate = props => {
   return (
      <div className={styles.selectTemplate}>
         <h4>select template</h4>
         <div className="row">
            {templates.map(template => {
               return (
                  <img
                     onClick={props.selectedTemplateChanged}
                     className={props.styleClasses || 'col-xs-6  col-sm-4'}
                     key={uniqid()}
                     template-id={parseInt(template.id, 10) - 1}
                     src={template.imageUrl}
                     alt=""
                  />
               );
            })}
         </div>
      </div>
   );
};

export default WithForm(SelectTemplate);
