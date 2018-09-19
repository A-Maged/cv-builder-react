import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

import StyleBtns from './StyleBtns';

class TextField extends Component {
   state = {
      showBtns: false
   };

   handleFocus = () => {
      this.setState({ showBtns: true });
      document.removeEventListener('click', this.hideStyleBtns);
   };

   handleBlur = () => {
      document.addEventListener('click', this.hideStyleBtns);
   };

   componentWillUnmount() {
      document.removeEventListener('click', this.hideStyleBtns);
   }

   hideStyleBtns = e => {
      let show = e.target.parentNode.classList.contains('style-btns');
      if (!show) {
         this.setState({ showBtns: false });
      }
   };

   render() {
      return (
         <React.Fragment>
            {this.state.showBtns && <StyleBtns />}

            <ContentEditable
               html={this.props.html}
               onChange={this.props.handleChange}
               onFocus={this.handleFocus}
               onBlur={this.handleBlur}
               className={`form__input form__input__wysiwyg ${
                  this.props.classNames
               }`}
               placeholder="summary"
            />
         </React.Fragment>
      );
   }
}

export default TextField;
