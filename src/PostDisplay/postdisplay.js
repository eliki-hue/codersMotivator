import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";

const PostDisplay = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/posts/")
      .then(response => {
        setPosts(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
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
  
      // axios.get(`http://127.0.0.1:8000/posts/${postId}/like/`)
      //   .then(response => {
      //     setLikes(response.data);
      //     console.log(response.data)
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
    <div><Navbar/></div>
    <div className="container">
      
      <h1 className="text-center mb-5">Posts</h1>
      <div className="row">
        {posts.map((post, index) => (
          <div key={index} className="col-md-6 col-lg-12 mb-5">
            <div className="card h-100">
              {post.image ? (
                <img src={post.image} alt={post.title} className="card-img-top" />
              ) : null}
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.content}</p>
              </div>
              <div className="card-footer">
                <button className="" onClick={() => handlePostClick(post.id)}>
                  
                </button>
                <button onClick={() => setSelectedPostId(selectedPostId === post.id ? null : post.id)}>
            {selectedPostId === post.id ? "Hide Comments" : "View Comments"}
          </button>
    {selectedPostId === post.id && (
      <>
        <h3>Comments:</h3>
        {post.comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.text}</p>
          </div>
        ))}
      </>
    )}
              </div>
            </div>
                  
            {/* {likes.length > 0 && (
            <>
              <h3>Likes:</h3>
              {likes.map(like => (
                <div key={like.id}>
                  <p>{like.author}</p>
                  <p>{like.time_posted}</p>
                </div>

              ))}
              </>)} */}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PostDisplay;