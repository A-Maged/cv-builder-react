export const test = store => next => action => {
   console.log('dispatching', action);
   next(action);
   console.log('next state', store.getState());
};
