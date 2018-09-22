import React, { Component } from 'react';

import WithForm from '../../containers/WithForm';
import TextField from './TextField';
import SectionCard from './SectionCard';

class SummaryCard extends Component {
   handleChange = e => {
      this.props.summaryChanged(e.target.value);
   };

   render() {
      return (
         <SectionCard
            title="summary"
            details={this.props.summary.substring(0, 75) + '...'}
            render={this.Form}
         />
      );
   }

   Form = () => (
      <TextField
         {...this.props}
         html={this.props.summary}
         classNames="form__summary"
         handleChange={this.handleChange}
      />
   );
}

export default WithForm(SummaryCard);
