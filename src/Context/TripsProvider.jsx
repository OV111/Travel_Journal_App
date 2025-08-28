import React, { useEffect, useState, lazy, Suspense } from "react";
import { TripsContext } from "./TripsContext";
// const initialPosts = lazy(() => import("../data/posts"));
import { initialPosts } from "../data/posts";
const TripsProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [journalTrips, setJournalTrips] = useState(() => {
    const savedTrips = localStorage.getItem("journalTrips");
    return savedTrips ? JSON.parse(savedTrips) : [];
  });

  useEffect(() => {
    localStorage.setItem("journalTrips", JSON.stringify(journalTrips));
  }, [journalTrips]);

  useEffect(() => {
    fetch("https://68b09a013b8db1ae9c047952.mockapi.io/journals")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error of fetching journals", err));
  }, []);

  const addTrip = (trip) => {
    setJournalTrips((prev) => {
      if (!prev.find((t) => t.id === trip.id)) return [...prev, trip];
      return prev;
    });
    setPosts((prev) => {
      if (!prev.find((p) => p.id === trip.id)) return [...prev, trip];
      return prev;
    });
  };

  const deleteTrip = (tripId) => {
    setJournalTrips((prev) => {
      const updatedTrips = prev.filter((i) => i.id !== tripId);
      localStorage.setItem("journalTrips", JSON.stringify(updatedTrips));
      return updatedTrips;
    });
  };

  return (
    // <Suspense>
    <TripsContext.Provider value={{ posts, journalTrips, addTrip, deleteTrip }}>
      {children}
    </TripsContext.Provider>
    // </Suspense>
  );
};
export default TripsProvider;
