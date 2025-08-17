import React, { useEffect, useState } from "react";
import { TripsContext } from "./TripsContext";
import { postsObj as initialPosts } from "../data/posts";
const TripsProvider = ({ children }) => {
  const [posts,setPosts] = useState(initialPosts)
  const [trips, setTrips] = useState(() => {
    const savedTrips = localStorage.getItem("trips");
    return savedTrips ? JSON.parse(savedTrips) : [];
  });

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  const addTrip = (trip) => {
    setTrips((prev) => {
      if (!prev.find((t) => t.id === trip.id)) return [...prev, trip];
      return prev;
    });

    setPosts((prev) => {
      if (!prev.find((p) => p.id === trip.id)) return [...prev, trip];
      return prev;
    });
  };

  const deleteTrip = () => {};

  return (
    <TripsContext.Provider value={{posts, trips, addTrip, deleteTrip }}>
      {children}
    </TripsContext.Provider>
  );
};
export default TripsProvider;
