import React from "react";
import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "Kitchen Remodel Success",
    review: '"Found an amazing electrician and an apprentice. They did a fantastic job at a fair price."',
    name: "Sarah J.",
    role: "Homeowner",
    image: "/images/story1.svg",
    rating: 4,
  },
  {
    id: 2,
    title: "Quick Pipe Repair",
    review: '"Emergency leak on a Sunday. Posted the job and had a plumber here in 2 hours. Professional service."',
    name: "Michael R.",
    role: "Property Manager",
    image: "/images/story2.svg",
    rating: 4,
  },
  {
    id: 3,
    title: "Supporting Local Youth",
    review: '"Loved seeing the mentorship in action. The master carpenter and apprentice were a great team."',
    name: "Linda K.",
    role: "Local Business Owner",
    image: "/images/story3.svg",
    rating: 4,
  },
];

export default function SuccessStories() {
  return (
    <section className="w-full py-[64px] md:py-[96px] px-4 md:px-6 lg:px-[64px] bg-[#F7F9FB] md:bg-[#EEEEEE]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col gap-3 md:gap-4 mb-12 md:mb-16 text-center">
          <h2 className="font-poppins font-semibold text-[24px] md:text-[16px] leading-[33.6px] md:leading-[24px] tracking-[0px] text-black md:text-[#1B1B1B]">
            Success Stories
          </h2>
          <p className="font-montserrat font-normal text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] tracking-[0px] text-[#45464D] md:text-[#4C4546]">
            Real stories from our customer community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="flex flex-col bg-white md:bg-[#F9F9F9] rounded-[12px] md:rounded-[4px] border-0 md:border border-[#D1D1D1] shadow-[0px_4px_12px_rgba(15,23,42,0.05)] md:shadow-none overflow-hidden"
            >
              {/* Story Image */}
              <div className="relative w-full aspect-square">
                <Image src={story.image} alt={story.title} fill className="object-cover" />
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-6 flex flex-col gap-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => {
                    // Mobile: all 5 selected, Desktop: 4 selected 1 unselected
                    const isSelected = i < (typeof window !== 'undefined' && window.innerWidth < 768 ? 5 : story.rating);
                    return (
                      <div key={i} className="w-4 h-4 relative">
                        <Image 
                          src={isSelected ? "/icons/star-fill.svg" : "/icons/star-unfill.svg"} 
                          alt="" 
                          fill 
                          className="object-contain" 
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h4 className="font-montserrat md:font-poppins font-semibold text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[0.28px] md:tracking-normal text-black md:text-[#1B1B1B]">
                      {story.title}
                    </h4>
                    <p className="font-montserrat font-normal italic text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-[#45464D] md:text-[#4C4546]">
                      {story.review}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 md:gap-0">
                    <span className="font-montserrat font-medium md:font-normal text-[12px] md:text-[16px] leading-[12px] md:leading-[24px] text-[#0058BE] md:text-[#1B1B1B]">
                      — {story.name}
                    </span>
                    <span className="font-montserrat md:font-poppins font-semibold text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[0.28px] md:tracking-normal text-black md:text-[#1B1B1B]">
                      {story.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
