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
        <NotFound >404 Not Found</NotFound>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="w-full min-h-screen bg-background bg-zinc-100 ">
        <div className="relative overflow-hidden">
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0  bg-gradient-to-t from-black/60 via-black/20 to-transparent">
            <h1 className="text-gray-100 text-6xl font-bold pl-10 mt-80  ">
              {selectedPost.title}
            </h1>
            <p className="text-gray-100 text-3xl font-bold pl-11 mt-4">
              {selectedPost.location} • {new Date(selectedPost.date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div>
          <p className="text-slate-500 text-2xl text-start ml-10 mt-6">
            {selectedPost.shortDescription}
          </p>
          <h3 className="text-3xl font-medium text-[#003580] ml-10 mt-6">
            A Journey Worth Taking
          </h3>
          <p className="text-xl ml-10 mt-2 ">
            Every destination has a story waiting to be discovered — from hidden
            corners of bustling cities to the calm beauty of natures wonders. No
            matter where the road leads, each journey brings new memories, fresh
            perspectives, and experiences that stay with us forever. Wherever
            you go, let curiosity guide you, because the best trips are not just
            about the places you visit, but the moments you create along the
            way.
          </p>
        </div>

        <div className="mt-16 mb-16 ml-[25rem] p-8 bg-card rounded-lg bg-zinc-200 w-[40rem]">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-serif font-bold text-card-foreground">
              Ready for Your Next Adventure?
            </h3>
            <p className="text-2xl text-muted-foreground">
              Discover more amazing destinations and travel stories.
            </p>
            <button className="font-medium text-xl mt-3  px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-[#003580] transition-colors duration-300 ease-in-out">
              <Link to="/explore">Explore More Articles</Link>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ReadMore;
