import axios from "axios";

const directionsApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives:false,
        geometries:'geojson',
        overview:'simplified',
        steps:false,
        access_token:'pk.eyJ1IjoiaGVyMjJsayIsImEiOiJjbDJ3aGFiY2UwYXJnM2xrNHRpNGc5dDA4In0.FveI14nEcpEiITCU3gyyjw'
    }

})

export default directionsApi;