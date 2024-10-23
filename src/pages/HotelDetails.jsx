import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaTimes } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tabs as TabWrapper, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  AddReview,
  Amenities,
  Description,
  Features,
  HotelFeatures,
  PriceDetails,
  Reviews,
  RoomPrice,
  RoomSelections,
  Trending,
} from "../components/hotel-details";
import "./";

const HotelDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample room Images for the Gallery
  const roomImages = [
    "/images/place (32).jpg",
    "/images/place (33).jpg",
    "/images/place (34).jpg",
  ];

  // Open Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <h1 className="text-3xl md:text-4xl font-bold capitalize">
        Switzerland Hotels and Places to Stay
      </h1>

      {/* Rating and Location */}
      <div className="mt-4 flex gap-x-3 items-center">
        <div className="flex gap-x-2 items-center">
          <FaStar className="text-yellow-400" />
          <p>
            4.8
            <span className="opacity-70">(183 reviews)</span>
          </p>
        </div>
        <div className="flex gap-x-2 items-center">
          <BiMap />
          <p>Zurich town, Switzerland</p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mt-5 flex flex-col md:flex-row flex-wrap gap-4 rounded-xl overflow-hidden relative">
        {/* Main Image */}
        <div className="w-full md:flex-1 md:basis-[30rem] h-64 md:h-auto overflow-hidden">
          <img
            src="/images/place (31).jpg"
            alt="Hotel Exterior View"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Smaller Images */}
        <div className="w-full md:flex-1 md:basis-[16rem] flex flex-row md:flex-col gap-4">
          <div className="w-1/2 md:w-full h-40 md:h-48 lg:h-56 overflow-hidden">
            <img
              src="/images/place (32).jpg"
              alt="Hotel Room1"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="w-1/2 md:w-full h-40 md:h-48 lg:h-56 overflow-hidden relative">
            <img
              src="/images/place (33).jpg"
              alt="Hotel Room2"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />

            <button
              className="absolute bottom-3 right-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
              onClick={openModal}
            >
              Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Modal with React Responsive Carousel */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-5 rounded-lg w-full max-w-md h-[80vh] overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-800 hover:text-gray-600"
              onClick={closeModal}
            >
              <FaTimes size={18} />
            </button>

            <h2 className="text-xl font-bold mb-4 text-center text-black">
              Room Gallery
            </h2>

            {/* React Responsive Carousel */}
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              dynamicHeight={false}
              showThumbs={false}
            >
              {roomImages.map((img, index) => (
                <div
                  key={index}
                  className="h-[300px] w-full flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt={`Rooms View ${index + 1}`}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}

      {/* Tags and Rating */}
      <div className="mt-5 flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
        {/* Tags */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-green-500 bg-green-500/20 px-2 rounded">
            5.0
          </span>
          <span className="text-sm text-yellow-400 bg-yellow-400/20 px-2 rounded">
            Perfect
          </span>
          <span className="text-sm text-blue-500 bg-blue-500/20 px-2 rounded">
            Hotels
          </span>
          <span className="text-sm text-red-500 bg-red-500/20 px-2 rounded">
            Building
          </span>
          <span className="text-sm text-orange-500 bg-orange-500/20 px-2 rounded">
            Top value
          </span>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="text-yellow-400">
              {i < 4 ? <FaStar /> : <FaStarHalfAlt />}
            </div>
          ))}
        </div>
      </div>

      {/* Tab Section */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {/* Left Column (Tabs and Content) */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold capitalize mt-4">
            Exclusive Room in House
          </h2>
          <p className="mt-2">Zurich, Switzerland</p>

          {/* Tabs */}
          <div className="mt-8">
            <TabWrapper>
              <TabList>
                <Tab>Description</Tab>
                <Tab>Features</Tab>
                <Tab>Room & Price</Tab>
                <Tab>Review</Tab>
              </TabList>

              <TabPanel>
                <Description />
              </TabPanel>
              <TabPanel>
                <Features />
              </TabPanel>
              <TabPanel>
                <RoomPrice />
              </TabPanel>
              <TabPanel>
                <Reviews />
              </TabPanel>
            </TabWrapper>
          </div>

          {/* Additional Info */}
          <HotelFeatures />
          <Amenities />

          <button className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            More Details
          </button>
        </div>

        {/* Right Column (Price Details) */}
        <div className="lg:col-span-1">
          <PriceDetails />
        </div>
      </div>

      {/* Additional Sections */}
      <RoomSelections />
      <AddReview />
      <Trending />
    </div>
  );
};

export default HotelDetails;
