import "./Post.css";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/globalContext";
import { addCommentCall, likePostCall } from "../../utils/apiCalls";
export default function Post({
  showComments,
  setShowComments,
  obj,
  editable = false,
  setComments,
  commentbtn = true,
}) {
  const [addComment, setAddComment] = useState(false);
  const [comment, setComment] = useState();
  const { user, posts, setPosts } = useContext(GlobalContext);

  //for giving color to like icon
  let clr = "#706556";
  for (let i of obj.likes) {
    if (i.userName === user.userName) {
      clr = "red";
    }
  }

  let addCommentClass;
  if (addComment) {
    addCommentClass = "show_addComment";
  } else {
    addCommentClass = "hide_addComment";
  }
  let action;
  if (editable) {
    action = (
      <IconButton
        aria-label="settings"
        onClick={() => {
          setShowComments(!showComments);
        }}
      >
        <MoreVertIcon />
      </IconButton>
    );
  }
  return (
    <div className="Post">
      <div className="Post_Head">
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: grey }}
              aria-label="caption"
              src={obj.avatar}
            />
          }
          action={action}
          title={obj.title}
          subheader={obj.time}
        />
      </div>
      <div className="Post_Content">
        <CardMedia component="img" image={obj.image} alt="Loading Failed" />
        <CardActions disableSpacing>
          <IconButton
            aria-label="like image"
            onClick={() => {
              likePostCall({ obj, user })
                .then((res) => {
                  console.log("likeUpdate Res", res);
                  setPosts(
                    posts.map((obj) => {
                      if (obj._id === res.data._id) {
                        return res.data;
                      } else {
                        return obj;
                      }
                    })
                  );
                })
                .catch((err) => {
                  console.log("likeUpdate Err", err);
                });
            }}
          >
            <FavoriteIcon style={{ color: clr }} />
          </IconButton>
          {obj.likes.length}

          <IconButton
            aria-label="comment"
            onClick={() => {
              setAddComment(!addComment);
            }}
          >
            <CommentIcon />
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </div>
      <div className="Post_Caption">
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {obj.caption
              ? obj.caption.split("\n").map(function (item, idx) {
                  return (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  );
                })
              : "Loading"}
          </Typography>
        </CardContent>
      </div>
      <div className="Post_Comments">
        <div className={`${addCommentClass}`}>
          <textarea
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            placeholder="Say Something About Post"
          ></textarea>
          <div>
            <button
              onClick={() => {
                addCommentCall({ obj, user, comment })
                  .then((res) => {
                    console.log("commentUpdate Res", res);
                    setComment("");
                    setPosts(
                      posts.map((obj) => {
                        if (obj._id === res.data._id) {
                          return res.data;
                        } else {
                          return obj;
                        }
                      })
                    );
                  })
                  .catch((err) => {
                    console.log("commentUpdate Err", err);
                  });
              }}
            >
              ~ ADD Comment
            </button>
          </div>
        </div>
        {commentbtn ? (
          <div>
            <button
              className="comment_Button"
              onClick={() => {
                setShowComments(!showComments);
                if (!showComments) {
                  setComments(obj.comments);
                } else {
                  setComments([]);
                }
              }}
            >
              {showComments ? "Hide comments" : "View all comments"}
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
