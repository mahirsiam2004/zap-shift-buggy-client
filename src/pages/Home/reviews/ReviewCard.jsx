import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const { userName, review: testimonials, user_photoURL } = review;
  return (
    <div>
      <div className="inline-block rounded-[28px] bg-[#f4f7f9] px-8 py-7 shadow-sm">
        {/* Quote icon */}
        <FaQuoteLeft className="text-3xl text-[#CAEB66]" />

        {/* Text */}
        <p className="mt-4 text-[15px]  max-w-md">{testimonials}</p>

        {/* Dashed divider */}
        <div className="mt-6 border-t border-dashed border-[#5ac1b6]" />

        {/* Footer */}
        <div className="mt-5 flex items-center gap-3">
          {/* Circle avatar */}
          <div className="h-10 w-10 rounded-full bg-[#0b5451]">
            <img className="rounded-full  " src={user_photoURL} alt="" />
          </div>

          <div>
            <div className="text-[17px] font-semibold text-[#00524b]">
              {userName}
            </div>
            <div className="text-sm text-[#6b7280]">
              Senior Product Designer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard