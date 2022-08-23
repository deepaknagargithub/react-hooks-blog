import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "./firebase";

function PostDetail(props) {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    db.collection("posts")
      .doc(postId)
      .get()
      .then((snapshot) => {
        setPost(snapshot.data());
      });
  }, []);

  //   function handleUpdate() {
  //     const docRef = db.collection("posts").doc(postId);

  //     docRef
  //       .update({
  //         setPost()
  //       })
  //       .then(() => {
  //         console.log("Delete Successfully");
  //       })
  //       .catch((error) => {
  //         console.log("error:", error);
  //       });
  //   }
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* <img
        src="https://as2.ftcdn.net/v2/jpg/02/03/33/99/1000_F_203339949_yeMeR2IF94Q1q4myfiUf6Xt55xknQkkE.jpg"
        onClick={handleUpdate}
      /> */}
    </div>
  );
}

export default PostDetail;
