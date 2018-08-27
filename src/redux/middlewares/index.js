import React from 'react';
import * as actionTypes from '../actions/actionTypes';
import { HashRouter as Router, Redirect } from 'react-router-dom';

const test = store => next => action => {
   console.log('dispatching', action);
   next(action);
   // console.log('next state', store.getState());
};

const redirect = store => next => action => {
   next(action);
   return <Redirect to="/preview" />;
};

export default [test, redirect];
