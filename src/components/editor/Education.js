import React from 'react';

import WithForm from '../../containers/WithForm';
import EditorSection from './EditorSection';

const Form = props => {
   return (
      <textarea
         onChange={props.educationChanged}
         value={props.education}
         className="form__education"
         placeholder="education"
         type="text"
      />
   );
};

const Education = props => (
   <EditorSection
      title="education"
      details={props.education.substring(0, 75) + '...'}
      Form={<Form {...props} />}
   />
);

export default WithForm(Education);
