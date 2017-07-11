import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import info from './routes/Information';
export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={info} />
      <Route path="/device" component={IndexPage} />
    </Router>
  );
};
