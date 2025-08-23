import React, { useContext, lazy, Suspense } from "react";
import TiltedCard from "../components/TitleCard";
import { TripsContext } from "../Context/TripsContext";
import { Trash2 } from "lucide-react";

const Aurora = lazy(() => import("../components/Aurora"));
const MyJournal = () => {
  const { journalTrips, deleteTrip } = useContext(TripsContext);

  return (
    <React.Fragment>
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div>Aurora Loading...</div>}>
            <Aurora
              colorStops={["#00C6FF", "#0072FF", "#3A29FF"]}
              blend={0.4}
              amplitude={1.01}
              speed={0.5}
            />
          </Suspense>
        </div>

        <div className="relative z-10">
          <h1 className="items-center justify-center text-center text-gray-100 text-5xl md:text-6xl font-serif text-primary my-6">
            My Journal of Trips
          </h1>
          <p className="text-center text-2xl text-muted-foreground max-w-3xl mx-auto text-slate-200">
            Capturing moments, preserving memories, and sharing adventures from
            around the world
          </p>

          {journalTrips.length === 0 ? (
            <p className="text-gray-100 items-center justify-center text-center text-3xl font-bold my-19">
              No Trips yet. Add some from Explore!
            </p>
          ) : (
            <ul className="mt-6 space-y-4">
              {journalTrips.map((post) => (
                <li
                  key={post.id}
                  className="bg-slate-200 border-0 p-4 w-300 rounded-2xl mx-30 my-6 shadow"
                >
                  <TiltedCard
                    imageSrc={post.image}
                    altText={post.title}
                    captionText={post.title}
                    containerHeight="250px"
                    containerWidth="100%"
                    imageHeight="250px"
                    imageWidth="100%"
                    rotateAmplitude={6}
                    scaleOnHover={1.01}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent=""
                  />

                  <h2 className="text-2xl font-semibold pt-5">{post.title}</h2>
                  <p className="font-light text-xl">
                    {post.location} • {new Date(post.date).toLocaleDateString()}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-normal">
                      {post.shortDescription}
                    </p>
                    <button
                      className="relative right p-2 hover:bg-red-200 rounded-full transition-colors duration-200 group cursor-pointer"
                      aria-label="Delete Trip"
                      onClick={() => {
                        deleteTrip(post.id);
                      }}
                    >
                      <Trash2 className="h-5 w-5 text-red-500 hover:text-red-700" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyJournal;
