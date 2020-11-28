const getDataDetails = (state=null , action) =>{
    if(action.type === "GET_PLACES" )
      return action.payload;
    return state;  
}