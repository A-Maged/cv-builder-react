import React, { Component } from 'react';

import WithForm from '../../containers/WithForm';
import Card from '../Card';
import SideModal from '../Modal/SideModal';
import TextField from './TextField';

class SummaryCard extends Component {
   state = {
      showForm: false
   };

   handleChange = e => {
      this.props.summaryChanged(e.target.value);
   };

   openModal = () => {
      this.setState({ showForm: true });
   };

   closeModal = () => {
      this.setState({ showForm: false });
   };

   render() {
      return (
         <React.Fragment>
            <Card
               onClick={this.openModal}
               title="summary"
               details={this.props.summary.substring(0, 75) + '...'}
            />

            <SideModal show={this.state.showForm} closeModal={this.closeModal}>
               <TextField
                  {...this.props}
                  html={this.props.summary}
                  classNames="form__summary"
                  handleChange={this.handleChange}
               />
            </SideModal>
         </React.Fragment>
      );
   }
}

export default WithForm(SummaryCard);
