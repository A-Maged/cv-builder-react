import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { css } from 'emotion';

class StyleBtns extends Component {
   constructor(props) {
      super(props);

      this.btnsNode = document.createElement('div');
      this.btnsNode.setAttribute('class', styles);
      this.parentNode = document.querySelector('.popup');
   }

   componentDidMount() {
      this.parentNode.prepend(this.btnsNode);
   }

   componentWillUnmount() {
      this.parentNode.removeChild(this.btnsNode);
   }

   render() {
      return ReactDOM.createPortal(this.renderBtns(), this.btnsNode);
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

const styles = css`
   background: #fff;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   text-align: center;

   button {
      margin-right: 10px;
   }
`;

export default StyleBtns;
