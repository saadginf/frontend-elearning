import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './containers/home/Home'
import Courses from './containers/courses/Courses'
import Blog from './containers/blog/Blog'
import Layout from './layout/Layout'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
<Layout>
    <Router>
      <Switch>
        <Route path="/courses" exact>
          <Courses />
        </Route>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Redirect to="/"/>
      </Switch>
  </Router>
  </Layout>
  );
}

export default App;
