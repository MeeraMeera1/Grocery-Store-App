import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import the Provider component from react-redux
import { Provider } from 'react-redux';
//importation of configureStore function into entry file
import configureStore from './store/index';
//to test my action function it must be imported in the entry file
import { populateProduce } from './store/produce';
import './index.css';
import App from './App';

//initialize a variable called store and set it to configureStore 
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  //the action then has to be attached to the window 
  window.populateProduce = populateProduce;
}

function Root() {
  return (
    //wrap the BrowserRouter component with the Provider component
    //Pass the prop of store with the value of store into the Provider 
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
