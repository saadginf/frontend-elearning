//getCourses

import Axios from "axios"

import * as action from './types'
export const getAllCourses = ()=> dispatch  =>{
    dispatch({
        type: action.FETCH_START
    })
    Axios.get('http://localhost:5000/api/courses')
    .then(res=>{
       console.log(res.data) 
       dispatch({
        type: action.FETCH_SUCCESS,
        payload: res.data
    })
    })
    .catch(err=>{
        console.log(err.response.data)
        dispatch({
            type: action.FETCH_FAIL,
            payload: err.response.data
        })
    }).finally(()=>
        dispatch({
            type: action.FETCH_END,
            
        })
    )
    
}

