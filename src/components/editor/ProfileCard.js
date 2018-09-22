import React, { Component } from 'react';

import WithForm from '../../containers/WithForm';
import SectionCard from './SectionCard';

class ProfileCard extends Component {
   render() {
      return (
         <SectionCard
            title="Profile"
            details={this.props.name + '  ' + this.props.email}
            render={this.Form}
         />
      );
   }

   Form = () => (
      <div className="form">
         <input
            onChange={this.props.nameChanged}
            value={this.props.name}
            className="form__name"
            placeholder="name"
            type="text"
         />

         <input
            onChange={this.props.emailChanged}
            value={this.props.email}
            className="form__email"
            placeholder="email"
            type="email"
         />

         <input
            onChange={this.props.phoneChanged}
            value={this.props.phone}
            className="form__phone"
            placeholder="phone"
            type="tel"
         />

         <input
            onChange={this.props.locationChanged}
            value={this.props.location}
            className="form__location"
            placeholder="location"
            type="text"
         />

         <input
            onChange={this.props.websiteChanged}
            value={this.props.website}
            className="form__website"
            placeholder="website"
            type="text"
         />
      </div>
   );
}

export default WithForm(ProfileCard);
