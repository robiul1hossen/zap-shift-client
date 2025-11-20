import React, { use } from "react";
import customer_top from "../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
// import "./styles.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewSlideCard from "../../components/ReviewSlideCard";

const CustomerReviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  return (
    <div className="mt-[100px] ">
      <img className="mx-auto" src={customer_top} alt="" />
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-4 text-secondary">
          What our customers are sayings
        </h2>
        <p className="font-medium w-3/4 mx-auto text-[#606060]">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div>
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: "30%",
            depth: 250,
            modifier: 1,
            slideShadows: true,
            scale: 1,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewSlideCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviews;
