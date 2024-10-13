import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import Navbar from "./components/common/Navbar";

import { closeDropdown, closeNotifications } from "./features/uiSlice";

import {
  Blog,
  BlogPost,
  Bookings,
  BookingSuccess,
  CarDetails,
  CarRental,
  ConfirmBooking,
  Flights,
  FlightsSearch,
  Home,
  HotelDetails,
  Login,
  PageNotFound,
  Profile,
  Register,
  Rewards,
  Wallet,
  Activities,
  ActivitiesSearch,
} from "./pages";
import HotelSearch from "./pages/HotelsSearch";
import axios from "axios";
function App() {
  const [loggedInTourist, setLoggedInTourist] = useState();
  const [error, setError] = useState("");

  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();


  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
    dispatch(closeNotifications());
  };
  const fetchTouristData = async () => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        setError("Access token not available");
        console.log("Access token error");
        return;
      }
  
      const response = await axios.get(
        "https://travel-backend-nwtf.onrender.com/api/v1/tourist/current-tourist",
        {
          withCredentials: true, // Only needed if using cookies
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
  
      if (response.status === 200) {
        setLoggedInTourist(response.data.data || "No tourist data available");
        console.log("Tourist Data:", response.data);
      } else {
        setError(response.data.message || "Unable to fetch tourist data");
        console.log("Error Response:", response);
      }
    } catch (err) {
      setError("Error fetching tourist data");
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    fetchTouristData();
    // console.log(loggedInTourist);// returning null
  }, );

  // Loader when page is loading
  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <div>
      {showLoader && <Loader />}
      <Navbar loggedInTourist={loggedInTourist} />
      <div className="min-h-screen" onClick={handleCloseDropdown}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/cars" element={<CarRental />} />
          <Route path="/hotels/search" element={<HotelSearch />} />
          <Route path="/activities/search" element={<ActivitiesSearch />} />
          <Route path="/flights/search" element={<FlightsSearch />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route
            path="/hotels/:id/confirm-booking"
            element={<ConfirmBooking />}
          />
          <Route
            path="/hotel/:id/booking-sucess"
            element={<BookingSuccess />}
          />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <NewsLetter /> */}
        <Footer />
      </div>

      <BackToTopButton showButton={showButton} />
    </div>
  );
}

export default App;
