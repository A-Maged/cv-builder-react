import React, { Component } from 'react';
import { css } from 'emotion';
import Modal from '../Modal';

class EditorSection extends Component {
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
               <h4 className="title">{this.props.title}</h4>
               {this.props.details}
            </div>

            {this.state.showForm && (
               <Modal classNames="popup" onClose={this.closeModal}>
                  {this.props.Form}
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

export default EditorSection;
