import React, { Component } from 'react';

import WithForm from '../../containers/WithForm';
import EditorSection from './EditorSection';
import TextField from './TextField';

class Summary extends Component {
   handleChange = e => {
      this.props.summaryChanged(e.target.value);
   };

   render() {
      return (
         <EditorSection
            title="summary"
            details={this.props.summary.substring(0, 75) + '...'}
         >
            <TextField
               {...this.props}
               html={this.props.summary}
               classNames="form__summary"
               handleChange={this.handleChange}
            />
         </EditorSection>
      );
   }
}

export default WithForm(Summary);
