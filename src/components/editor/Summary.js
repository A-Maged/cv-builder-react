import React from 'react';
import WithForm from '../../containers/WithForm';

const Fragment = React.Fragment;

function Summary(props) {
   return (
      <Fragment>
         <textarea
            onChange={props.summaryChanged}
            value={props.summary}
            className="form__summary"
            placeholder="summary"
            type="text"
         />
      </Fragment>
   );
}

export default WithForm(Summary);
