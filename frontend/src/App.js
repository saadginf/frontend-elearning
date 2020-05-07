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
const App = () => {
 ;
 return(

    <Router>
      <Layout>
      <Switch>
        <Route path="/courses" exact component={Courses}/>
        <Route path="/blog" exact component={Blog}/>
        <Route path="/" exact component={Home}/>
        <Redirect to="/"/>
      </Switch>
      </Layout>
  </Router>
 
  );
}

export default App;
