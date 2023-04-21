import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <strong>{comment.author}</strong>: {comment.text} 
            <span className="created-at">{comment.created_at}</span>
    </div>
  );
};

export default Comment;