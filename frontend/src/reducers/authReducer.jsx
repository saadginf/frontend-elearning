import * as actions from '../actions/types'
const initialState={
    isAuth : false,
    loading:false,
    error:{},
    user:{}
}

export default (state = initialState, action)=>{

      switch(action.type){
          
        case actions.REG_START:
            return {...state, loading:true}
        
        
        case actions.REG_END:
        return {...state, loading:false}
           
        case actions.REG_FAIL:
        return {...state, error:action.payload}
        case actions.REG_SUCCESS:
            return {...state, error:false}
              
        case actions.AUTH_START:
            return {...state, loading:true}
        
        
        case actions.AUTH_END:
        return {...state, loading:false}
           
        case actions.AUTH_FAIL:
        return {...state, error:action.payload}
        case actions.AUTH_SUCCESS:
            return {...state, 
                isAuth:true,
                user:action.payload,
                error:false}
        case actions.LOGOUT_START:
                    return {...state, 
                    loading:true    
                    }
    case actions.LOGOUT_SUCCESS:
         return {...state, 
                                isAuth:false,
                                user:{},
                                error:{},
                                loading:false
                            }
        
        
        
                default:
              return state;
      }      

}