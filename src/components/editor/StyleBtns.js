import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class StyleBtns extends Component {
   constructor(props) {
      super(props);

      this.btnsNode = document.createElement('div');
      this.btnsNode.setAttribute('id', 'style-btns-node');
      this.parentNode = document.querySelector('.popup');
   }
   componentDidMount() {
      this.parentNode.prepend(this.btnsNode);
   }

   componentWillUnmount() {
      this.parentNode.removeChild(this.btnsNode);
   }

   render() {
      return ReactDOM.createPortal(
         <div>{this.renderBtns()}</div>,
         this.btnsNode
      );
   }

   renderBtns = () => (
      <div className="style-btns">
         <button onClick={() => document.execCommand('bold')}>Bold</button>
         <button onClick={() => document.execCommand('Italic')}>Italic</button>
         <button onClick={() => document.execCommand('underline')}>
            underline
         </button>
         <button onClick={() => document.execCommand('strikeThrough')}>
            strikeThrough
         </button>
         <button onClick={() => document.execCommand('insertOrderedList')}>
            #1
         </button>
         <button onClick={() => document.execCommand('insertUnorderedList')}>
            *
         </button>
         <button onClick={() => document.execCommand('insertHorizontalRule')}>
            hr
         </button>
      </div>
   );
}

export default StyleBtns;
