import axios from "axios";

const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit:5,
        language:'es',
        access_token:'pk.eyJ1IjoiaGVyMjJsayIsImEiOiJjbDJ3aGFiY2UwYXJnM2xrNHRpNGc5dDA4In0.FveI14nEcpEiITCU3gyyjw'
    }

})

export default searchApi;