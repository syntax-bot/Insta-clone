import axios from "axios";

axios.defaults.baseURL = " http://localhost:8080";

export function signInCall({ data }) {
  return axios({
    method: "post",
    url: "/auth/signIn",
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export function signUpCall({ data }) {
  return axios({
    method: "post",
    url: "/auth/signUp",
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export function addPostCall({ formData, user }) {
  return axios({
    method: "post",
    url: `/postsData`,
    data: formData,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
}

export function updateStoryCall({ story, user }) {
  return axios({
    method: "patch",
    url: `/usersData/addStory/${user._id}`,
    data: { story: story },
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
}

export function getStoriesCall({ token }) {
  return axios({
    method: "get",
    url: `/usersData/stories`,
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
}

export function getPostsCall({ token, len }) {
  return axios({
    method: "get",
    url: `/postsData?skip=${len / 2}&limit=2`,
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
}

export function likePostCall({ obj, user }) {
  return axios({
    method: "patch",
    url: `/postsData/like/${obj._id}`,
    data: { userName: user.userName },
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
}

export function addCommentCall({ obj, user, comment }) {
  return axios({
    method: "patch",
    url: `/postsData/addComment/${obj._id}`,
    data: { userName: user.userName, comment: comment },
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
}

// export function addCommentCall({ obj, user, comment }) {
//   return axios({
//     method: "patch",
//     url: `/postsData/addComment/${obj._id}`,
//     data: { userName: user.userName, comment: comment },
//     headers: {
//       Authorization: `Bearer ${user.token}`,
//     },
//   });
// }

export function addAvatarCloudinary({ formData }) {
  return axios({
    method: "post",
    url: `https://api.cloudinary.com/v1_1/dkwgfluqp/image/upload`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function updateAvatarCall({ user, res }) {
  return axios({
    method: "patch",
    url: `/usersData/updateAvatar/${user._id}`,
    data: { avatar: res.data.url },
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
}

export function updateBioCall({ user, bioEdit }) {
  return axios({
    method: "patch",
    url: `/usersData/updateBio/${user._id}`,
    data: { bio: bioEdit },
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
}

export function deleteUserCall({ user }) {
  return axios({
    method: "delete",
    url: `/usersData/${user._id}`,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${user.token}`,
    },
  });
}

export function updateCaptionCall({ user, caption, obj }) {
  return axios({
    method: "patch",
    url: `/postsData/caption/${obj._id}`,
    data: { caption: caption },
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
}

export function searchUsercall({ user, searchValue }) {
  return axios({
    method: "get",
    url: `/usersData/searchUsers/${searchValue}`,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
}

export function getUserCall({ obj, user }) {
  return axios({
    method: "get",
    url: `/usersData/${obj._id}`,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
}

export function recentSearchRemovecall({ user, obj }) {
  return axios({
    method: "patch",
    url: `/usersData/RecentSearchRemove/${user._id}`,
    data: { _id: obj._id },
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
}

export function recentSearchAddcall({ user, obj }) {
  return axios({
    method: "patch",
    url: `/usersData/RecentSearchAdd/${user._id}`,
    data: { _id: obj._id },
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
}

export function getUserMain({ token }) {
  return axios({
    method: "get",
    url: `/usersData/${token._id}`,
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
}
