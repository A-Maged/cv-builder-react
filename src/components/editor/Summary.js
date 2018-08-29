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
         <div className={section}>
            <div onClick={this.openModal} className="details">
               <h4 className="title">summary</h4>
               {this.props.summary.substring(0, 75) + '...'}
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

export default WithForm(Summary);
