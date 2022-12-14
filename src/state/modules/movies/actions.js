import * as types from "./types";

const fetchInitRequest = (bool) => ({
  type: types.FETCH_INIT_REQUEST,
  payload: bool,
});
const fetchInitFailed = (err) => ({
  type: types.FETCH_INIT_FAILED,
  payload: err,
});

const fetchInitCompleted = (data) => ({
  type: types.FETCH_INIT_COMPLETED,
  payload: data,
});

const filterFavorites = (bool) => ({
  type: types.FILTER_FAVORITES,
  payload: bool,
});

const fetchMovieStart = () => ({
  type: types.FETCH_MOVIE_START,
});

const fetchMovieError = (err) => ({
  type: types.FETCH_MOVIE_FAIL,
  payload: err,
});

const fetchMovieCompleted = (data) => ({
  type: types.FETCH_MOVIE_COMPLETED,
  payload: data,
});

const setFilteredMovies = (data) => ({
  type: types.FILTER_MOVIES,
  payload: data,
});

const addMovieSuccess = (data) => ({
  type: types.ADD_MOVIE_SUCCESS,
  payload: data,
});

const updateMovieSuccess = (data) => ({
  type: types.UPDATE_MOVIE_SUCCESS,
  payload: data,
});

const deleteMovieSuccess = (id) => ({
  type: types.DELETE_MOVIE_SUCCESS,
  payload: id,
});

const toggleFavoriteAction = (data) => ({
  type: types.TOGGLE_FAVORITE_MOVIE,
  payload: data,
});
export {
  fetchInitRequest,
  fetchInitFailed,
  fetchInitCompleted,
  filterFavorites,
  fetchMovieError,
  fetchMovieStart,
  fetchMovieCompleted,
  setFilteredMovies,
  addMovieSuccess,
  updateMovieSuccess,
  deleteMovieSuccess,
  toggleFavoriteAction,
};
