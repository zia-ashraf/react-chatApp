import React from "react";
import NewPostForm from "../../components/Post/NewPostForm/NewPostForm";

const paraStyle = {
  display: "block",
  backgroundColour: "red",
};

const Home = () => {
  return (
    // <div style={paraStyle}>sdfsd</div>
    <div>
      <NewPostForm />
    </div>
  );
};

export default Home;
