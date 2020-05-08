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
import Login from './containers/auth/login/Login'
import Register from './containers/auth/register/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
 ;
 return(

    <Router>
      <Layout>
      <Switch>
        <Route path="/courses" exact component={Courses}/>
        <Route path="/blog" exact component={Blog}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/" exact component={Home}/>
        <Redirect to="/"/>
      </Switch>
      </Layout>
  </Router>
 
  );
}

export default App;
