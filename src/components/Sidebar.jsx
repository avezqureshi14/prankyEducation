import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="popular-post">
        <h2>Popular Post</h2>
        <div className="post-content" data-aos="flip-up" data-aos-delay="200">
          <div className="post-image">
            <div>
              <img src="./assets/popular-post/m-blog-1.jpg" className="img" alt="blog1" />
            </div>
            <div className="post-info flex-row">
              <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
              <span>2 Commets</span>
            </div>
          </div>
          <div className="post-title">
            <a href="#">New data recording system to better analyze road accidents</a>
          </div>
        </div>
        <div className="post-content" data-aos="flip-up" data-aos-delay="300">
          <div className="post-image">
            <div>
              <img src="./assets/popular-post/m-blog-2.jpg" className="img" alt="blog1" />
            </div>
            <div className="post-info flex-row">
              <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
              <span>2 Commets</span>
            </div>
          </div>
          <div className="post-title">
            <a href="#">New data recording system to better analyze road accidents</a>
          </div>
        </div>
        <div className="post-content" data-aos="flip-up" data-aos-delay="400">
          <div className="post-image">
            <div>
              <img src="./assets/popular-post/m-blog-3.jpg" className="img" alt="blog1" />
            </div>
            <div className="post-info flex-row">
              <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
              <span>2 Commets</span>
            </div>
          </div>
          <div className="post-title">
            <a href="#">New data recording system to better analyze road accidents</a>
          </div>
        </div>
        <div className="post-content" data-aos="flip-up" data-aos-delay="500">
          <div className="post-image">
            <div>
              <img src="./assets/popular-post/m-blog-4.jpg" className="img" alt="blog1" />
            </div>
            <div className="post-info flex-row">
              <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
              <span>2 Commets</span>
            </div>
          </div>
          <div className="post-title">
            <a href="#">New data recording system to better analyze road accidents</a>
          </div>
        </div>
        <div className="post-content" data-aos="flip-up" data-aos-delay="600">
          <div className="post-image">
            <div>
              <img src="./assets/popular-post/m-blog-5.jpg" className="img" alt="blog1" />
            </div>
            <div className="post-info flex-row">
              <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
              <span>2 Commets</span>
            </div>
          </div>
          <div className="post-title">
            <a href="#">New data recording system to better analyze road accidents</a>
          </div>
        </div>
      </div>
      <div className="newsletter" data-aos="fade-up" data-aos-delay="300">
        <h2>Newsletter</h2>
        <div className="form-element">
          <input type="text" className="input-element" placeholder="Email" />
          <button className="btn form-btn">Subscribe</button>
        </div>
      </div>
      <div className="popular-tags">
        <h2>Popular Tags</h2>
        <div className="tags flex-row">
          <span className="tag" data-aos="flip-up" data-aos-delay="100">Software</span>
          <span className="tag" data-aos="flip-up" data-aos-delay="200">technology</span>
          <span className="tag" data-aos="flip-up" data-aos-delay="300">travel</span>
          <span className="tag" data-aos="flip-up" data-aos-delay="400">illustration</span>
          <span className="tag" data-aos="flip-up" data-aos-delay="500">design</span>
          <span className="tag" data-aos="flip-up" data-aos-delay="600">lifestyle</span>
          <span className="tag" data-aos="flip-up" data-aos-delay="700">love</span>
          <span className="tag" data-aos="flip-up" data-aos-delay="800">project</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
