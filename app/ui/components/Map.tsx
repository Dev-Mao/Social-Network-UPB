"use client";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries: any[] = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY || '',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps ...</div>;
  }
  return (
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={{ lat: 6.24246883392334, lng: -75.58934117413652 }}
          zoom={16}
        >
          <Marker
            position={{ lat: 6.24246883392334, lng: -75.58934117413652 }}
          />
        </GoogleMap>
      </div>
  );
}

export default App;
