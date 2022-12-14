import Layout from "layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDataOperation } from "state/modules/movies/operations";
import { movieSuccessSelector } from "state/modules/movies/selectors";
import { movieDataSelector } from "state/modules/movies/selectors";
import Movie from "views/details";

const MovieDetailsContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => movieDataSelector(state));
  const isSuccess = useSelector((state) => movieSuccessSelector(state));
  useEffect(() => {
    dispatch(fetchMovieDataOperation(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <Movie isSuccess={isSuccess} details={movie} />
    </Layout>
  );
};
export default MovieDetailsContainer;
