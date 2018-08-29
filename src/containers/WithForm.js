import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actions/actionCreators';

const WithForm = WrappedComponent => {
   return class extends Component {
      static displayName = `WithForm(${WrappedComponent.displayName ||
         WrappedComponent.name})`;

      render() {
         return <WrappedComponent {...this.props} />;
      }
   };
};

const mapStateToProps = state => {
   return {
      name: state.form.name,
      email: state.form.email,
      phone: state.form.phone,
      summary: state.form.summary,
      education: state.form.education,
      location: state.form.location,
      website: state.form.website,
      selectedTemplate: state.form.selectedTemplate
   };
};

const mapDispatchToProps = dispatch => {
   return {
      nameChanged: e =>
         dispatch(actionCreators.formNameChanged(e.target.value)),
      emailChanged: e =>
         dispatch(actionCreators.formEmailChanged(e.target.value)),
      phoneChanged: e =>
         dispatch(actionCreators.formPhoneChanged(e.target.value)),
      summaryChanged: e =>
         dispatch(actionCreators.formSummaryChanged(e.target.value)),
      educationChanged: e =>
         dispatch(actionCreators.formEducationChanged(e.target.value)),
      locationChanged: e =>
         dispatch(actionCreators.formLocationChanged(e.target.value)),
      websiteChanged: e =>
         dispatch(actionCreators.formWebsiteChanged(e.target.value)),
      selectedTemplateChanged: e =>
         dispatch(
            actionCreators.formSelectedTemplateChanged(
               e.target.getAttribute('template-id')
            )
         )
   };
};

export default compose(
   connect(
      mapStateToProps,
      mapDispatchToProps
   ),
   WithForm
);
