import React, { Component } from 'react';
import { css } from 'emotion';
import WithForm from '../../containers/WithForm';
import Modal from '../Modal';

const Form = props => {
   return (
      <textarea
         onChange={props.summaryChanged}
         value={props.summary}
         className="form__summary"
         placeholder="summary"
         type="text"
      />
   );
};

class Summary extends Component {
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
         <div className={detailsStyle}>
            <div onClick={this.openModal} className="details">
               {this.props.summary}
            </div>

            {this.state.showForm && (
               <Modal classNames="popup" onClose={this.closeModal}>
                  <Form {...this.props} />
               </Modal>
            )}
         </div>
      );
   }
}

const detailsStyle = css`
   cursor: pointer;
   padding: 15px;
   margin-bottom: 10px;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;

export default WithForm(Summary);
