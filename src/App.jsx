// user Authenticationy
// Logout y Ui i tarbervox sarqel
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import TripsProvider from "./Context/TripsProvider";

import LoaderSpinner from "./components/LoaderSpinner";
import router from "./router";

const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<LoaderSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </React.Fragment>
  );

  // return (
  //   <React.Fragment>
  //     <BrowserRouter>
  //       <AuthProvider>
  //         <TripsProvider>
  //           <Suspense fallback={<LoaderSpinner />}>
  //             <Routes>
  //               <Route element={<MainLayout />}>
  //                 <Route path="/" element={<Home />} />
  //                 <Route path="/explore" element={<Explore />} />
  //                 <Route path="/explore/:id" element={<ReadMore />} />
  //                 <Route path="/login" element={<Login />} />

  //                 <Route
  //                   path="/my-journal"
  //                   element={
  //                     <ProtectedRoutes>
  //                       <MyJournal />
  //                     </ProtectedRoutes>
  //                   }
  //                 />
  //                 <Route
  //                   path="/add-trip"
  //                   element={
  //                     <ProtectedRoutes>
  //                       <AddTrip />
  //                     </ProtectedRoutes>
  //                   }
  //                 />
  //               </Route>

  //               <Route path="*" element={<NotFound />} />
  //             </Routes>
  //           </Suspense>
  //         </TripsProvider>
  //       </AuthProvider>
  //     </BrowserRouter>
  //   </React.Fragment>
  // );
};

export default App;
