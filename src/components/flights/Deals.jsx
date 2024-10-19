import {
  BiBadgeCheck,
  BiHeadphone,
  BiStreetView,
  BiTag,
  BiUser,
} from "react-icons/bi";

const Deals = () => {
  return (
    <div className="pt-8 pb-10">
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 basis-[18rem]">
          <img
            src="/images/flights/airplane.png"
            alt=""
            className="sm:h-[600px] sm:w-[600px] object-contain mx-auto"
          />
        </div>
        <div className="flex-1 basis-[18rem]">
          <div className="pb-3 border-b dark:border-b-dark">
            <h1 className="heading">
              feel the best exprience <br /> with our rental deals
            </h1>
          </div>
          <div className="mt-5 flex-1">
            <div className="flex gap-x-3">
              <div className="icon-box !rounded-md bg-slate-200 dark:bg-dark-light border dark:border-dark">
                <BiStreetView />
              </div>
              <div>
                <h1 className="text-lg font-semibold">
                  Deals for every budget
                </h1>
                <p>
                Whether you're splurging or saving, we've got the perfect options to match your budget without compromising on quality.
                </p>
              </div>
            </div>

            <div className="flex gap-x-3 mt-8">
              <div className="icon-box !rounded-md bg-slate-200 dark:bg-dark-light border dark:border-dark">
                <BiHeadphone />
              </div>
              <div>
                <h1 className="text-lg font-semibold">
                  Awesome Customer Support
                </h1>
                <p>
                Our dedicated team is here 24/7, ensuring you have a hassle-free and enjoyable journey from start to finish.
                </p>
              </div>
            </div>

            <div className="flex gap-x-3 mt-8">
              <div className="icon-box !rounded-md bg-slate-200 dark:bg-dark-light border dark:border-dark">
                <BiTag />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Free Cancellation</h1>
                <p>
                Plans change? No problem! Enjoy the flexibility of our free cancellation policy and book with confidence.
                </p>
              </div>
            </div>

            <div className="flex gap-x-3 mt-8">
              <div className="icon-box !rounded-md bg-slate-200 dark:bg-dark-light border dark:border-dark">
                <BiBadgeCheck />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Your Best Security</h1>
                <p>
                Travel with peace of mind, knowing that your safety and security are our top priority every step of the way.
                </p>
              </div>
            </div>

            <div className="flex gap-x-3 mt-8">
              <div className="icon-box !rounded-md bg-slate-200 dark:bg-dark-light border dark:border-dark">
                <BiUser />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Quality Pilots</h1>
                <p>
                Our experienced and highly trained pilots are committed to making your journey safe, smooth, and enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
