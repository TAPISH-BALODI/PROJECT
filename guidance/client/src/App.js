import React, { useState,Component } from 'react';
import '../src/css/App.css';
import Logo from './components/headbar/logo';
import{ BrowserRouter} from 'react-router-dom'
import Footer from './components/footer/Footer';

class App extends Component{
  
  
  
  render(){
    
    return (
      <BrowserRouter>

      <div className="App">
       
        <Logo/>
      
      
      <div class="body-image">
            <div className='cards'>
                <div >
                  <h1 className='body-image-head-text'>Get expert career guidance and counselling from Our experts to discover which field you will enjoy and excel in.</h1>
                </div>
                      <div className='body-image-card' >
                          <h2 class="body-image-card-text">8-9th Class Students</h2>
                          <h3 className='card-description'>know your ideal stream</h3>
                            <div className='card-btn'>
                                <button className='body-image-card-text-btn'>Look here</button>
                            </div>
                      </div>
    
                      <div className='body-image-card'>
                          <h2 class="body-image-card-text">10-12th Class Students</h2>
                          <h3 className='card-description'>know your ideal stream</h3>
                            <div className='card-btn'>
                              <button className='body-image-card-text-btn'>Decide here</button>
                            </div>
                       </div>
    
                      <div className='body-image-card'>
                          <h2 class="body-image-card-text">College Graduates</h2>
                          <h3 className='card-description'>know your ideal stream</h3>
                        <div className='card-btn'>
                            <button className='body-image-card-text-btn'>Choose here</button>
                        </div>
                      </div>
    
                      <div className='body-image-card'>
                          <h2 class="body-image-card-text">Working Professionals</h2>
                          <h3 className='card-description'>know your ideal stream</h3>
                        <div className='card-btn'>
                            <button className='body-image-card-text-btn'>Explore here</button>
                         </div>
                      </div>
              </div>
      </div>      
      </div>
      <div>
      <Footer/>
      </div>
    
      </BrowserRouter>
    );
  }



}

export default App;
