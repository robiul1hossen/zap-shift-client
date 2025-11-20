import React from "react";

const ReviewSlideCard = ({ review }) => {
  return (
    <div>
      <div className="bg-white p-6 sm:p-8 max-w-sm mx-auto shadow-lg rounded-xl font-sans">
        <div className="text-6xl font-extrabold text-[#99D9D9] mb-4 leading-none">
          “
        </div>

        <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
          {review.review}
        </p>

        <div className="border-t-2 border-dashed border-gray-300 mb-6"></div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#0F2F3D] shrink-0">
            <img className="rounded-full" src={review.user_photoURL} alt="" />
          </div>

          <div>
            <h4 className="text-lg font-extrabold text-gray-900 leading-snug">
              {review.userName}
            </h4>
            <p className="text-sm text-gray-600">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlideCard;
