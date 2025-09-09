import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { initialPosts } from "../data/posts";
import { Fullscreen } from "lucide-react";
import { Link } from "react-router-dom";
import useTripsStore from "../Context/useTripsStore";
import NotFound from "../components/NotFound";
const ReadMore = () => {
  const { id } = useParams();
  const fetchPostsWithID = useTripsStore().fetchPostsWithID;
  const selectedPost = useTripsStore().selectedPost;

  useEffect(() => {
    fetchPostsWithID(id);
  }, [id, fetchPostsWithID]);

  if (!selectedPost) {
    return (
      <React.Fragment>
        <NotFound>404 Not Found</NotFound>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="w-full min-h-screen bg-background bg-zinc-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <h1 className="text-gray-100 text-3xl sm:text-4xl lg:text-6xl font-bold">
              {selectedPost.title}
            </h1>
            <p className="text-gray-100 text-lg sm:text-xl lg:text-3xl font-semibold mt-2">
              {selectedPost.location} •{" "}
              {new Date(selectedPost.date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="px-4 sm:px-8 lg:px-16 py-8">
          <p className="text-slate-500 text-lg sm:text-xl lg:text-2xl mb-6">
            {selectedPost.shortDescription}
          </p>
          <h3 className="text-2xl sm:text-3xl font-medium text-[#003580] mb-4">
            A Journey Worth Taking
          </h3>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            Every destination has a story waiting to be discovered — from hidden
            corners of bustling cities to the calm beauty of nature’s wonders.
            No matter where the road leads, each journey brings new memories,
            fresh perspectives, and experiences that stay with us forever.
            Wherever you go, let curiosity guide you, because the best trips are
            not just about the places you visit, but the moments you create
            along the way.
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="flex justify-center mt-12 mb-16 px-4">
          <div className="w-full sm:w-[80%] lg:w-[60%] p-6 sm:p-8 bg-card rounded-lg bg-zinc-200 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-card-foreground">
              Ready for Your Next Adventure?
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
              Discover more amazing destinations and travel stories.
            </p>
            <Link to="/explore">
              <button className="font-medium text-base sm:text-lg lg:text-xl mt-3 px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-[#003580] transition-colors duration-300 ease-in-out">
                Explore More Articles
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ReadMore;
