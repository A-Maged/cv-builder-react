import React, { Component } from 'react';

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

class Education extends Component {
   render() {
      return (
         <EditorSection
            title="education"
            details={this.props.education.substring(0, 75) + '...'}
            Form={<Form {...this.props} />}
         />
      );
   }
}

export default WithForm(Education);
