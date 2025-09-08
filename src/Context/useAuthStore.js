import { create } from "zustand";

const useAuthStore = create((set) => ({
  auth: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
  user: localStorage.getItem("user") || null,

  login: (username, password) => {
    if (username && password) {
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      localStorage.setItem("user", username);
      set({ auth: true, user: username });
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.setItem("isAuthenticated", JSON.stringify(false));
    localStorage.removeItem("user");
    set({ auth: false, user: null });
  },
}));

export default useAuthStore;
