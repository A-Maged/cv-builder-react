import React from 'react';
import ContentEditable from 'react-contenteditable';

const TextField = props => {
   return (
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
         <ContentEditable
            html={props.html}
            onChange={props.handleChange}
            className={`form__input ${props.classNames}`}
            placeholder="summary"
         />
      </React.Fragment>
   );
};

export default TextField;
