import React from 'react';

import WithForm from '../../containers/WithForm';
import EditorSection from './EditorSection';

const Education = props => (
   <EditorSection
      title="education"
      details={props.education.substring(0, 75) + '...'}
   >
      <textarea
         onChange={props.educationChanged}
         value={props.education}
         className="form__education"
         placeholder="education"
         type="text"
      />
   </EditorSection>
);

export default WithForm(Education);
