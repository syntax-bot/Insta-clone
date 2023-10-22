import "./ProfilePost.css";
import React from "react";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";

export default function ProfilePost({ editing, setEditing }) {
  const [addComment, setAddComment] = useState(false);
  let addCommentClass;
  if (addComment) {
    addCommentClass = "show_addComment";
  } else {
    addCommentClass = "hide_addComment";
  }

  return (
    <div className="Profile_Post">
      <div className="Post_Head">
        <CardHeader
          action={
            <IconButton
              aria-label="settings"
              onClick={() => {
                setEditing(!editing);
              }}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
      </div>
      <div className="Post_Content">
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton
            aria-label="add to favorites"
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
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </div>
      <div className="Post_Comments">
        <div className={`${addCommentClass}`}>
          <textarea name="" id=""></textarea>
          <div>
            <button>~ ADD Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
