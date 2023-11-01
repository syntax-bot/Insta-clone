import { useState } from "react";

export default function usetoken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const token = JSON.parse(tokenString);
    return token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };
  return {
    setToken: saveToken,
    token,
  };
}
