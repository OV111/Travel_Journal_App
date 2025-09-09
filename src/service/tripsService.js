import apiService from "./api";
const tripService = {
  getTrips: () => apiService.request("/journals"),
  getTripById: (id) => apiService.request(`/journals/${id}`),
  updateTrip: (id, data) => {
    apiService.request(
      `/journals/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      },
      "Failed to update trip",
      "Trip updated successfully!"
    );
  },
  deleteTrip: (id) => {
    apiService.request(
      `/journals/${id}`,
      {
        method: "DELETE",
      },
      "Failed to delete trip",
      "Trip deleted successfully!"
    );
  },
};
export default tripService;
