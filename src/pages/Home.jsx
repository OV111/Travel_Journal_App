import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Context/AuthContext";
import SplitText from "../components/SplitText";
const handleAnimationComplete = () => {
  console.log('all leters have been animated!')
}
const Home = () => {
  const { isAuthenticated, username, password, login } = useContext(AuthContext);

  return (
    <React.Fragment>
      <div>
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <SplitText
              text="Welcome to Travel Journal!"
              className="text-5xl font-semibold text-center mb-4"
              delay={100}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
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
