import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import carIconUrl from "/car-icon.png";
import "leaflet/dist/leaflet.css";
import "./styles.css";
import data from "./data/dummyLocations.json";

const carIcon = new L.Icon({
  iconUrl: carIconUrl,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function App() {
  const vehiclePath = data.vehicles[0].path;
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const intervalRef = useRef(null);

  const currentPosition = vehiclePath[index];
  const traveledPath = vehiclePath.slice(0, index + 1);

  const getDistance = (a, b) => {
    const R = 6371e3;
    const φ1 = (a.lat * Math.PI) / 180;
    const φ2 = (b.lat * Math.PI) / 180;
    const Δφ = ((b.lat - a.lat) * Math.PI) / 180;
    const Δλ = ((b.lng - a.lng) * Math.PI) / 180;
    const x =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) *
        Math.cos(φ2) *
        Math.sin(Δλ / 2) *
        Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
    return R * c;
  };

  const start = () => {
    if (index >= vehiclePath.length - 1) return;
    setIsMoving(true);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => {
        if (prev < vehiclePath.length - 1) {
          const distance = getDistance(
            vehiclePath[prev],
            vehiclePath[prev + 1]
          );
          setSpeed((distance / 1).toFixed(2));
          return prev + 1;
        } else {
          clearInterval(intervalRef.current);
          setIsMoving(false);
          return prev;
        }
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsMoving(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIndex(0);
    setSpeed(0);
    setIsMoving(false);
  };

  const progressPercent = ((index + 1) / vehiclePath.length) * 100;

  return (
    <>
      <h1>Vehicle Tracker Map</h1>
      <div className="controls">
        <button onClick={start} disabled={isMoving}>
          Start
        </button>
        <button onClick={stop} disabled={!isMoving}>
          Stop
        </button>
        <button onClick={reset}>Reset</button>
        <p>Speed: {speed} m/s</p>
        <div className="progress-bar">
          <div id="progress" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>
      <MapContainer center={currentPosition} zoom={16} id="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={traveledPath} color="blue" />
        <Marker position={currentPosition} icon={carIcon} />
      </MapContainer>
    </>
  );
}

export default App;
