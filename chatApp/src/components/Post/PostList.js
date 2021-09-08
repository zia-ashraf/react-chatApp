import React from "react";
import PostItem from "./PostItem/PostItem";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const dummy_posts = [
  {
    id: 1,
    by: "Jack Snider",
    title: "Availablity of flatmates",
    content:
      "New flatmates needed for us to shift please let us know on the below contact number",
    date: new Date(),
  },
  {
    id: 2,
    by: "Jack Snider",
    title: "Availablity of flatmates",
    content:
      "New flatmates needed for us to shift please let us know on the below contact number",
    date: new Date(),
  },
  {
    id: 3,
    by: "Jack Snider",
    title: "Availablity of flatmates",
    content:
      "New flatmates needed for us to shift please let us know on the below contact number",
    date: new Date(),
  },
  {
    id: 4,
    by: "Jack Snider",
    title: "Availablity of flatmates",
    content:
      "New flatmates needed for us to shift please let us know on the below contact number",
    date: new Date(),
  },
  {
    id: 5,
    by: "Jack Snider",
    title: "Availablity of flatmates",
    content:
      "New flatmates needed for us to shift please let us know on the below contact number",
    date: new Date(),
  },
];

const PostList = () => {
  const loginstatus = useSelector((state) => state.isLoggedin);

  const posts = dummy_posts.map((post) => (
    <li>
      <PostItem
        id={post.id}
        key={post.id}
        by={post.by}
        title={post.title}
        content={post.content}
        date={post.date}
      />
    </li>
  ));
  return (
    <Fragment>
      <p>{String(loginstatus)}</p>
      <ul style={{ listStyle: "none" }}>{posts}</ul>
    </Fragment>
  );
};

export default PostList;
