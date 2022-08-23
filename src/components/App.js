import { useEffect } from "react";
import db from "./firebase";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PostDetail from "./PostDetail";
import CreatePost from "./CreatePost";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
