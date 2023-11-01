import "./Home.css";
import Post from "./Post";
import Stories from "./Stories";
import { useContext, useEffect, useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { GlobalContext } from "../../context/globalContext";
import { getPostsCall, getStoriesCall } from "../../utils/apiCalls";
export default function Home() {
  const [showComments, setShowComments] = useState(false);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const { token, user, setUser, setToken } = useContext(GlobalContext);

  const [comments, setComments] = useState([]);

  const scrollTop_ref = useRef(0);

  useEffect(() => {
    getStoriesCall({ token })
      .then((res) => {
        console.log("getStory Res", res);
        setStories(res.data);
      })
      .catch((err) => {
        console.log("getStory Err", err);
      });
  }, [token]);

  useEffect(() => {
    getPostsCall({ token, len: posts.length })
      .then((res) => {
        console.log("getPosts Res", res);
        setPosts([...posts, ...res.data]);
      })
      .catch((err) => {
        console.log("getPosts Err", err);
      });
  }, [token]);

  let showCommentClass;
  if (!showComments) {
    showCommentClass = "hide_Comments";
  } else {
    showCommentClass = undefined;
  }

  function delayScroll(method, delay, e, scrollTop_ref) {
    clearTimeout(method._tId);
    method._tId = setTimeout(function () {
      method(e, scrollTop_ref);
    }, delay);
  }
  function handleScroll(e, scrollTop_ref) {
    let ele = e.target;

    if (ele.scrollTop >= scrollTop_ref.current) {
      getPostsCall({ token, len: posts.length })
        .then((res) => {
          console.log("getPost Res", res);
          setPosts([...posts, ...res.data]);
        })
        .catch((err) => {
          console.log("getPost Err", err);
        });
      // will not make api call, until user scrolls beyond deepsest reached scroll
      scrollTop_ref.current = ele.scrollTop;
    }
  }

  return (
    <GlobalContext.Provider
      value={{ posts, setPosts, token, user, setUser, setToken }}
    >
      <div
        className="Home"
        onScroll={(e) => {
          delayScroll(handleScroll, 100, e, scrollTop_ref);
        }}
      >
        <div className={`${showCommentClass} Show_Comments`}>
          <div>
            {comments.map((obj, index) => {
              return (
                <div key={index}>
                  <strong>{obj.userName}:</strong>
                  {obj.comment}
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${showCommentClass} hide_comments_btn`}>
          <IconButton
            aria-label="Clear"
            onClick={() => {
              setShowComments(!showComments);
            }}
          >
            <ClearIcon fontSize="large" style={{ color: "black" }} />
          </IconButton>
        </div>
        <Stories stories={stories} />
        {posts.map((obj) => {
          return (
            <Post
              key={obj._id}
              obj={obj}
              showComments={showComments}
              setShowComments={setShowComments}
              setComments={setComments}
            />
          );
        })}
      </div>
    </GlobalContext.Provider>
  );
}
