import React, { Component } from 'react';

import WithForm from '../../containers/WithForm';
import EditorSection from './EditorSection';
import TextField from './TextField';

class Education extends Component {
   handleChange = e => {
      this.props.educationChanged(e.target.value);
   };

   render() {
      return (
         <EditorSection
            title="education"
            details={this.props.education.substring(0, 75) + '...'}
         >
            <TextField
               {...this.props}
               html={this.props.education}
               classNames="form__education"
               handleChange={this.handleChange}
            />
         </EditorSection>
      );
   }
}

export default WithForm(Education);
