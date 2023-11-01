import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import AddPost from "./components/AddPost/AddPost";
import Reels from "./components/Reels/Reels";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import { GlobalContext } from "./context/globalContext";
import useToken from "./utils/useToken";
import { useEffect, useState } from "react";
import {getUserMain } from "./utils/apiCalls";
function App() {
  const { token, setToken } = useToken();
  const [data, setData] = useState({});

  useEffect(() => {
    if (token) {
      getUserMain({token})
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {});
    }
  }, [token]);
  if (!token) {
    return (
      <Routes>
        <Route path="/" element={<SignUp setToken={setToken} />} />
        <Route path="SignIn" element={<SignIn setToken={setToken} />} />
        <Route path="*" element={<SignIn setToken={setToken} />} />
      </Routes>
    );
  } else {
    return (
      <div className="app">
        <GlobalContext.Provider
          value={{ user: data, setUser: setData, token, setToken }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="addpost" element={<AddPost />} />
            <Route path="reels" element={<Reels />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </GlobalContext.Provider>
      </div>
    );
  }
}
export default App;
