import React, { useState } from "react";
import "./SearchResult.css";
import Avatar from "@mui/material/Avatar";
const recenthistory = [
  { userName: "syntax-Bot", ActualName: "harsh Gupta" },
  { userName: "saktiman", ActualName: "lora" },
  { userName: "spiderman", ActualName: "peter" },
  { userName: "kallu", ActualName: "aditya singh" },
  { userName: "tamatar", ActualName: "abhishek" },
];

export default function SearchResult({ searchValue, setSearchValue }) {
  const [history, setHistory] = useState(recenthistory);
  const [searchResult, setSearchresult] = useState(recenthistory);
  if (searchValue === "") {
    return (
      <>
        <div className="searchResult_Top">
          <p>Recent Search History</p>
          <button
            onClick={() => {
              setHistory([]);
            }}
          >
            Clear
          </button>
        </div>
        <div className="searchResult_Bottom">
          {history.map((obj) => {
            return (
              <SearchHistoryCard
                obj={obj}
                key={obj.userName}
                history={history}
                setHistory={setHistory}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="searchResult_Top">
          <p>Search Results</p>
          <button
            onClick={() => {
              setSearchValue("");
            }}
          >
            Clear
          </button>
        </div>
        <div className="searchResult_Bottom">
          {history.map((obj) => {
            return <SearchResultCard obj={obj} key={obj.userName} />;
          })}
        </div>
      </>
    );
  }
}

function SearchHistoryCard({ obj, history, setHistory }) {
  return (
    <div className="SearchResultCard">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
      <div>
        {obj.userName}
        <br />
        <span style={{ color: "gray" }}>{obj.ActualName}</span>
      </div>
      <button
        onClick={() => {
          setHistory(
            history.filter((e) => {
              if (e.userName === obj.userName) {
                return 0;
              }
              return 1;
            })
          );
        }}
      >
        X
      </button>
    </div>
  );
}

function SearchResultCard({ obj }) {
  return (
    <div className="SearchResultCard">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 50, height: 50 }}
      />
      <div>
        {obj.userName}
        <br />
        <span style={{ color: "gray" }}>{obj.ActualName}</span>
      </div>
    </div>
  );
}
