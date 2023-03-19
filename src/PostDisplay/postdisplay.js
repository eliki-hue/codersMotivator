import { useState, useEffect } from "react";
import axios from "axios";

const initialState = {
  title: "",
  content: "",
  author: 3,
};

function PostDisplay() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/post/"
      );
      const data = await response.json();
      setPosts(data);
      console.log(data);
    }
    getPosts();
  }, []);

  const handlePostClick = (postId) => {
      axios.get(`http://127.0.0.1:8000/comments/${postId}`)
        .then(response => {
          setComments(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
  
      // axios.get(`http://127.0.0.1:8000/posts/<int:${postId}>/like/`)
      //   .then(response => {
      //     setLikes(response.data);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, author } = event.target.elements;
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <>
      
      {/* Add code to display the posts */}
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.id}</p>
          <p>{post.content}</p>
          <p>{post.image}</p>
          <p>{post.video}</p>
          <p>{post.time_posted}</p>
          
          <button onClick={() => handlePostClick(post.id)}>View Comments & Likes</button>
       
      {comments.length > 0 && (
        <div>
          <h3>Comments:</h3>
          {comments.map(comment => (
            <div key={comment.id}>
              <p>{comment.text}</p>
              <p>{comment.author}</p>
              <p>{comment.created_on}</p>
            </div>
          ))}
        </div>
      )}
      {likes.length > 0 && (
        <>
          <h3>Likes:</h3>
          {likes.map(like => (
            <div key={like.id}>
              <p>{like.user}</p>
            </div>

          ))}
          </>)}
        </div>
        
      ))}
        
  
        
    </>
  );
}

export default PostDisplay;
