import React from "react";
import serviceImg from "../../assets/service.png";

const OurServices = () => {
  const features = [
    {
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      highlight: false,
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      highlight: true, // This is the highlighted center card
    },
    {
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      highlight: false,
    },
    {
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      highlight: false,
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      highlight: false,
    },
    {
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      highlight: false,
    },
  ];
  return (
    <div className="bg-secondary pt-[100px] mt-[100px]">
      <div className="text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4">Our Services</h2>
        <p className="font-medium w-3/4 mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* --- Grid Layout --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex bg-white rounded-3xl hover:bg-primary transition duration-300 hover:shadow-lg ">
                <div
                  className={`p-6 sm:p-8 rounded-2xl ${feature.cardClasses} transition duration-300 hover:shadow-lg h-full flex flex-col items-center text-center `}>
                  {/* Icon/Image Placeholder */}
                  <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-pink-100/70">
                    <img src={serviceImg} alt="" />
                  </div>

                  <h3 className={feature.titleClasses}>{feature.title}</h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
