const getNews = (state = null , action) =>{
    if(action.type === "GET_NEWS") return action.payload
    return state;
}