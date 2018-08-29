import React from 'react';
import uniqid from 'uniqid';

import * as styles from './SelectTemplate.css';
import WithForm from '../../../containers/WithForm';
import templates from '../../templates';

const renderTemplateImages = props => {
   let selectedTemplateId = parseInt(props.selectedTemplate, 10); // 1 state

   return (
      <React.Fragment>
         {templates.map(template => {
            let templateId = parseInt(template.id, 10);

            let isSelectedClassName =
               selectedTemplateId === templateId ? 'selected' : '';

            return (
               <img
                  onClick={props.selectedTemplateChanged}
                  template-id={templateId}
                  className={`${isSelectedClassName} ${props.styleClasses ||
                     'col-xs-6  col-sm-4'}`}
                  src={template.imageUrl}
                  key={uniqid()}
                  alt=""
               />
            );
         })}
      </React.Fragment>
   );
};

const SelectTemplate = props => {
   return (
      <div className={styles.selectTemplate}>
         <h4>select template</h4>
         <div className="row">{renderTemplateImages(props)}</div>
      </div>
   );
};

export default WithForm(SelectTemplate);
