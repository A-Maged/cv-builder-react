import React, { Component } from 'react';

import Modal from '../../Modal';
import * as styles from './EditorSection.css';

class EditorSection extends Component {
   state = {
      showForm: false
   };

   render() {
      return (
         <div className={styles.section}>
            <div onClick={this.openModal} className="details">
               <h4 className="title">{this.props.title}</h4>
               <p>{this.props.details}</p>
            </div>

            <styles.AnimateModalWrapper>
               {this.state.showForm && (
                  <Modal popupClassNames="popup" onClose={this.closeModal}>
                     {this.props.children}
                     <button onClick={this.closeModal}>close</button>
                  </Modal>
               )}
            </styles.AnimateModalWrapper>
         </div>
      );
   }

   openModal = () => {
      this.setState({ showForm: true });
   };

   closeModal = () => {
      this.setState({ showForm: false });
   };
}

export default EditorSection;
