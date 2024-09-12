import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
//importing the paths 
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div> {/*Replace this Div with your Routes */}
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route 
          exact path="/movies/:id"
          render={props => (<Movie {...props} addToSavedList={addToSavedList} />)}
          />
      </div>
    </div>
  );
};

export default App;
