/* eslint-disable no-unused-vars*/ 
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const LogIn = () => {
    const {signIn,googleLogin,githubLogin}=useContext(AuthContext);
    const handleLogin=(event)=>{
        event.preventDefault();
         const form=event.target;
         const email=form.email.value;
         const password=form.password.value;
         form.reset();
         signIn(email,password)
         .then(result=>{
            console.log(result.user);
         })
         .catch(error=>{
            console.log(error.message);
         })

    }
    const handleGoogleSignIn=()=>{
       
        googleLogin()
        .then(result=>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    const handleGithubLogin=()=>{
        githubLogin()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className='text-center my-5'>
            <h3>Please Login</h3>
            <div className='d-flex justify-content-between align-items-center container py-5'>
                <div>
                    <h3>Please login with email and password</h3>
                <form onSubmit={handleLogin}>
                <input className='py-2 px-5' type="email" name="email" id="name" required placeholder='Enter your Email'/><br/>
                <input className='py-2 px-5 my-2' type="password" name="password" id="password" required placeholder='Enter Password'/><br/>
                <input className='btn btn-secondary' type="submit" value="submit" />
               </form>
                </div>
                <div>
                <h3>Please Login with   <button className='btn btn-secondary'  onClick={handleGoogleSignIn}>Google Account</button></h3>
              
                </div>
                <div>
                    <h3>Please Login with   <button className='btn btn-secondary' onClick={handleGithubLogin} >Github Account</button></h3>
                </div>
            </div>
            <div>
                <p className='my-3'>New User? Please <Link to='../Registration'><button className='btn btn-secondary'>Registration</button></Link></p>
            </div>
        </div>
    );
};

export default LogIn; 