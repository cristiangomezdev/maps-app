
import {useContext,useReducer} from 'react';
import { MapContext, PlacesContext } from '../context';
import { MapState } from '../context/map/MapProvider';
import { mapReducer } from '../context/map/mapReducer';


export const BtnClean = () => {
    const{map} = useContext(MapContext)

    const onClick = () =>{
        //state.map?.removeLayer('RouteString')
        if(map?.getLayer('RouteString')){
        map?.removeLayer('RouteString');
        map?.removeSource('RouteString');
        }
    }

  return (
    <div className="btn btn-danger btn-borrar" 
        onClick={onClick}
>
        Borrar ruta
    </div>
  )
}
