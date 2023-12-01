import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODhkMWM2MzQ1MTc0NzRjMmViNGE4YzhlZTJjY2ZmYiIsInN1YiI6IjY1Njg2NGMzMTI3Nzc4MDlkZDZmYjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fqoBSjCkxTCaoVk0lwuGGF7vNT0gq50cF_RSE5SipkI";

const headers = {
  Authorization: `Bearer ${KEY}`,
};

export const fetchDataFromAPI = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
