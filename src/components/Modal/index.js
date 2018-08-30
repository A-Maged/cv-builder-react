import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as styles from './Modal.css';

class Modal extends Component {
   constructor(props) {
      super(props);

      // create overlay div
      this.overlayNode = document.createElement('div');
      this.overlayNode.setAttribute('id', 'modal-overlay');
      this.overlayNode.setAttribute(
         'class',
         this.props.overlayClassNames || styles.overlay
      );

      // create modal container div
      this.modalNode = document.createElement('div');
      this.modalNode.setAttribute('id', 'modal-node');

      // add modal container to the overlay div
      this.overlayNode.appendChild(this.modalNode);
   }

   onClose = e => {
      if (e.target === this.overlayNode) {
         this.props.onClose();
      }
   };

   componentDidMount() {
      // add overlay div at the end of <body>
      document.body.appendChild(this.overlayNode);

      window.addEventListener('click', this.onClose);
   }

   componentWillUnmount() {
      // remove overlay div from the dom
      document.body.removeChild(this.overlayNode);

      // must remove the event listener to avoid memory leak
      window.removeEventListener('click', this.onClose);
   }

   render() {
      return ReactDOM.createPortal(
         <div className={this.props.popupClassNames || styles.popup}>
            {this.props.children}
         </div>,
         this.modalNode
      );
   }
}

export default Modal;
