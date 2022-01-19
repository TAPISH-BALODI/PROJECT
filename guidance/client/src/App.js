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
        <button class="menu-btn">Talks To Us</button>

      </div> 
      <div class="menu">
        <button class="menu-btn">About Us</button>

      </div>
       <div class="menu">
        <button class="menu-btn">How it works?</button>

      </div>
      <div className='menu'>

        <input class="search-bar" placeholder="Type your Profession"type='text'></input>
        
      </div>
      <div className='menu'>

        <button class="menu-btn">SIGN UP</button>
        <button  class="menu-btn">LOGIN</button>
      </div>
               
    </div>
    <div class="body-image">
     <div>
              <div>
                <h1 className='body-image-head-text'>Get expert career guidance and counselling from Our experts to discover which field you will enjoy and excel in.</h1>
              </div>
              <div className='body-image-card' >
                <h2 class="body-image-card-text">8-9th Class Students</h2>
                <button className='body-image-card-text-btn'>Look here</button>
              </div>

              <div className='body-image-card'>
              <h2 class="body-image-card-text">10-12th Class Students</h2>
                <button className='body-image-card-text-btn'>Decide here</button>
              </div>

              <div className='body-image-card'>
              <h2 class="body-image-card-text">College Graduates </h2>
                <button className='body-image-card-text-btn'>Choose here</button>
              </div>

              <div className='body-image-card'>
              <h2 class="body-image-card-text">Working Professionals</h2>
                <button className='body-image-card-text-btn'>Explore here</button>
              </div>

     </div>
    </div>
              
            
            
    </div>
  );
}

export default App;
