import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './login.css';


const Login = () => {
    const {signInWithGoogle,user,setUser,setIsLoading, signUpWithEmailAndPassword,updateProfileName,LoginWithEmailAndPassword} = useAuth();

    const [userEmail,setUserEmail] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [userName,setUserName] = useState('');
    const [checked, setChecked] = useState(false);

    const location = useLocation();
    const redirect_uri =(location.state?.from)? '/home#services' : '/home';
    const history =useHistory();
 
    const handleEmail =(e)=>{
        setUserEmail(e.target.value);
    }
    const handlePassword =(e)=>{
        setUserPassword(e.target.value);
    }
    const handleName=(e)=>{
        setUserName(e.target.value);
    }

    const handleRegister =(e) =>{
        e.preventDefault();
        signUpWithEmailAndPassword(userEmail,userPassword)
        .then(result=>{
            setUser(result.user);
            // history.push(redirect_uri)
            window.location.href = redirect_uri;
            updateProfileName(userName);
        })
        .catch(error =>{
            
        })
        .finally(() =>{
            setIsLoading(false);
            
        } )

        
        
        
    }

    const handleLogin =(e) =>{
        e.preventDefault();
        LoginWithEmailAndPassword(userEmail,userPassword)
        .then(result=>{
            setUser(result.user);
            // history.push(redirect_uri)
            window.location.href = redirect_uri
          })
          .catch(error =>{
            
          })
          .finally(() => setIsLoading(false));
    }


    const toggleCheckbox =(e)=>{
        setChecked(e.target.checked)
    }
    

   

    const handleGoogleLogin=()=>{
        signInWithGoogle()
        .then(result => {
            setUser(result.user);
            // history.push(redirect_uri)
            window.location.href = redirect_uri
        })
        .finally(() => setIsLoading(false));
    }

   


    return (
        <div className="login-container d-flex justify-content-center">
           
           <div className="login-card">
               {
                   checked? <h2>Login</h2> :<h2>Sign Up</h2>
               }
                <div className="form-style">
                    <form >
                        {
                            !checked && 
                            <div className="mb-3">
                            <input onBlur={handleName} className="form-control" type="text" name="" placeholder="Your Name"/>
                        </div>
                        }
                       
                        <div className="mb-3">
                            <input onBlur={handleEmail} className="form-control" type="email" name="" placeholder="Your Email"/>
                        </div>
                        <div className="mb-4">
                            <input onBlur={handlePassword} className="form-control" type="Password" name="" placeholder="Password"/>
                            
                        </div>
                        {
                            checked?  
                            <button  onClick={handleLogin}  className="btn-login" type="submit">Login</button>
                            :
                            <button   className="btn-login" onClick={handleRegister} type="submit">Register</button>
                        }
                        
                        
                        
                        <div className="mt-2">
                            <input 
                            type="checkbox"
                            onChange={toggleCheckbox}
                            /> Already registered?
                        </div>
                    </form>
                </div>
                <hr />
                <button className="btn-login" onClick={handleGoogleLogin}>Login with Google</button>
           </div>
          
        </div>
    );
};

export default Login;