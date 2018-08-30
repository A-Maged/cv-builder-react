import React from 'react';

import WithForm from '../../containers/WithForm';
import EditorSection from './EditorSection';

const Profile = props => (
   <EditorSection title="Profile" details={props.name + '  ' + props.email}>
      <Form {...props} />
   </EditorSection>
);

const Form = props => {
   return (
      <div className="form">
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
      </div>
   );
};

export default WithForm(Profile);
