import { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
   constructor(props) {
      super(props);

      this.modalNode = document.createElement('div');
      this.modalNode.setAttribute('id', 'modal-node');
      this.modalNode.setAttribute('class', this.props.classNames);
   }

   componentDidMount() {
      document.body.appendChild(this.modalNode);
   }

   componentWillUnmount() {
      document.body.removeChild(this.modalNode);
   }

   render() {
      return ReactDOM.createPortal(this.props.children, this.modalNode);
   }
}

export default Modal;
