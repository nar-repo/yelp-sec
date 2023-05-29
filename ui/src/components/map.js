/* global google */ 
import { GoogleMap, MarkerF, useLoadScript, InfoWindowF} from "@react-google-maps/api";
import { useState } from "react";
import "./Map.css";




const Display = ({marker}) => {

  const [mapFocus, setMapFocus] = useState();
  const [mapToggle, setMapToggle] = useState(false);
  

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBtD_LhVrr4tXcHyio8U4-kF7aE2ozMy3M",
  });
  

  const onLoadMap = (map) => {
      setMapFocus(map);
      const bounds = new google.maps.LatLngBounds();
      marker.map((item) => bounds.extend({lat: item.coordinates.latitude, lng: item.coordinates.longitude}));
      map.fitBounds(bounds);
  };

  const onMarkerClick = (item) => {
      mapFocus.panTo({lat: item.coordinates.latitude, lng: item.coordinates.longitude});
      setMapToggle(true);
  };


  return (
    <div className="Map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="container"
          zoom={10}
          onLoad={onLoadMap}
          onClick={()=> setMapToggle(false)}
        >
        
        {marker.map((item) => 
          <MarkerF position={{lat: item.coordinates.latitude, lng:item.coordinates.longitude}} 
          onClick={()=>{onMarkerClick(item)}}>

                {mapToggle &&(
                  <InfoWindowF
                    onCloseClick={() => {
                      setMapToggle(false);
                    }}>
                  <p><a target='_blank' href={item.url}>{item.name}</a></p>
                  </InfoWindowF>
              )}
                
          </MarkerF> 
        )}
        </GoogleMap>
      )}
    </div>
    
  );
};

export default Display;