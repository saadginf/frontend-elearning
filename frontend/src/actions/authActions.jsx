import axios from 'axios'
import setAuthToken from '../utils/setAuthToken.js'
import jwt_decode from 'jwt-decode'
import * as action from './types'
  
    export const registerUser = (userData, history)=>dispatch =>{
            console.log(userData);
            console.log(history)
            dispatch({type:action.REG_START})
           axios
              .post('http://localhost:5000/api/users/register', userData)
               .then(res => {
                dispatch({type:action.REG_SUCCESS})
                history.push('/login')})
                .catch(err=> {
                    console.log(err.response.data)
                    dispatch({
                        type: action.REG_FAIL , 
                        payload: err.response.data
                    });
                }).finally(()=>{
                    dispatch({type:action.REG_END})
                })
            }
            
                
                //login user
                export const loginUser = (userData, history) => dispatch => {
                    dispatch({type:action.AUTH_START})
                    axios
                      .post('http://localhost:5000/api/users/login', userData)
                      .then(res => {
                  
                        // Save to localStorage 
                        const { token } = res.data;
                        // Set token to ls
                        localStorage.setItem('jwtToken', token);
                        // Set token to Auth headers
                        setAuthToken(token);
                       // Decode token to get user dataconst 
                        const decoded = jwt_decode(token);
                        //Set current user
                        dispatch(setCurrentUser(decoded));
                        history.push('/')
                      })
                      .catch(err =>{
                          console.log(err)
                        dispatch({
                            type: action.AUTH_FAIL , 
                            payload: err.response.data
                        })
                    })
                      .finally(()=>{
                        dispatch({type:action.AUTH_END})
                    });
                  };
//set logged in user
                  export const setCurrentUser = decoded => {
                    return {
                      type: action.AUTH_SUCCESS,
                      payload: decoded
                    };
                  };
// logout user
                  export const logoutUser=()=>dispatch=>{
                   dispatch({
                     type:action.LOGOUT_START
                   })
                    localStorage.removeItem('jwtToken');
                    setAuthToken(false);
                    dispatch({
                      type:action.LOGOUT_SUCCESS
                    });
                  }

