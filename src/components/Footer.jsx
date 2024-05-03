import React from 'react'
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="containerabove">
          <div class="footerabout">
            <h6>About</h6>
            <p class="text-justify">
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
          <div class="footercommodity">
            <h6>COMMODITIES</h6>
            <ul class="footer-links ">
              <li><a href="#">Cereals</a></li>
              <li><a href="#">Feedstuff</a></li>
              <li><a href="#">Edible Oils</a></li>
              <li><a href="#">Oil Seeds</a></li>
              <li><a href="#">Fertilizers</a></li>
              <li><a href="#">Milk Products</a></li>
            </ul>
          </div>
          <div class="footerquick">
            <h6>Quick Links</h6>
            <ul class="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Contribute</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
            </ul>

        </div>
       
      </div>
      <hr class="small"/>

      <div class="containerbelow">
          <div class="copyrightsection">

              <p class="copyright-text">Copyright©2024 All Rights Reserved
                <span><a href="#">GCTRADE</a></span>
              </p>

            
           
          </div>
        <div class="sociallinksection">
        <ul class="social-icons">
          <li><a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
          <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a class="linkedin" href="#"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
      </div>
      <p className='email'>If you have any queries, feel free to email us at:-
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gctrade.eu@gmail.com" target="_blank" rel="noopener noreferrer">gctrade.eu@gmail.com</a>
      </p>
      
    </footer>
  )
}

export default Footer