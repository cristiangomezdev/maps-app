import { PlacesContext } from "./PlacesContext";
import { useReducer, useEffect } from 'react';
import { placesReducer } from "./PlacesReducer";
import { getUserLocation } from '../helpers/getUserLocation';
import searchApi from '../apis/searchApi';
import { Feature, PlacesResponse } from "../interfaces/places";
export interface PlacesState {
    isLoading: boolean,
    userLocation?: [number, number ];
    isLoadingPlaces:boolean;
    places:Feature[];
}

const INITIAL_STATE: PlacesState = {
    isLoading:true,
    userLocation:undefined,
    isLoadingPlaces:false,
    places:[]
}
interface Props {
    children :JSX.Element | JSX.Element[]
}

export const PlacesProviders = ({children}:Props) => {
    const [state,dispatch] = useReducer(placesReducer,INITIAL_STATE);
    useEffect(() => {
        getUserLocation()
            .then(lngLat => dispatch({type:'setUserLocation',payload:lngLat}))
    }, [])
    
    const searchPlacesByTerm = async(query:string):Promise<Feature[]> =>{
        if(query.length === 0) {
            dispatch({type:'setPlaces',payload:[]})
            return[];
        };
        if(!state.userLocation) throw new Error('No hay ubicacion de usuario')

        dispatch({type:'setLoadingPlaces'})

        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`,{
            params:{
                proximity:state.userLocation.join(',')
            }
        })
        console.log(resp.data)
        dispatch({type:'setPlaces',payload:resp.data.features})
        return resp.data.features;
    }
    return (
    <PlacesContext.Provider value={{
        ...state,
        searchPlacesByTerm

    }}>{children}</PlacesContext.Provider>
  )
}
