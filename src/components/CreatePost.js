import React, { useState } from "react";
import db from "./firebase";
import useFromInput from "./Hooks";

function CreatePost(props) {
  const title = useFromInput("");
  const subtitle = useFromInput("");
  const content = useFromInput("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("title", title);
    db.collection("posts").add({
      title: title.value,
      subtitle: subtitle.value,
      content: content.value,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>
        <div className="form-field">
          <label>Sub-Title</label>
          <input {...subtitle} />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>
        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
