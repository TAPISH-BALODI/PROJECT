import React,{Component} from 'react';
import Navbar from '../components/headbar/Navbar';
import '../css/Signup.css';
class Signup extends Component{
    render()
    {
        return(
            <>
            
                    <div className='App'>
                        <Navbar/> 
                    
                
                <div className='body-image'>
                    <div className='body-image-details'>
                        <div className='signup-box-heading'>
                        Enter Your Details Below 
                        </div>
                        <div className='signup-box-details'>

                            <div className='signup-text'>
                            Signup Here
                            </div> 
                            <div className='form-details'>    
                               
                                    Username 
                                
                                    <input className='input-box' placeholder='Username'></input>
                                    </div> <div className='form-details'>  
                                    
                                    Email 
                                
                                    <input className='input-box' placeholder='Email'></input>   
                                    </div> <div className='form-details'> 
                                    
                                     Password 
                                    
                                    <input className='input-box' placeholder='Password'></input>
                                    </div> <div className='form-details'>   
                                    
                                    Confirm Password
                                    
                                    <input className='input-box' placeholder='Confirm Password'></input>
                                </div>                      
                        <br/>
                          <button className='Signup-submit'>Submit</button>
                        
                        </div>
                    </div>
                </div>
               
                
                        </div>
                                
            </>
              
                            
        )
    }
}


export default Signup;