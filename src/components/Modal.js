import { Component } from 'react';
import ReactDOM from 'react-dom';
import { css } from 'emotion';

class Modal extends Component {
   constructor(props) {
      super(props);
      this.overlayNode = document.createElement('div');
      this.overlayNode.setAttribute('id', 'modal-overlay');
      this.overlayNode.setAttribute(
         'class',
         this.props.overlayClassNames || overlay
      );

      this.modalNode = document.createElement('div');
      this.modalNode.setAttribute('id', 'modal-node');
      this.modalNode.setAttribute('class', this.props.classNames || popup);

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
      return ReactDOM.createPortal(this.props.children, this.modalNode);
   }
}

const popup = css`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   background-color: white;
   box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);
   min-width: 400px;
   max-width: 50vw;
   padding: 15px;

   @media (max-width: 660px) {
      width: 100%;
   }

   & textarea {
      min-height: 25vh;
   }
`;

const overlay = css`
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   background-color: rgba(0, 0, 0, 0.1);
   width: 100%;
   height: 100%;
`;

export default Modal;
