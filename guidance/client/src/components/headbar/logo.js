import React, { Component } from 'react';

class logo extends  Component{
    render() {

        const Signup=()=>{
            
        }
        return (
            <div >
            <h2 class="logo">Career Guidance </h2>
            <h4 class="motto">Road to your Dreams...</h4>  

            <div class="navbar">
     
            <div class="menu">
              <button class="menu-btn">About Us</button>
              <button class="menu-btn">Talks To Us</button>
              <button class="menu-btn">How it works?</button>
             
              <button class="menu-btn-login-signup" onClick={()=>Signup()}>SIGN UP</button>
              <button  class="menu-btn-login-signup">LOGIN</button>
            </div>     
        
          </div> 
           </div>
           
        );
    }
}

export default logo;