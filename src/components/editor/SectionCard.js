import React, { Component } from 'react';

import WithForm from '../../containers/WithForm';
import Card from '../Card';
import SideModal from '../Modal/SideModal';

class SectionCard extends Component {
   state = {
      showForm: false
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
               title={this.props.title}
               details={this.props.details.substring(0, 75) + '...'}
            />

            <SideModal show={this.state.showForm} closeModal={this.closeModal}>
               {this.props.render()}
            </SideModal>
         </React.Fragment>
      );
   }
}

export default WithForm(SectionCard);
