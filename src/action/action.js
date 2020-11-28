

import axios from 'axios';


export const getPlaceInfo = async () =>{
    let response = await axios.get('http://localhost:3000/placeInfo');
    let data = await response.data;
    return{
        type : "GET_PLACES",
        payload : data
    }
}

export const getPlaceDetails = async (id=0) =>{
    let response = await axios.get(`http://localhost:3000/placeInfo/${id}`);
    let data = await response.data;
    return{
        type : "GET_PLACES_DETAILS",
        payload : data
    }
}

export const getNews = async ()=>{
    let response = await axios.get('http://localhost:3000/news');
    let data = await response.data;
    return{
        type : "GET_NEWS",
        payload : data
    }
}