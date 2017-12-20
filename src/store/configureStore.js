import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger)
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    });
  }

  return store;
};

export default configureStore;
