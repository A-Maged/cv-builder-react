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
         <React.Fragment>
            <div onClick={this.openModal} className={detailsStyle}>
               {this.props.education}
            </div>

            {this.state.showForm && (
               <Modal classNames="popup" onClose={this.closeModal}>
                  <Form {...this.props} />
                  <button onClick={this.closeModal}>close</button>
               </Modal>
            )}
         </React.Fragment>
      );
   }
}

const detailsStyle = css`
   cursor: pointer;
   padding: 15px;
   margin-bottom: 10px;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;

export default WithForm(Education);
