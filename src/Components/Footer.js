import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


function Footer() {
  return (
    <div>
      {/* <!-- Footer Section Begin --> */}
      <footer class="footer spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__about">
                <div class="footer__about__logo">
                  <a href="./index.html"><img src="./img/logo.png" alt=""/></a>
                </div>
                <ul>
                  <li>Address: 60-49 Road 11378 Ahemdabad</li>
                  <li>Phone: +91 9876543210</li>
                  <li>Email: hello@gmail.com.com</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
              <div class="footer__widget">
                <h6>Useful Links</h6>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">About Our Shop</a></li>
                  <li><a href="#">Secure Shopping</a></li>
                  <li><a href="#">Delivery infomation</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Our Sitemap</a></li>
                </ul>
                <ul>
                  <li><a href="#">Who We Are</a></li>
                  <li><a href="#">Our Services</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Innovation</a></li>
                  <li><a href="#">Testimonials</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="footer__widget">
                <h6>Join Our Newsletter Now</h6>
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <form action="#">
                  <input type="text" placeholder="Enter your mail"/>
                    <button type="submit" class="site-btn">Subscribe</button>
                </form>
                <div class="footer__widget__social">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><IoLogoInstagram /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaPinterest /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="footer__copyright">
                <div class="footer__copyright__text"><p>
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <FaHeart /> by <a href="#" target="_blank">Hiren</a></p></div>
                <div class="footer__copyright__payment"><img src="./img/payment-item.png" alt=""/></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Section End --> */}
    </div>
  )
}

export default Footer
