import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as styles from './Modal.css';

class Modal extends Component {
   constructor(props) {
      super(props);
      this.overlayNode = document.createElement('div');
      this.overlayNode.setAttribute('id', 'modal-overlay');
      this.overlayNode.setAttribute(
         'class',
         this.props.overlayClassNames || styles.overlay
      );

      this.modalNode = document.createElement('div');
      this.modalNode.setAttribute('id', 'modal-node');

      this.overlayNode.appendChild(this.modalNode);
   }

   onClose = e => {
      if (e.target === this.overlayNode) {
         this.props.onClose();
      }
   };

   componentDidMount() {
      document.body.appendChild(this.overlayNode);
      window.addEventListener('click', this.onClose);
   }

   componentWillUnmount() {
      document.body.removeChild(this.overlayNode);
      window.removeEventListener('click', this.onClose);
   }

   render() {
      return ReactDOM.createPortal(
         <div className={this.props.classNames || styles.popup}>
            {this.props.children}
         </div>,
         this.modalNode
      );
   }
}

export default Modal;
