import React from 'react'

const Post = () => {
  return (
    <>
    <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
        <div className="post-image">
          <div>
            <img src="./assets/Blog-post/blog1.png" className="img" alt="blog1" />
          </div>
          <div className="post-info flex-row">
            <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
            <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
            <span>2 Commets</span>
          </div>
        </div>
        <div className="post-title">
          <a href="#">Why should boys have all the fun? it's the women who are making india an alcohol-loving contry</a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae adipisci iusto
            totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam
            architecto fugit. Eligendi quidem ipsam ducimus minus magni illum similique veniam tempore unde?
          </p>
          <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button>
        </div>
      </div>
      <hr />
    
    </>
  )
}

export default Post