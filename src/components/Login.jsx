import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { auth } from './firebase';
import { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Login = ({setrendernewTop}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try{
            await signInWithEmailAndPassword(auth, email, password);
            console.log("user logged in successfully");
            
            
            localStorage.setItem('uid', auth.currentUser.uid);//stores the userID in the local storage

            toast.success("User loggedin successfully!!", {
                position: "top-center",
              });

            setrendernewTop(true);
            navigate("/");

        }
        catch(error){
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
              });
          

        }
        finally{
            setIsLoading(false);
            }
    };

  return (


    <div className="form">
    {isLoading && (
        <div className="loading-screen">
          <Loading/>
        </div>
      )}

      {!isLoading && (

        <form onSubmit={handleSubmit}>
        <h3>Login</h3>

        <div className="form-container">

            
            <div className="mb-3">
            <label>Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div className="mb-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>

            <div className="d-grid">
            <button type="submit" className="btn-primary">
                Submit
            </button>
            </div>
            <p className="forgot-password text-right">
            New user? <a href="/register">Register Here</a>
            </p>
        </div>
    </form>
      )}
  </div>
  )
}

export default Login