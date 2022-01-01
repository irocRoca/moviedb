import axios from "axios";

export const getMovies = async (page = 1) => {
  try {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=11d05f8d97cd0a3dd2d4b69cdc854e0c&language=en-US&page=${page}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getSearch = async (query, page) => {
  try {
    const res = await axios(
      `https://api.themoviedb.org/3/search/multi?api_key=11d05f8d97cd0a3dd2d4b69cdc854e0c&language=en-US&query=${encodeURIComponent(
        query
      )}&page=${page}&include_adult=false`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
