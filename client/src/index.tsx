import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from './app/store/configureStore';

// We dont need them after using " React Toolkit "
// const store = configureStore();
// console.log(store.getState());

export const history = createBrowserHistory();

//To see our list of products in " Redux Devtools "
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
      {/* This component is responsible for exposing your store to your React application. 
        This ensures that any of the store hooks within your application have access to the store. */}
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
