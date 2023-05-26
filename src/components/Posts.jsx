import React from 'react';
import Post from './Post';

const Posts = () => {
  return (
    <div className="posts">
    <Post/>

      <div className="pagination flex-row">
        <a href="#"><i className="fas fa-chevron-left"></i></a>
        <a href="#" className="pages">1</a>
        <a href="#" className="pages">2</a>
        <a href="#" className="pages">3</a>
        <a href="#"><i className="fas fa-chevron-right"></i></a>
      </div>
    </div>
  );
};

export default Posts;
