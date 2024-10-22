const FAQs = () => {
  return (
    <div className="pt-8 pb-10">
      <h1 className="text-center heading">frequently asked questions</h1>
      <div className="mt-5 flex flex-wrap gap-4">
        {Array.apply(null, { length: 2 }).map((_, i) => (
          <div
            key={i}
            className="p-4 flex-1 basis-[18rem] rounded-lg bg-slate-200 border dark:bg-card-dark dark:border-dark"
          >
            <h1 className="text-lg font-semibold">
              How is TripGuide different from other hotel booking websites
            </h1>
            <p className="mt-3">
            TripGuide stands out from other hotel booking platforms by offering a seamless, user-friendly experience with exclusive deals and real-time availability for instant bookings. Our transparent, verified reviews ensure you always make informed choices, while our unique partnerships with top hotels guarantee the best prices. With 24/7 customer support, we're here to assist you at every step, ensuring your trip is smooth and stress-free from booking to check-out.

            {/* TripGuide sets itself apart from other hotel booking platforms by offering more than just accommodation — it curates unforgettable travel experiences. With personalized recommendations powered by advanced AI, TripGuide ensures that every stay is perfectly suited to your preferences and style. Our exclusive deals, available only through TripGuide, provide unbeatable value for travelers on any budget. Say goodbye to long waits with real-time availability and instant booking confirmation, making your travel planning seamless. Plus, with transparent, verified reviews, you can book with confidence knowing you're choosing the best options for your trip. */}
            </p>
          </div>
        ))}
      </div>
      <div className="flex-center-center mt-6">
        <button className="btn btn-primary">more faqs</button>
      </div>
    </div>
  );
};

export default FAQs;
