import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Created at: {post.created_at}</p>
      
    </div>
  );
};

export default Post;
