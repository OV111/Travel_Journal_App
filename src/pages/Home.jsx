import React from "react";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <React.Fragment>
      <div >
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Travel Journal
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing travel experiences from fellow adventurers and
              share your own journey with the world!
            </p>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};
export default Home;