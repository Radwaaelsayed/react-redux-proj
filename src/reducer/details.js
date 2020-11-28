const getDetails = (state=null , action) =>{
if(action.type === "GET_PLACES_DETAILS")
return action.payload;
return state
}