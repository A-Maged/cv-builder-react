import React, { Component } from 'react';

import WithForm from '../../containers/WithForm';
import Card from '../Card';
import SideModal from '../Modal/SideModal';

class ProfileCard extends Component {
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
               title="Profile"
               details={this.props.name + '  ' + this.props.email}
            />

            <SideModal show={this.state.showForm} closeModal={this.closeModal}>
               <Form {...this.props} />
            </SideModal>
         </React.Fragment>
      );
   }
}

const Form = props => {
   return (
      <div className="form">
         <input
            onChange={props.nameChanged}
            value={props.name}
            className="form__name"
            placeholder="name"
            type="text"
         />

         <input
            onChange={props.emailChanged}
            value={props.email}
            className="form__email"
            placeholder="email"
            type="email"
         />

         <input
            onChange={props.phoneChanged}
            value={props.phone}
            className="form__phone"
            placeholder="phone"
            type="tel"
         />

         <input
            onChange={props.locationChanged}
            value={props.location}
            className="form__location"
            placeholder="location"
            type="text"
         />

         <input
            onChange={props.websiteChanged}
            value={props.website}
            className="form__website"
            placeholder="website"
            type="text"
         />
      </div>
   );
};

export default WithForm(ProfileCard);
