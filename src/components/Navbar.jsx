import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-menu flex-row">
        <div className="nav-brand">
          <a href="/" className="text-gray">SAE</a>
        </div>
        <div className="hrefggle-collapse">
          <div className="hrefggle-icons">
            <i className="fas fa-bars"></i>
          </div>
        </div>
        <div>
          <ul className="nav-items">
            <li className="nav-a">
              <a href="/">Home</a>
            </li>
            <li className="nav-a">
              <a href="/placements">Placements</a>
            </li>
            <li className="nav-a">
              <a href="/staff">Staff</a>
            </li>
            <li className="nav-a">
              <a href="/register">Login/Register</a>
            </li>
          </ul>
        </div>
        <div className="social text-gray">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
