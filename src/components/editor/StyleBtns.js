import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { css } from 'emotion';

class StyleBtns extends Component {
   constructor(props) {
      super(props);

      this.btnsNode = document.createElement('div');
      this.btnsNode.setAttribute('class', `${styles}  style-btns`);
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
      <React.Fragment>
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
      </React.Fragment>
   );
}

const styles = css`
   background: none;

   position: absolute;
   top: 0;
   left: -167px;
   text-align: right;
   text-align: -webkit-right;

   button {
      display: block;
   }

   @media (max-width: 660px) {
      & {
         position: relative;
         left: 0;

         button {
            display: inline-block;
         }
      }
   }
`;

export default StyleBtns;
