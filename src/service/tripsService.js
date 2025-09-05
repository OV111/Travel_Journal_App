import apiService from "./api";
const tripService = {
  getTrips: () => apiService.request("/journals"),
  getTripById: (id) => apiService.request(`/journals/${id}`),
  updateTrip: (id, data) => {},
  deleteTrip: (id) =>{
    },
}
export default tripService;