import {combineReducers} from 'redux';
const initialState = {
    place: []
  };


const place = (state = initialState , action) =>{
    switch (action.type){
        case "GET_PLACES" :{
            return {...state ,list:action.payload}
        }
        case "GET_PLACES_DETAILS" :{
            return {...state , details:action.payload}
        }
        case "GET_NEWS": {
            return {...state , news:action.payload}
        }
        default:
            return state
    }
   
  
}

export default combineReducers({
    place
})

