import React, { useEffect, useState } from "react";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = (isAuth) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "Blog"), {
      title: title,
      post: body,
      author: {
        id: auth.currentUser.uid,
        username: auth.currentUser.displayName,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    // console.log(!isAuth);
    if (!isAuth) {
      // console.log(!isAuth);
      navigate("/");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Post the article</h1>
        <div className="inputPost">
          <div>Title</div>
          <input
            type="text"
            placeholder="Wite down title."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>Body</div>
          <textarea
            placeholder="Wite down body."
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
