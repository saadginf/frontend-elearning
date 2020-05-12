import React from 'react';
import './App.css';
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser, logoutUser} from './actions/authActions'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Provider} from 'react-redux'
import Home from './containers/home/Home'
import Courses from './containers/courses/Courses'
import Blog from './containers/blog/Blog'
import Layout from './layout/Layout'
import Login from './containers/auth/login/Login'
import Register from './containers/auth/register/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store'
import Profile from './containers/profile/Profile';




//check for token
if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  const decode = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decode))
  const currentTime = Date.now()/1000;

  
  
  
  if(decode.exp < currentTime){
    store.dispatch(logoutUser())
  }

}

const App = () => {
  console.log(store.getState().auth.loading)
  let links;
  if(localStorage.jwtToken){
    links = (
      <Switch>
          <Route path="/courses" exact component={Courses}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/" exact component={Home}/>
          <Redirect to="/"/>
        </Switch>
    )
  
  }else{
    links = (
      <Switch>
          <Route path="/courses" exact component={Courses}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/" exact component={Home}/>
          <Route path="/profile" exact component={Profile}/>
          <Redirect to="/login"/>
        </Switch>
    )
    
  }

 return(
  <Provider store={store}>
    <Router>
      <Layout>
     {links}
      </Layout>
  </Router>
  </Provider>
 
  );
}

export default App;
