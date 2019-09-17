import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/movies" component={MovieList}  />
      <Route path="/movies/:id"  render={(props)=> <Movie addToSavedList={addToSavedList} {...props} /> }/>
    </div>
  );
};

export default App;
