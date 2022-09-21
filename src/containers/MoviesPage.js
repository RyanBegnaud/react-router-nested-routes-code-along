// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MovieShow from '../components/MovieShow';
import MoviesList from '../components/MoviesList';''

const MoviesPage = ({ match, movies }) => (
  <div>
      <Route
      path={`${match.url}/:movieId`}
      render={(routerProps) => <MovieShow {...routerProps} movies={movies} />}
      />
  </div>
)

export default MoviesPage
