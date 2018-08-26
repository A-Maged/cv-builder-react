import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
   formNameChanged,
   formEmailChanged,
   formPhoneChanged,
   formSummaryChanged,
   formEducationChanged,
   formLocationChanged,
   formWebsiteChanged
} from '../redux/actions/actionCreators';

// class WithForm extends Component {
//    render() {
//       return <div className="form">{this.props.children(this.props)}</div>;
//    }
// }

const WithForm = WrappedComponent => {
   return class extends Component {
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
      website: state.form.website
   };
};

const mapDispatchToProps = dispatch => {
   return {
      nameChanged: e => dispatch(formNameChanged(e.target.value)),
      emailChanged: e => dispatch(formEmailChanged(e.target.value)),
      phoneChanged: e => dispatch(formPhoneChanged(e.target.value)),
      summaryChanged: e => dispatch(formSummaryChanged(e.target.value)),
      educationChanged: e => dispatch(formEducationChanged(e.target.value)),
      locationChanged: e => dispatch(formLocationChanged(e.target.value)),
      websiteChanged: e => dispatch(formWebsiteChanged(e.target.value))
   };
};

export default compose(
   connect(
      mapStateToProps,
      mapDispatchToProps
   ),
   WithForm
);
