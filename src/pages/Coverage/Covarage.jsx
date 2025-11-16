import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from "react-router";
const Covarage = () => {
  const position = [23.6850, 90.3563];
  const serviceData=useLoaderData();
  console.log(serviceData)
  return (
    <div>
      <h2 className="text-xl font-semibold ">
        WE are available in 64 districts
      </h2>

      <div></div>

      <div className="border w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceData.map((center) => (
            <Marker position={[center.latitude,center.longitude]}>
              <Popup>
                <strong>{center.district} <br />
                      service Area :{center.covered_area.join(', ')}
                     </strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Covarage;
