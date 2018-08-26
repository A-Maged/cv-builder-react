import React from 'react';
import WithForm from '../../containers/WithForm';

export default function Education() {
   return (
      <WithForm>
         {props => (
            <textarea
               onChange={props.educationChanged}
               value={props.education}
               className="form__education"
               placeholder="education"
               type="text"
            />
         )}
      </WithForm>
   );
}
