import React, { Component } from 'react';

import WithForm from '../../../containers/WithForm';
import * as styles from './Profile.css';
import Modal from '../../Modal';

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

class Profile extends Component {
   state = {
      showForm: false
   };

   handleClick = () => {
      this.setState({
         showForm: !this.state.showForm
      });
   };

   render() {
      return (
         <div className={styles.profile}>
            <div onClick={this.handleClick} className="details">
               {this.props.name + '  ' + this.props.email}
            </div>
            {this.state.showForm && (
               <Modal classNames={styles.popup}>
                  <Form {...this.props} />
               </Modal>
            )}
         </div>
      );
   }
}

// ReactDOM.render(
//    <Form {...this.props} showForm={this.state.showForm} />,
//    document.querySelector('#popup')
// );

export default WithForm(Profile);
