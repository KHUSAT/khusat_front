import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'

// import redux
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import rootReducer from "./store/index";
import Thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(Thunk)));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();