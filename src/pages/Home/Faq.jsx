import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Faq = () => {
  return (
    <div>
      <div className="text-center mt-[100px] mb-10">
        <h2 className="text-4xl font-extrabold mb-4 text-secondary">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="font-medium w-3/4 mx-auto text-[#606060]">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="collapse collapse-arrow mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div className="collapse collapse-arrow mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          I forgot my password. What should I do?
        </div>
        <div className="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div className="collapse collapse-arrow mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
      <div className="collapse collapse-arrow mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
      <div className="collapse collapse-arrow mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
      <div className="text-center mt-10 mb-[100px] flex justify-center items-center ">
        <button className="text-black bg-primary px-6 py-2 cursor-pointer flex justify-center items-center gap-2">
          See more FAQs
          <FaArrowRight className="-rotate-45" />
        </button>
      </div>
    </div>
  );
};

export default Faq;
