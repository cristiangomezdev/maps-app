import { MapView, SearchBar } from "../components"
import { BtnClean } from "../components/BtnClean";
import { BtnMyLocation } from '../components/BtnMyLocation';
import { Copyright } from "../components/Copyright";
import { ReactLogo } from "../components/ReactLogo";



export const HomeScreen = () => {
  return (
    <>
        <MapView/>
        <BtnMyLocation/>
        <BtnClean/>
        <Copyright/>
        <ReactLogo/>
        <SearchBar />
    </>
  )
}
