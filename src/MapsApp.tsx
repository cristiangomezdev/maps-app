import { PlacesProviders } from './places/PlacesProviders';
import { HomeScreen } from './screens';

import './styles.css';
import { MapProvider } from './context/map/MapProvider';

export const MapsApp = () => {
  return (
    <PlacesProviders>
      <MapProvider>
        <HomeScreen/>
      </MapProvider>
    </PlacesProviders>
  )
}
