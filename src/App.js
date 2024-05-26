import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Midsection from "./components/Midsection";
import Aboutus from "./components/Aboutus";
import Commodities from "./components/Commodities";
import Services from "./components/Services";
import Footer from "./components/Footer";
import DropdownMenu from "./components/Dropdown";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./components/firebase";
import Loading from "./components/Loading";
import Tiermembers from "./components/Tiermembers";

function App({rendernewTop, setrendernewTop}) {

  const [isLoading, setisLoading]= useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
          
          if (user) {
              // User is signed in
              // const uid = user.uid;
              setrendernewTop(true); 
              console.log("User is signed in");
          } else {
              // User is signed out
              setrendernewTop(false);
              console.log("User is signed out");
          }
          setisLoading(false);
      });

      return () => unsubscribe(); // Cleanup function
  });

  return (

      <div className="App">
        {
          isLoading && <Loading/>
        }

        {!isLoading && (
          <div> 
            <Routes>

              <Route path="/" element={<>
                <DropdownMenu rendernewTop={rendernewTop} setrendernewTop={setrendernewTop} />
                <Navbar />
                <Header />

                <Midsection />
                <Aboutus />
                <Commodities />
                <Services />
                <Tiermembers />
                <Footer value={rendernewTop} />
              </>} />
              <Route path="/register" element={<Register />} />
             

            </Routes>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <ToastContainer />
              </div>
            </div>
          </div>

        )}
      </div>
    
  );
}

export default App