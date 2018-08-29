import React, { Component } from 'react';
import { css } from 'emotion';

import WithForm from '../../containers/WithForm';
import Modal from '../Modal';

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
         <div className={section}>
            <div onClick={this.openModal} className="details">
               <h4 className="title">education</h4>
               {this.props.education}
            </div>

            {this.state.showForm && (
               <Modal classNames="popup" onClose={this.closeModal}>
                  <Form {...this.props} />
                  <button onClick={this.closeModal}>close</button>
               </Modal>
            )}
         </div>
      );
   }
}

const section = css`
   .title {
      font-size: 13px;
      margin: 10px 0;
   }
   .details {
      cursor: pointer;
      padding: 15px;
      margin-bottom: 25px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
   }
`;

export default WithForm(Education);
