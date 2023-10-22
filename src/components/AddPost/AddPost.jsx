import React from "react";
import "./AddPost.css";
export default function AddPost() {
  return (
    <div className="AddPost">
      <input type="file"/>
      <fieldset>
        <legend>Caption</legend>
        <input type="text" name="" id="" />
      </fieldset>
      <button>Post</button>
      <progress></progress>
    </div>
  );
}
