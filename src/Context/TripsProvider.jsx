import React, { useEffect, useState } from "react";
import { TripsContext } from "./TripsContext";
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
      localStorage.setItem("journalTrips",JSON.stringify(updatedTrips))
      return updatedTrips;
    })
  };

  return (
    <TripsContext.Provider value={{ posts, journalTrips, addTrip, deleteTrip }}>
      {children}
    </TripsContext.Provider>
  );
};
export default TripsProvider;

// import React, { useEffect, useState } from "react";
// import { TripsContext } from "./TripsContext";
// import { initialPosts } from "../data/posts";

// const TripsProvider = ({ children }) => {
//   const [posts, setPosts] = useState(initialPosts);
//   const [journalTrips, setJournalTrips] = useState(() => {
//     const savedTrips = localStorage.getItem("journalTrips");
//     return savedTrips ? JSON.parse(savedTrips) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("journalTrips", JSON.stringify(journalTrips));
//   }, [journalTrips]);

//   const addTripToJournal = (trip) => {
//     setJournalTrips((prev) => {
//       if (!prev.find((t) => t.id === trip.id)) return [...prev, trip];
//       return prev;
//     });
//     setPosts((prev) => {
//       if (!prev.find((p) => p.id === trip.id)) return [...prev, trip];
//       return prev;
//     });
//   };

//   const deleteTripFromJournal = () => {};

//   return (
//     <TripsContext.Provider
//       value={{ posts, journalTrips, addTripToJournal, deleteTripFromJournal }}
//     >
//       {children}
//     </TripsContext.Provider>
//   );
// };

// export default TripsProvider;
