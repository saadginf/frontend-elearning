import * as actions from '../actions/types'
const initialState={
  
    loading:false,
    error:{},
    courses:{}
}

export default (state = initialState, action)=>{

      switch(action.type){
          
       
              
        case actions.FETCH_START:
            return {...state, loading:true}
        
        
        case actions.FETCH_END:
        return {...state, loading:false}
           
        case actions.FETCH_FAIL:
        return {...state, error:action.payload}
        case actions.FETCH_SUCCESS:
            return {...state, 
                courses:action.payload,
                error:false
            }
        
        
        
                default:
              return state;
      }      

}