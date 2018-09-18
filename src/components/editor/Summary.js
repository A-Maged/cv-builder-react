import React from 'react';

import WithForm from '../../containers/WithForm';
import EditorSection from './EditorSection';

const Summary = props => {
   const test = e => {
      let allText = e.target.value,
         selectedText = window.getSelection().toString(),
         start = e.target.selectionStart,
         end = e.target.selectionEnd;

      if (selectedText === '') return;

      // constructe the new string
      let newTxt =
         allText.substring(0, start) +
         selectedText.bold() +
         allText.substring(end);

      props.summaryChanged(newTxt);
      console.log(newTxt);
   };

   return (
      <EditorSection
         title="summary"
         details={props.summary.substring(0, 75) + '...'}
      >
         <textarea
            onChange={props.summaryChanged}
            onSelect={test}
            value={props.summary}
            className="form__summary"
            placeholder="summary"
            type="text"
         />
      </EditorSection>
   );
};

export default WithForm(Summary);
