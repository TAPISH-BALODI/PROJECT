import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Signup from './pages/signup';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

ReactDOM.render(
  
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
  </Router>,
 document.getElementById("root")
);

