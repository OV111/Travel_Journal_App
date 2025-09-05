import { toast } from "react-toastify";
class ApiService {
  constructor() {}

  async request(
    endpoint,
    options = {},
    errorMessage = "API Error",
    SuccessMessage = null
  ) {
    try {
      const response = await fetch(
        `https://68b09a013b8db1ae9c047952.mockapi.io/${endpoint}`,
        {
          headers: { "content-type": "application/json" },
          ...options,
        }
      );
      if (!response.ok) {
        throw new Error("Error with api(http)");
      }

      const data = await response.json();

      if (SuccessMessage) {
        toast.success(SuccessMessage);
        console.log("correct");
      }
      return data;
    } catch (err) {
      console.error(err);
      toast.error(errorMessage);
    }
  }
}

const apiService = new ApiService(
  "https://68b09a013b8db1ae9c047952.mockapi.io"
);

export default apiService;
