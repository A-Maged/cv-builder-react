import React from 'react';

import WithForm from '../../containers/WithForm';
import EditorSection from './EditorSection';

const Form = props => {
   return (
      <textarea
         onChange={props.summaryChanged}
         value={props.summary}
         className="form__summary"
         placeholder="summary"
         type="text"
      />
   );
};

const Summary = props => (
   <EditorSection
      title="summary"
      details={props.summary.substring(0, 75) + '...'}
      Form={<Form {...props} />}
   />
);

export default WithForm(Summary);
