import { motion } from "framer-motion";
import { BiBell, BiCaretDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDropdown,
  closeNotifications,
  toggleDropdown,
  toggleNotifications,
  turnOnDarkMode,
  turnOnLightMode,
  uiStore,
} from "../../features/uiSlice";
import Dropdown from "./DropDown";
import Notifications from "./Notifications";
import { Link } from "react-router-dom";
import { useEffect ,useState} from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import axios from "axios";


import { setIsLoggedIn } from "../../features/dataSlice";

const Navbar = () => {
  const rootDoc = document.querySelector(":root");
  const { mode } = useSelector(uiStore);
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn); 
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loggedInTourist, setLoggedInTourist] = useState(null);
  

  const fetchTouristData = async () => {
    try {
      const accessToken = localStorage.getItem("token"); // Retrieve token from localStorag
      if (!accessToken) {
        setError("Access token not available");
        console.log("error")
        return;
      }
      const response = await axios.get(
        "https://travel-backend-nwtf.onrender.com/api/v1/tourist/current-tourist",
        {
          withCredentials: true, // For cookie-based authentication
          headers: {
            Authorization: `Bearer ${accessToken}`, // Send JWT token in the Authorization header
          },
        }
      );    
      dispatch(setIsLoggedIn(true));

      // Assuming the data is returned in response.data
      setLoggedInTourist(response.data);
      console.log("noob")
      console.log(response.data);
      console.log("noob")

    } catch (err) {
      setError("Error fetching tourist data");
      console.error(err);
    }
  };
  const setDarkMode = () => {
    dispatch(turnOnDarkMode());
    rootDoc.classList.add("dark");
  };

  const setLightMode = () => {
    dispatch(turnOnLightMode());
    rootDoc.classList.remove("dark");
  };

  useEffect(() => {
    rootDoc.classList.add(`${mode}`);
    localStorage.setItem("TripGuide-theme-mode", JSON.stringify(mode));
  }, [mode]);

  useEffect(()=>{
    fetchTouristData();
  },[])
  const handleClose = (e) => {
    if (!e.target.classList.contains("dropdown-btn")) {
      dispatch(closeDropdown());
    }
    if (!e.target.classList.contains("notification-btn")) {
      dispatch(closeNotifications());
    }
  };

  return (
    <div
      className="fixed z-40 w-full px-3 py-2 bg-white/60 navbar lg:px-6 dark:bg-card-dark/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="flex-center-between">
        <div className="gap-1 flex-align-center md:gap-3">
          <Link to="/" className="flex-shrink-0 !opacity-100 hidden md:block">
            <img
              src={mode === "dark" ? "/logo-dark.png" : "/logo-light.png"}
              alt="logo"
              className="w-[10rem]"
            />
          </Link>
          <Link to="/" className="flex-shrink-0 !opacity-100 md:hidden">
            <img
              src={
                mode === "dark"
                  ? "/mobile-logo-dark.png"
                  : "/mobile-logo-light.png"
              }
              alt="logo"
              className="w-8"
            />
          </Link>
        </div>

        <div className="flex-align-center gap-x-3 md:gap-x-1">
          {/* Theme toggle */}
          <div className="gap-3 px-2 py-1 rounded-lg select-none flex-align-center bg-slate-100 dark:bg-main-dark w-fit">
            <div
              className={`sm:cursor-pointer ${
                mode === "light" &&
                "bg-slate-300 dark:bg-dark-light rounded-lg px-3 py-1 "
              }`}
              onClick={setLightMode}
            >
              <FiSun />
            </div>
            <div
              className={`sm:cursor-pointer ${
                mode === "dark" &&
                "bg-slate-300 dark:bg-dark-light rounded-lg px-3 py-1 "
              }`}
              onClick={setDarkMode}
            >
              <FiMoon />
            </div>
          </div>
          
          {/* Profile / Login */}
          <div className="relative flex-shrink-0 space-x-1 flex-align-center md:pl-4">
            {isLoggedIn ? (
              <>
                <div
                  className="absolute top-0 left-0 w-full h-full dropdown-btn sm:cursor-pointer"
                  onClick={() => dispatch(toggleDropdown())}
                ></div>
                <motion.img
                  src="/images/avatar.png"
                  alt="profile"
                  className="w-8 h-8 rounded-full dropdown-btn"
                  whileTap={{ scale: 0.5 }}
                />
                <BiCaretDown className="dropdown-btn" />
                <Dropdown />
              </>
            ) : (
              <div className="flex gap-2">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/signup" className="btn">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
