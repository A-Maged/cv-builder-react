import React, { Component } from 'react';

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

class Summary extends Component {
   render() {
      return (
         <EditorSection
            title="summary"
            details={this.props.summary.substring(0, 75) + '...'}
            Form={<Form {...this.props} />}
         />
      );
   }
}

export default WithForm(Summary);
