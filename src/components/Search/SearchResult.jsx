import React, { useContext, useState, useEffect } from "react";
import "./SearchResult.css";
import Avatar from "@mui/material/Avatar";
import { GlobalContext } from "../../context/globalContext";
import axios from "axios";
import { getUserCall, recentSearchAddcall, recentSearchRemovecall, searchUsercall } from "../../utils/apiCalls";

export default function SearchResult({
  setCheckProfile,
  searchValue,
  setSearchValue,
}) {
  const { user, setUser } = useContext(GlobalContext);
  const [searchResult, setSearchresult] = useState([]);
  // const history = user.RecentSearch ? user.RecentSearch : [];
  //api call

  useEffect(() => {
    if (searchValue) {
      searchUsercall({ user, searchValue })
        .then((res) => {
          setSearchresult(res.data);
        })
        .catch((err) => {});
    }
  }, [searchValue]);

  if (searchValue === "") {
    return (
      <>
        <div className="searchResult_Top">
          <p>Recent Search History</p>
          <button onClick={() => {}}>Clear</button>
        </div>
        <div className="searchResult_Bottom">
          {user.RecentSearch ? (
            user.RecentSearch.map((obj) => {
              return (
                <SearchHistoryCard
                  obj={obj}
                  key={`${obj._id}history`}
                  setCheckProfile={setCheckProfile}
                  user={user}
                  setUser={setUser}
                />
              );
            })
          ) : (
            <></>
          )}
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
          {searchResult.map((obj) => {
            return (
              <SearchResultCard
                obj={obj}
                key={obj._id}
                setCheckProfile={setCheckProfile}
                user={user}
                setUser={setUser}
              />
            );
          })}
        </div>
      </>
    );
  }
}

function SearchHistoryCard({ obj, setCheckProfile, user, setUser }) {
  return (
    <div
      className="SearchResultCard"
      onClick={(e) => {
        e.stopPropagation();
        if (obj._id) {
          getUserCall({obj,user})
            .then((res) => {
              console.log("getCheckProfile res", res);
              setCheckProfile(res.data);
            })
            .catch((err) => {
              console.log("getCheckProfile err", err);
            });
        }
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src={obj.Avatar}
        sx={{ width: 50, height: 50 }}
      />
      <div>
        {obj.userName}
        <br />
        <span style={{ color: "gray" }}>{obj.ActualName}</span>
      </div>
      <button
        onClick={(event) => {
          event.stopPropagation();
          recentSearchRemovecall({user,obj})
            .then((res) => {
              console.log("RecentSearchRemove res", res);
              setUser(res.data);
            })
            .catch((err) => {
              console.log("RecentSearchRemove Err", err);
            });
        }}
      >
        X
      </button>
    </div>
  );
}
function SearchResultCard({ obj, setCheckProfile, user, setUser }) {
  return (
    <div
      className="SearchResultCard"
      onClick={() => {
        getUserCall({obj,user})
          .then((res) => {
            console.log("getCheckProfile res", res);
            setCheckProfile(res.data);
          })
          .catch((err) => {
            console.log("getCheckProfile err", err);
          });

        if (
          !user.RecentSearch.find((his) => {
            return his._id ? his._id : his === obj._id;
          })
        ) {
          recentSearchAddcall({user,obj})
            .then((res) => {
              console.log("RecentSearchAdd res", res);
              setUser(res.data);
            })
            .catch((err) => {
              console.log("RecentSearchAdd Err", err);
            });
        }
      }}
    >
      <Avatar alt={"O"} src={obj.Avatar} sx={{ width: 50, height: 50 }} />
      <div>
        {obj.userName}
        <br />
        <span style={{ color: "gray" }}>{obj.ActualName}</span>
      </div>
    </div>
  );
}
