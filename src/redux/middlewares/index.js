import * as actionTypes from '../actions/actionTypes';

const test = store => next => action => {
   console.log('dispatching', action);
   next(action);
   // console.log('next state', store.getState());
};

const redirect = store => next => action => {
   next(action);
   if (action.type === actionTypes.formSelectedTemplateChanged) {
      //
   }
};

export default [test, redirect];
