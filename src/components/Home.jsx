import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { auth, db } from "../firebase";

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "Blog"));
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Blog", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">
              <p>{post.post}</p>
            </div>
            <div className="nameAndDelete">
              <h3>@{post.author.username}</h3>
              {/* Under the code is not working because auth.currentUser is not working. */}
              {/* {post.author.id === auth.currentUser.id && (
                <button
                  onClick={() => {
                    handleDelete(post.id);
                  }}
                >
                  Delete
                </button>
              )} */}
              <button
                onClick={() => {
                  handleDelete(post.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
