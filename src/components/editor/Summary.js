import React from 'react';
import WithForm from '../../containers/WithForm';

const Fragment = React.Fragment;

export default function Summary() {
   return (
      <WithForm>
         {props => (
            <Fragment>
               <textarea
                  onChange={props.summaryChanged}
                  value={props.summary}
                  className="form__summary"
                  placeholder="summary"
                  type="text"
               />
            </Fragment>
         )}
      </WithForm>
   );
}
