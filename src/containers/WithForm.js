import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { formEdit } from '../redux/actions/actionCreators';

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
      nameChanged: e => dispatch(formEdit({ name: e.target.value })),
      emailChanged: e => dispatch(formEdit({ email: e.target.value })),
      phoneChanged: e => dispatch(formEdit({ phone: e.target.value })),
      summaryChanged: e => dispatch(formEdit({ summary: e.target.value })),
      educationChanged: e => dispatch(formEdit({ education: e.target.value })),
      locationChanged: e => dispatch(formEdit({ location: e.target.value })),
      websiteChanged: e => dispatch(formEdit({ website: e.target.value })),
      selectedTemplateChanged: e =>
         dispatch(
            formEdit({
               selectedTemplate: e.target.getAttribute('template-id')
            })
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
