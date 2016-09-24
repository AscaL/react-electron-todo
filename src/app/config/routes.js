import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from '../components/Main';
import MainHeaderContainer from '../containers/MainHeaderContainer';

export const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={MainHeaderContainer}/>
      <Route path="matches" component={MainHeaderContainer} />
      <Route path="hello" component={Main} />
    </Route>
  </Router>
);

