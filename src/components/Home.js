import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "./firebase";

function Home(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setPosts(posts);
    });
    // db.collection("posts")
    //   .get()
    //   .then((snapshot) => {
    //     const posts = snapshot.docs.map((doc) => {
    //       return {
    //         id: doc.id,
    //         ...doc.data(),
    //       };
    //     });
    //     console.log(posts);
    //     setPosts(posts);
    //   });
  }, []);

  function handlePost(Id) {
    const docRef = db.collection("posts").doc(Id);

    docRef
      .delete()
      .then(() => {
        console.log("Delete Successfully");
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by ">Deepak Blogs</div>
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subtitle}</p>
          <img
            src="https://cdn-icons.flaticon.com/png/512/2874/premium/2874821.png?token=exp=1658993899~hmac=28887af3936ea181184f500167af36ed"
            onClick={() => handlePost(post.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
