import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/rootReducer';
import * as loggerMiddlewares from './middlewares/loggerMiddlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(...loggerMiddlewares))
);

export default store;
