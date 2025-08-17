import React, { useContext, useState } from "react";
import { TripsContext } from "../Context/TripsContext";
import { postsObj } from "../data/posts";
const AddTrip = () => {
  const { trips, addTrip } = useContext(TripsContext);
  const [destination, setDestination] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

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
    postsObj.push(newTrip)
    console.log(destination, date, description);
    addTrip(newTrip);
    console.log(trips);
  };

  //   handling filew input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImage(imgUrl);
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="grid items-center gap-3 py-5">
        <div className="grid w-200 px-4 py-3 mx-30 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 placeholder:font-light">
          <div>
            <h1 className="justify-center items-center">Add Your Trip</h1>
          </div>
          <div className="grid py-2">
            <input
              type="text"
              placeholder="Share Destination name"
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />

            <input
              type="text"
              className="py-3"
              placeholder="Share Exact Location name."
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />

            <input
              type="date"
              className="py-3"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <input type="file" className="py-3" onChange={handleFileChange} />
            <input
              type="text"
              placeholder="Enter Description of the Trip"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button type="submit" className="cursor-pointer">
              Add Trip
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
export default AddTrip;
