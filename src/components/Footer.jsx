import React, { useState } from 'react'
import "../styles/Footer.css";

const Footer = ({value}) => {

  const[showPopup, setshowPopup] = useState(false);

  const handleEmailclick = (event) => {
    event.preventDefault();
    setshowPopup(true);
  }

  const handleclosePopup = () => {
    setshowPopup(false);
  };

  const handleLoginClick = () => {
    setshowPopup(false);
    window.location.href = "/login";

  };

  const handleregisterClick = () => {
    setshowPopup(false);
    window.location.href = "/register";
  };

  return (
    <footer className="site-footer">
      <div className="containerabove">
          <div className="footerabout">
            <h6>About</h6>
            <p className="text-justify">
            GC Trade, based in France, stands as a 
            pioneering international commodity 
            brokerage house led by the first 
            Nepali entrepreneur to operate globally. 
            Our commitment to excellence ensures a 
            comfortable and confident experience for 
            all our clients, including shippers, 
            traders, exporters, importers, and industrialists.
            </p>
          </div>
          <div className="footercommodity">
            <h6>COMMODITIES</h6>
            <ul className="footer-links ">


              <li><a href="#CEREALS">Cereals</a></li>
              <li><a href="#FEEDSTUFF">Feedstuff</a></li>
              <li><a href="#EDIBLE OIL">Edible Oils</a></li>
              <li><a href="#OILSEEDS">Oil Seeds</a></li>
              <li><a href="#FERTILIZERS">Fertilizers</a></li>
              <li><a href="#MILK PRODUCTS">Milk Products</a></li>

            </ul>
          </div>
          <div className="footerquick">
            <h6>Quick Links</h6>
            <ul className="footer-links">
            <li><a href="#navbar">Home</a></li>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#commoditycontainer">Commodities</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#containerbelow">Contact Us</a></li>
            </ul>

        </div>
       
      </div>
      <hr className="small"/>

      <div className="containerbelow" id="containerbelow">
          <div className="copyrightsection">

              <p className="copyright-text">Copyright©2024 All Rights Reserved
                <span><a href="#navbar">GCTRADE</a></span>
              </p>

            
           
          </div>
        <div className="sociallinksection">
        <ul className="social-icons">
          {/* <li><a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a></li> */}

          <li><a className="twitter" href="https://twitter.com/GCTRAD"><i className="fab fa-twitter"></i></a></li>
          <li><a className="linkedin" href="https://www.linkedin.com/in/m-bahadur-8661632/"><i className="fab fa-linkedin-in"></i></a></li>

        </ul>
      </div>
      </div>
      <p className='email' id='email'>If you have any queries, feel free to email us at:-
      
        {
          value ? (<a href="https://mail.google.com/mail/?view=cm&fs=1&to=gctrade.eu@gmail.com" 
          target="_blank" rel="noopener noreferrer" 
          >gctrade.eu@gmail.com</a>) 
          : (<a href="#email" target="_blank" rel="noopener noreferrer" 
          onClick={handleEmailclick}>gctrade.eu@gmail</a>)
        }
        
      </p>
    
      {
        !value && showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleclosePopup}> 
                x
              </span>

              <h3 className='popupheader'>Please Login</h3>
              <p className='popuptext'> You need to login to continue.</p>

              <button className='btn-primary' onClick={handleLoginClick} >
                Login Now
              </button>
            
              <p>.........................Or....................</p>
              <p className="popuptext">If you are new here</p>

              <button className="btn-primary" onClick={handleregisterClick}>
                Register Now
              </button>
              
            </div>
          </div>
        )
      }


    </footer>


  )
}

export default Footer