import { useState } from "react";
import "./Search.css";
import { placeholders } from "../../constants/searchconstants";
import SearchResult from "./SearchResult";
export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="Search">
      <SearchArea searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="searchResult">
        <SearchResult searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </div>
  );
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
          setSearchValue((e.target.value).trimStart());
        }}
        placeholder={placeholders[pointer]}
      />
      <button
        onClick={() => {
        }}
      >
        Search
      </button>
    </div>
  );
}
