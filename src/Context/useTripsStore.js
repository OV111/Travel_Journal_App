import React from "react";
import { create } from "zustand";
import tripService from "../service/tripsService";

const useTripsStore = create((set, get) => ({
  posts: [],
  selectedPost: null,
  journal: JSON.parse(localStorage.getItem("journalTrips")) || [],

  fetchPosts: async () => {
    try {
      let data = await tripService.getTrips();
      set({ posts: data });
    } catch (err) {
      console.error(err);
    }
  },
  fetchPostsWithID: async (id) => {
    try {
      let data = await tripService.getTripById(id);
      set({ selectedPost: data });
    } catch (err) {
      console.error(err);
    }
  },
  addTrip: (trip) => {
    const { journal, posts } = get();
    if (!journal.find((t) => t.id === trip.id)) {
      const updatedTrips = [...journal, trip];
      localStorage.setItem("journalTrips", JSON.stringify(updatedTrips));
      set({ journal: updatedTrips });
    }
    if (!posts.find((p) => p.id === trip.id)) {
      set({ posts: [...posts, trip] });
    }
  },

  deleteTrip: (trip) => {
    const { journal, posts } = get();
    const updatedJournal = journal.filter((t) => t.id !== trip);
    const updatedPosts = posts.filter((p) => p.id !== trip);
    localStorage.setItem("journalTrips", JSON.stringify(updatedJournal));
    set({ journal: updatedJournal, posts: updatedPosts });
  },
}));

export default useTripsStore;
