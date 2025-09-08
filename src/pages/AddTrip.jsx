import React, { useContext, useState, lazy, Suspense } from "react";
import { TripsContext } from "../Context/TripsContext";
import { initialPosts } from "../data/posts";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";
import useTripsStore from "../Context/useTripsStore";

const Aurora = lazy(() => import("../components/Aurora"));

const AddTrip = () => {
  // const { addTrip } = useContext(TripsContext);
  const {addTrip} = useTripsStore()
  const [destination, setDestination] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const fileInputRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTrip = {
      id: Date.now(),
      title: destination,
      location: location,
      date: date,
      image: image,
      shortDescription: description,
    };
    initialPosts.push(newTrip);
    addTrip(newTrip);

    toast("Trip Added to My Journal")
    setDestination("");
    setLocation("");
    setDate(null);
    setImage(null);
    setDescription("");
    if(fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImage(imgUrl);
    } 
  };

  return (
    <React.Fragment>
      <ToastContainer position="top-center"></ToastContainer>
      <div className="relative min-h-screen overflow-hidden bg-gray-50">
        {/* Aurora Background */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div>Loading Aurora...</div>}>
            <Aurora
              colorStops={["#00C6FF", "#0072FF", "#3A29FF"]}
              blend={0.7}
              amplitude={1.1}
              speed={0.5}
            />
          </Suspense>
        </div>

        {/* Form Container */}
        <div className="relative z-10  flex justify-center items-start min-h-screen pt-16 px-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <h1 className="text-3xl font-bold text-center text-[#003580] mb-6">
              Add Your Trip
            </h1>

            <input
              type="text"
              value={destination}
              placeholder="Share Destination name"
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={(e) => setDestination(e.target.value)}
              required
            />
            <input
              type="text"
              value={location}
              placeholder="Share Exact Location"
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <div className="flex gap-4 mb-4">
              <input
                type="date"
                value={date || ""}
                className="flex-1 w-[100px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition cursor-pointer"
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <input
                type="file"
                // value=""
                ref={fileInputRef}
                className="flex-1 w-[300px] px-4 py-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 transition file:py-2 file:px-4 file:bg-blue-600 file:text-white file:rounded-full hover:file:bg-blue-700"
                onChange={handleFileChange}
                required
              />
            </div>

            <textarea
              placeholder="Enter Description of the Trip"
              rows={4}
              value={description}
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-[#003580] transition-colors font-semibold"
            >
              Add Trip
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddTrip;