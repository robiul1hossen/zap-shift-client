import React from "react";
import live_tracking from "../../assets/live-tracking.png";
import safe_delivery from "../../assets/safe-delivery.png";
const Features = () => {
  const features = [
    {
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      illustrationText: "",
      image: safe_delivery,
    },
    {
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      illustrationText: "",
      image: live_tracking,
    },
    {
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      illustrationText: "",
      image: safe_delivery,
    },
  ];
  return (
    <div>
      <div className="py-12 sm:py-20 ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="h-4 border-t-2 border-dashed border-[#03464D] mb-8"
            aria-hidden="true"
          />

          <div className="divide-y divide-gray-100  flex flex-col gap-5 mb-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center py-8 border-b border-gray-100 last:border-b-0 bg-white p-8 rounded-3xl">
                <div className="shrink-0 w-full md:w-1/4 mb-4 md:mb-0 md:pr-10 flex justify-start">
                  <div className="w-full max-w-xs md:max-w-none h-auto">
                    {/* Placeholder for the line-art SVG/Image */}
                    <div className="aspect-square w-32 md:w-40 lg:w-48">
                      <img src={`${feature.image}`} alt="" />
                    </div>
                  </div>
                </div>

                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="h-4 border-t-2 border-dashed border-[#03464D] mt-8"
            aria-hidden="true"
          />
        </div>
      </div>
      {/*  */}
      <div
        className="relative bg-[#0F2F3D] text-white py-16 sm:py-24 rounded-3xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden"
        style={{
          backgroundImage:
            'url("https://i.ibb.co.com/fj7cfbX/be-a-merchant-bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "100% auto",
        }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between z-10 relative">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 pr-0 lg:pr-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              Merchant and Customer Satisfaction
              <br />
              is Our First Priority
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-lg rounded-full normal-case font-bold text-gray-900 bg-[#C9F36E] hover:bg-[#b0d859] px-8 py-3">
                Become a Merchant
              </button>
              <button className="btn btn-lg rounded-full normal-case font-bold text-white border border-gray-500 hover:bg-gray-800 bg-transparent px-8 py-3">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm h-60 relative">
              <img
                src="https://i.ibb.co.com/7N6fCrJC/location-merchant.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-[#0F2F3D] rounded-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default Features;
