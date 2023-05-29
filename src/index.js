import React from 'react';
import ReactDOM from 'react-dom/client';
/*
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route
} from 'react-router-dom';
*/

import App from './Chap1AppFunc';
//import ArticleApp from './ArticleApp';
//import Greeting from './GreetingApp';
//import ChapApp from './Chap1App';
//import ChapApp from './Chap2App';
//import ChapApp, {Home, Topics, Contact} from './Chap3App';
//import Chap4App from './Chap4App';
import './index.css';

import reportWebVitals from './reportWebVitals';
/*
const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Chap3App />}>
      <Route path="/home" element={<Home />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);
*/

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
  { 
    <App />         
  }    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
