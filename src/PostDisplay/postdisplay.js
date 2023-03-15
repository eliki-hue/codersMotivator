import { useState, useEffect } from "react";

const initialState = {
  title: "",
  content: "",
  author: 3,
};

function PostDisplay() {
  const [posts, setPosts] = useState([]);

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
    <div>
      <h1>My Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <br />
        <label>
          Content:
          <textarea name="content" />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" />
        </label>
        <br />
        <button type="submit">Add Post</button>
      </form>
      {/* Add code to display the posts */}
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.author.username}</p>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;
