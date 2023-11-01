import React, { useContext, useState } from "react";
import "./AddPost.css";
import { GlobalContext } from "../../context/globalContext";
import {
  addAvatarCloudinary,
  addPostCall,
  updateStoryCall,
} from "../../utils/apiCalls";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AddPost() {
  const { user, setUser } = useContext(GlobalContext);
  const [story, setStory] = useState();
  const [image, setImage] = useState();
  const [caption, setCaption] = useState();
  const [uploading, setUploading] = useState(false);
  return (
    <>
      <div className="Create">
        <div className="addPost">
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <fieldset>
            <legend>Caption</legend>
            <textarea
              placeholder="Write about clip Memories"
              value={caption}
              onChange={(e) => {
                setCaption(e.target.value);
              }}
            />
          </fieldset>
          <button
            disabled={uploading}
            onClick={() => {
              setUploading(true);
              const formData = new FormData();
              formData.append("file", image);
              formData.append("upload_preset", "eu3cgvw5");
              formData.append("cloud_name", "dkwgfluqp");
              addAvatarCloudinary({ formData })
                .then((res) => {
                  const formData = new FormData();
                  formData.append("image", res.data.url);
                  formData.append("title", user.userName);
                  formData.append("userId", user._id);
                  formData.append("caption", caption);
                  return addPostCall({ formData, user });
                })
                .then((res) => {
                  setUploading(false);
                  toast.success("UPLOAD SUCSSELFUL!!");
                })
                .catch((err) => {
                  setUploading(false);
                  toast.error("UPLOADING FAILED!!");
                });
            }}
          >
            {uploading ? "UPLOADING..." : "Create Post"}
          </button>
        </div>
        <div className="addStory">
          <fieldset>
            <legend>Create Story</legend>
            <textarea
              value={story}
              onChange={(e) => {
                setStory(e.target.value);
              }}
              placeholder="Share How You Are Feeling Today?"
            />
          </fieldset>
          <button
            onClick={() => {
              updateStoryCall({ story, user })
                .then((res) => {
                  console.log("UpdateStory res", res);
                  toast("Story updated");
                  setStory("");
                  setUser(res.data);
                })
                .catch((err) => {
                  toast.error("some error has occurred,please try again");
                  console.log("UpdateStory err", err);
                });
            }}
          >
            Post
          </button>
        </div>
        {user.story ? (
          <button
            onClick={() => {
              updateStoryCall({ story: null, user })
                .then((res) => {
                  console.log("UpdateStory res", res);
                  toast.error("Story Deleted");
                  setUser(res.data);
                })
                .catch((err) => {
                  console.log("UpdateStory err", err);
                });
            }}
          >
            Delete Story
          </button>
        ) : (
          <></>
        )}
      </div>
      <ToastContainer />
    </>
  );
}
