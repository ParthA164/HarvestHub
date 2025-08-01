import React, { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "./../../../node_modules/leaflet-geosearch/dist/geosearch.css";
import L from "leaflet";
import pin from './../../assets/pin.png'

function LeafletMap({
  width = "w-screen",
  height = "h-screen",
  showSearchBox = true,
  latitude,
  longitude,
  setLatitude,
  setLongitude,
  zoom = 5
}) {
  // const [position, setPosition] = useState({
  //   latitude: 0,
  //   longitude: 0,
  // });

  // Create GeoSearchControl outside the component
  const searchControl = new GeoSearchControl({
    provider: new OpenStreetMapProvider(),
    style: "bar",
    notFoundMessage: "Sorry, that address could not be found.",
  });

  function AddSearchControlToMap() {
    const map = useMap();
    
    useEffect(() => {
      map.addControl(searchControl);
      
      // Handle search results
      map.on('geosearch/showlocation', function(result) {
        console.log('Search result:', result.location);
        const { x: lng, y: lat } = result.location;
        console.log(`Search Location: Latitude ${lat}, Longitude ${lng}`);
        setLatitude && setLatitude(lat);
        setLongitude && setLongitude(lng);
      });
      
      return () => {
        map.off('geosearch/showlocation');
      };
    }, [map]);

    return null;
  }

  function LocationPicker() {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        console.log(`Selected Location: Latitude ${lat}, Longitude ${lng}`);
        setLatitude(lat);
        setLongitude(lng);
      },
    });

    return null;
  }

  const searchBox = useMemo(() => {
    return <AddSearchControlToMap />;
  }, []);

  return (
    <MapContainer
      className={`${width} ${height}`}
      center={[latitude, longitude]}
      zoomAnimation={true}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      {showSearchBox && searchBox}
      {showSearchBox && <LocationPicker />}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[latitude, longitude]}
        icon={
          new L.Icon({
            iconUrl: pin,
            iconSize: [20, 30],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          })
        }
      ></Marker>
    </MapContainer>
  );
}

export default LeafletMap;
