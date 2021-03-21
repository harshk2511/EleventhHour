import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import MainNavigation from './Shared/Components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
    </Router>
  )
}

export default App
