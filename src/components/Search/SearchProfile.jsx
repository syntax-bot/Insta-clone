import React, { useState } from "react";
import "./SearchProfile.css";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Post from "../Home/Post";
export default function SearchProfile({ setClearCheck, user }) {
  const [viewFull, setViewFull] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const width = window.innerWidth;

  if (viewFull) {
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
              <Post obj={viewFull} commentbtn={false} editable={false} />
            </div>
            <Comment comments={viewFull.comments} />
          </>
        ) : (
          <>
            <div className="Profile_Po_mob">
              <Post
                obj={viewFull}
                showComments={showComments}
                setShowComments={setShowComments}
                commentbtn={true}
                editable={false}
              />
              {showComments ? <Comment comments={viewFull.comments} /> : <></>}
            </div>
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className="Profile">
        <div className="clear_btn">
          <IconButton
            aria-label="Clear"
            onClick={() => {
              setClearCheck(false);
            }}
          >
            <ClearIcon fontSize="large" style={{ color: "black" }} />
          </IconButton>
        </div>
        <div className="Profile_photo">
          <img src={user.avatar} />
        </div>
        <div className="Profile_stats">
          <div>{user.posts ? user.posts.length : "0"} Post</div>
          <div>{129} Friends</div>
        </div>
        <div className="Profile_bio">
          <div>
            <div>{user.userName}</div>
            <div>{`${user.firstName} ${
              user.lastName ? user.lastName : ""
            }`}</div>
            <div>{user.bio}</div>
          </div>
        </div>
        <div className="Profile_post">
          {user.posts ? (
            user.posts.map((obj) => {
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
