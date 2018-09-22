import React, { Component } from 'react';

import WithForm from '../../containers/WithForm';
import Card from '../Card';
import SideModal from '../Modal/SideModal';
import TextField from './TextField';

class EducationCard extends Component {
   state = {
      showForm: false
   };

   handleChange = e => {
      this.props.educationChanged(e.target.value);
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
               title="education"
               details={this.props.education.substring(0, 75) + '...'}
            />

            <SideModal show={this.state.showForm} closeModal={this.closeModal}>
               <TextField
                  {...this.props}
                  html={this.props.education}
                  classNames="form__education"
                  handleChange={this.handleChange}
               />
            </SideModal>
         </React.Fragment>
      );
   }
}

export default WithForm(EducationCard);
