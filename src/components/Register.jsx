import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase"; 
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "../styles/registerandlogin.css";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
// import { setUserId } from "firebase/analytics";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstname: fname,
          lastname: lname,
          password: password,
        });
      }

      toast.success("User registered successfully!!", {
        position: "top-center",
      });

      navigate("/login");

    } catch (error) {
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
      {!isLoading && (<form onSubmit={handleRegister}>
        <h3>Sign Up</h3>
        <div className="form-container">
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn-primary" >
              Sign Up
            </button>
          </div>
          <p className="forgot-password ">
            Already registered <a href="/login">Login</a>
          </p>
        </div>
      </form>)}
    </div>
  );
}

export default Register;
