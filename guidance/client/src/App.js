import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <div >
         <h2 class="logo">Career Guidance </h2>
         <h4 class="motto">Road to your Dreams...</h4>   
    </div>
    <div class="navbar">
     
      <div class="menu">
        <button class="menu-btn">About Us</button>
        <button class="menu-btn">Talks To Us</button>
        <button class="menu-btn">How it works?</button>
       
        <button class="menu-btn-login-signup">SIGN UP</button>
        <button  class="menu-btn-login-signup">LOGIN</button>
      </div>     

    </div>
    
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

    <div className='footer'>
      <div className='footer-description'>
        
          <div className='footer-description'> 
        <h3 className='footer-description-text' >Contact Us</h3>
          </div>

          <div className='footer-description'>
         <h3 className='footer-description-text' >Suggestions</h3>
          </div>

        <div className='footer-description'>
         <h3 className=' footer-description-text' >Connect with Us</h3> 
        </div>
  
          

      </div>
    </div>
    </div>
  
    
  );
}

export default App;
