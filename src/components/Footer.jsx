import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="about-us" data-aos="fade-right" data-aos-delay="200">
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis
            iure, autem nulla tenetur repellendus.</p>
        </div>
        <div className="newsletter" data-aos="fade-right" data-aos-delay="200">
          <h2>Newsletter</h2>
          <p>Stay update with our latest</p>
          <div className="form-element">
            <input type="text" placeholder="Email" />
            <span><i className="fas fa-chevron-right"></i></span>
          </div>
        </div>
        <div className="instagram" data-aos="fade-left" data-aos-delay="200">
          <h2>Instagram</h2>
          <div className="flex-row">
            <img src="./assets/instagram/thumb-card3.png" alt="insta1" />
            <img src="./assets/instagram/thumb-card4.png" alt="insta2" />
            <img src="./assets/instagram/thumb-card5.png" alt="insta3" />
          </div>
          <div className="flex-row">
            <img src="./assets/instagram/thumb-card6.png" alt="insta4" />
            <img src="./assets/instagram/thumb-card7.png" alt="insta5" />
            <img src="./assets/instagram/thumb-card8.png" alt="insta6" />
          </div>
        </div>
        <div className="follow" data-aos="fade-left" data-aos-delay="200">
          <h2>Follow us</h2>
          <p>Let us be Social</p>
          <div>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="rights flex-row">
        <h4 className="text-gray">
          Copyright ©2019 All rights reserved | made by
          <a href="www.youtube.com/c/dailytuition" target="_black">Daily Tuition <i className="fab fa-youtube"></i>
            Channel</a>
        </h4>
      </div>
      <div className="move-up">
        <span><i className="fas fa-arrow-circle-up fa-2x"></i></span>
      </div>
    </footer>
  );
};

export default Footer;
