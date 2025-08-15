import React, { useContext } from "react";
// import TripsProvider from '../Context/TripsProvider'
import { TripsContext } from "../Context/TripsContext";
const MyJournal = () => {
  const { trips, addTrip, deleteTrip } = useContext(TripsContext);

  return (
    <React.Fragment>
      <div>
        <h1 className="text-center text-3xl font-medium text-[#003580] my-6 ">
          My Journal of Trips
        </h1>
      </div>
      <div>
        {trips.length === 0 ? (
          <p className="">No Trips yet. Add some from Explore!</p>
        ) : (
          <ul className="mt-6 space-y-4">
            {trips.map((post) => (
              <li key={post.id} className="border p-4 w-300 rounded-2xl mx-30 my-6 shadow">
                <h2 className="text-xl font-semibold"> {post.title}</h2>
                <p>
                  {post.location} • {new Date(post.date).toLocaleDateString()}
                </p>
                <p>{post.shortDescription}</p>
              </li>
            ))}
          </ul>
        )}
        {console.log(trips)}
        {console.log(addTrip)}
        {console.log(deleteTrip)}
        {console.log("aveh")}
      </div>
    </React.Fragment>
  );
};
export default MyJournal;
