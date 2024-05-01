import React from 'react'
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div class="col-6 col-md-3">
            <h6>PRODUCTS</h6>
            <ul class="footer-links ">
              <li><a href="#">Website Design</a></li>
              <li><a href="#">UI Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Video Editor</a></li>
              <li><a href="#">Theme Creator</a></li>
              <li><a href="#">Templates</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3">
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
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-12">
            <p class="copyright-text">Copyright © 2024 All Rights Reserved by
              <a href="#"><span class="logo">GCTRADES</span></a>
            </p>
          </div>
        <div class="col-md-4 col-sm-6 col-12">
        <ul class="social-icons">
        <li><a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a class="dribbble" href="#"><i class="fab fa-dribbble"></i></a></li>
        <li><a class="linkedin" href="#"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer