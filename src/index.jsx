import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Baloo Bhai']
  }
});


const store = createStore(rootReducer,
  compose(
    applyMiddleware(logger, thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
  )
);

store.firebaseAuthIsReady.then(() => {
  const render = (Component) => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('react-app-root')
    );
  };

  render(App);
})



if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
"react-dom";
