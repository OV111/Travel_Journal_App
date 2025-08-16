import React, { useState } from "react";
import { TripsContext } from "./TripsContext";

const TripsProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const addTrip = (trip) => {
    setTrips((prev) => [...prev, trip]);
  };
  const deleteTrip = () => {};

  return (
    <TripsContext.Provider value={{ trips, addTrip, deleteTrip }}>
      {children}
    </TripsContext.Provider>
  );
};
export default TripsProvider;
