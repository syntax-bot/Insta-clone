import {  useState } from "react";
import "./Search.css";
import { placeholders } from "../../constants/searchconstants";
import SearchResult from "./SearchResult";
import SearchProfile from "./SearchProfile";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [checkProfile, setCheckProfile] = useState(false);

  

  let content;
  if (!checkProfile) {
    content = (
      <div className="Search">
        <SearchArea searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="searchResult">
          <SearchResult
            setCheckProfile={setCheckProfile}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
    );
  } else {
    content = (
      <SearchProfile user={checkProfile} setClearCheck={setCheckProfile}/>
    );
  }
  return content;
}

function SearchArea({ searchValue, setSearchValue }) {
  const [pointer, setPointer] = useState(0);
  setTimeout(() => {
    if (pointer + 1 == placeholders.length) {
      setPointer(0);
    } else {
      setPointer(pointer + 1);
    }
  }, 1000);

  return (
    <div className="searchArea">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value.trimStart());
        }}
        placeholder={placeholders[pointer]}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSearchValue('')
        }}
      >
        Clear
      </button>
    </div>
  );
}
