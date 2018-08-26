import React from 'react';
import WithForm from '../../containers/WithForm';

function Education(props) {
   return (
      <React.Fragment>
         <textarea
            onChange={props.educationChanged}
            value={props.education}
            className="form__education"
            placeholder="education"
            type="text"
         />
      </React.Fragment>
   );
}

export default WithForm(Education);
