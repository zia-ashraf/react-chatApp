import { useState } from "react";
import React from "react";

const NewPostForm = () => {
  const [newPostValues, setNewPostValues] = useState({
    title: "",
    content: "",
  });

  const titleChangeHandler = (event) => {
    setNewPostValues((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };
  const contentChangeHandler = (event) => {
    setNewPostValues((prevState) => {
      return {
        ...prevState,
        content: event.target.value,
      };
    });
  };
  const submissionHandler = (event) => {
    event.preventDefault();
    const postData = {
      title: newPostValues.title,
      desc: newPostValues.content,
    };
    fetch("https://chat-app-bknd.herokuapp.com/create-post", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VybmFtZSI6ImV4YWEiLCJ1c2VySWQiOjUsImlhdCI6MTYzMDYwNDEzNywiZXhwIjoxNjMxNjg0MTM3fQ.QmJNHLgIgnBOqXO9Xoc1vb32xPjM32J8BVSQyyCiMYA",
      },
      method: "POST",
      body: JSON.stringify(postData),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setNewPostValues((prevState) => {
      return {
        ...prevState,
        title: "",
        content: "",
      };
    });
  };

  return (
    <form onSubmit={submissionHandler}>
      <div>
        <label>Title</label>
        <input
          onChange={titleChangeHandler}
          value={newPostValues.title}
          type="text"
          id="title"
          name="title"
        ></input>
      </div>
      <div>
        <label>Write your post here</label>
        <input
          onChange={contentChangeHandler}
          value={newPostValues.content}
          type="text"
          id="content"
          name="content"
        ></input>
      </div>
      <button type="submit">Post</button>
    </form>
  );
};

export default NewPostForm;
