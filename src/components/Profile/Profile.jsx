import React, { useContext, useState } from "react";
import "./Profile.css";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { GlobalContext } from "../../context/globalContext";
import Post from "../Home/Post";
import {
  addAvatarCloudinary,
  deleteUserCall,
  updateAvatarCall,
  updateBioCall,
  updateCaptionCall,
} from "../../utils/apiCalls";

export default function Profile() {
  const [viewFull, setViewFull] = useState(false);
  const [setting, setSetting] = useState(false);
  const [editingPost, setEditingPost] = useState(false);
  const { user, setUser } = useContext(GlobalContext);
  const [posts, setPosts] = useState(user.posts);
  const [bioEdit, setBioEdit] = useState();
  const [profileAvater, setProfileAvatar] = useState();
  const width = window.innerWidth;
  let content;
  if (!setting) {
    content = (
      <>
        <div className="Profile_photo">
          <img src={user.avatar} />
        </div>
        <div className="Profile_stats">
          <div>{user.posts ? user.posts.length : "0"} Post</div>
          <div>{user.friends ? user.friends.length : "0"} Friends</div>
        </div>
        <div className="Profile_bio">
          <div>
            <div>
              <strong>{user.userName}</strong>
            </div>
            <div>{`${user.firstName} ${
              user.lastName ? user.lastName : ""
            }`}</div>
            <div>
              {user.bio
                ? user.bio.split("\n").map(function (item, idx) {
                    return (
                      <span key={idx}>
                        {item}
                        <br />
                      </span>
                    );
                  })
                : "Loading"}
            </div>
          </div>
        </div>
        <div className="Profile_post">
          {posts ? (
            posts.map((obj) => {
              return (
                <div
                  key={obj._id}
                  className="post_review"
                  onClick={() => {
                    setViewFull(obj);
                  }}
                >
                  <img src={obj.image} alt="loading failed" />
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div>
          <div>Edit picture or avatar</div>
          <input
            type="file"
            onChange={(e) => {
              setProfileAvatar(e.target.files[0]);
            }}
          />
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const formData = new FormData();
                formData.append("file", profileAvater);
                formData.append("upload_preset", "eu3cgvw5");
                formData.append("cloud_name", "dkwgfluqp");

                addAvatarCloudinary({ formData })
                  .then((res) => {
                    return updateAvatarCall({ user, res });
                  })
                  .then((res) => {
                    console.log("updateAvatar ress", res);
                    setUser(res.data);
                  })
                  .catch((err) => {
                    console.log("updateAvatar err", err);
                  });
              }}
            >
              Edit
            </button>
          </div>
        </div>
        <div>
          <textarea
            value={bioEdit}
            onChange={(e) => {
              setBioEdit(e.target.value);
            }}
          ></textarea>
          <button
            onClick={(e) => {
              e.stopPropagation();

              updateBioCall({ user, bioEdit })
                .then((res) => {
                  console.log("updateBio ress", res);
                  setUser(res.data);
                })
                .catch((err) => {
                  console.log("updateBio err", err);
                });
            }}
          >
            change bio
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              deleteUserCall({ user })
                .then((res) => {
                  localStorage.removeItem("token");
                  window.location.reload();
                })
                .catch((res) => {
                  console.log(res);
                });
            }}
          >
            DELETE ACCOUNT
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            logout
          </button>
        </div>
      </>
    );
  }
  if (!viewFull) {
    return (
      <div className={`${setting ? "setting" : "Profile"}`}>
        <button
          className="profileSetting_btn"
          onClick={() => {
            setSetting(!setting);
          }}
        >
          {!setting ? "setting" : "back"}
        </button>
        {content}
      </div>
    );
  } else {
    return (
      <div className="Profile_P">
        <div className="clear_btn_Profile">
          <IconButton
            aria-label="Clear"
            onClick={() => {
              setViewFull(false);
            }}
          >
            <ClearIcon fontSize="large" />
          </IconButton>
        </div>
        {width > 600 ? (
          <>
            <div className="Profile_Po">
              <Post
                obj={viewFull}
                showComments={editingPost}
                setShowComments={setEditingPost}
                commentbtn={false}
                editable={true}
              />
            </div>
            {!editingPost ? (
              <Comment comments={viewFull.comments} />
            ) : (
              <EditForm
                obj={viewFull}
                user={user}
                posts={posts}
                setPosts={setPosts}
              />
            )}
          </>
        ) : (
          <>
            <div className="Profile_Po_mob">
              {editingPost ? (
                <EditForm
                  obj={viewFull}
                  user={user}
                  posts={posts}
                  setPosts={setPosts}
                />
              ) : (
                <></>
              )}
              <Post
                obj={viewFull}
                showComments={editingPost}
                setShowComments={setEditingPost}
                commentbtn={false}
                editable={true}
              />
              <Comment comments={viewFull.comments} />
            </div>
          </>
        )}
      </div>
    );
  }
}

function Comment({ comments }) {
  return (
    <div className="Profile_comments">
      {comments.map((obj, index) => {
        return (
          <div key={index}>
            <strong>{obj.userName}:</strong>
            {obj.comment}
          </div>
        );
      })}
    </div>
  );
}

function EditForm({ obj, user, setUser, posts, setPosts }) {
  const [caption, setCaption] = useState();
  return (
    <div className="editPostForm">
      <div>
        <button
          onClick={() => {
            axios({
              method: "delete",
              url: `/postsData/${obj._id}`,
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            })
              .then((res) => {
                setPosts(
                  posts.filter((post) => {
                    if (post._id === obj._id) {
                      return 0;
                    } else {
                      return 1;
                    }
                  })
                );
              })
              .catch((res) => {});
          }}
        >
          Delete Post
        </button>
      </div>
      <div className="editFormInput">
        <label htmlFor="captionText">Caption</label>
        <textarea
          id="captionText"
          value={caption}
          onChange={(e) => {
            setCaption(e.target.value);
          }}
        ></textarea>
        <button
          onClick={(e) => {
            e.stopPropagation();

            updateCaptionCall({ user, caption, obj })
              .then((res) => {
                console.log("updatecaption ress", res);
                setUser(res.data);
              })
              .catch((err) => {
                console.log("updateCaption err", err);
              });
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
