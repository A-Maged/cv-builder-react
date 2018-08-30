import React, { Component } from 'react';

import Modal from '../../Modal';
import * as styles from './EditorSection.css';

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
         <div className={styles.section}>
            <div onClick={this.openModal} className="details">
               <h4 className="title">{this.props.title}</h4>
               {this.props.details}
            </div>

            <styles.AnimateModalWrapper>
               {this.state.showForm && (
                  <Modal classNames="popup" onClose={this.closeModal}>
                     {this.props.Form}
                     <button onClick={this.closeModal}>close</button>
                  </Modal>
               )}
            </styles.AnimateModalWrapper>
         </div>
      );
   }
}

export default EditorSection;
