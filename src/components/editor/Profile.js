import React from 'react';
import WithForm from '../../containers/WithForm';

const Fragment = React.Fragment;

function Profile(props) {
   return (
      <Fragment>
         <input
            onChange={props.nameChanged}
            value={props.name}
            className="form__name"
            placeholder="name"
            type="text"
         />

         <input
            onChange={props.emailChanged}
            value={props.email}
            className="form__email"
            placeholder="email"
            type="email"
         />

         <input
            onChange={props.phoneChanged}
            value={props.phone}
            className="form__phone"
            placeholder="phone"
            type="tel"
         />

         <input
            onChange={props.locationChanged}
            value={props.location}
            className="form__location"
            placeholder="location"
            type="text"
         />

         <input
            onChange={props.websiteChanged}
            value={props.website}
            className="form__website"
            placeholder="website"
            type="text"
         />
      </Fragment>
   );
}

export default WithForm(Profile);
