import "./Stories.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { useRef, useState } from "react";

export default function Stories({ stories }) {
  const [storyClass, setStoryClass] = useState("story_hide");
  const [storyData, setStoryData] = useState({
    user: "Loading",
    story: "Loading",
  });
  let story_timeout_id = useRef(undefined);
  return (
    <div className="Stories">
      <h4 className={`${storyClass}`}>
        {storyData.userName}
      </h4>
      <h5 className={`${storyClass}`}></h5>
      <div className={`${storyClass} story`}>
        <div id="storytext">
          {storyData.story
            ? storyData.story.split("\n").map(function (item, idx) {
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
      <div className={`${storyClass} clear_btn`}>
        <IconButton
          aria-label="Clear"
          onClick={() => {
            clearTimeout(story_timeout_id.current);
            setStoryClass("story_hide");
          }}
        >
          <ClearIcon style={{ color: "black" }} fontSize="large" />
        </IconButton>
      </div>
      <Stack direction="row" spacing={2} className="Stories_stack">
        {stories.map((obj) => {
          return (
            <div
              key={obj._id}
              onClick={() => {
                setStoryClass(undefined);
                setStoryData(obj);
                story_timeout_id.current = setTimeout(() => {
                  setStoryClass("story_hide");
                }, 10000);
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={obj.avatar}
                sx={{ width: "70px", height: "70px" }}
                style={{ marginBottom: "10px" }}
              />
              {obj.userName}
            </div>
          );
        })}
      </Stack>
    </div>
  );
}
