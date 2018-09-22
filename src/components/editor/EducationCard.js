import React, { Component } from 'react';

import WithForm from '../../containers/WithForm';
import TextField from './TextField';
import SectionCard from './SectionCard';

class EducationCard extends Component {
   handleChange = e => {
      this.props.educationChanged(e.target.value);
   };

   render() {
      return (
         <SectionCard
            title="education"
            details={this.props.education.substring(0, 75) + '...'}
            render={this.Form}
         />
      );
   }

   Form = () => (
      <TextField
         {...this.props}
         html={this.props.education}
         classNames="form__education"
         handleChange={this.handleChange}
      />
   );
}

export default WithForm(EducationCard);
