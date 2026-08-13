import React from "react";
import Image from "next/image";

const leaders = [
  {
    name: "Ebuka Alumona",
    role: "Founder & CEO",
    image: "/images/role1.png",
  },
  {
    name: "Emmanuel Agbola",
    role: "CTO",
    image: "/images/role2.png",
  },
  {
    name: "Abisoye Deborah",
    role: "Head of Operations",
    image: "/images/role3.png",
  },
];

export default function Leadership() {
  return (
    <section className="w-full bg-[#F2F4F6] py-[64px] md:py-[96px] px-6 lg:px-[64px]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Tag */}
        <span className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0px] text-[#0051D5] uppercase mb-2">
          LEADERSHIP
        </span>

        {/* Heading */}
        <h2 className="font-poppins font-semibold text-[32px] leading-[38px] tracking-[0px] text-[#191C1E] mb-4">
          Meet our leadership team
        </h2>

        {/* Subtext */}
        <p className="font-poppins font-semibold text-[16px] leading-[24px] tracking-[0%] text-[#44474E] max-w-2xl mb-12">
          The experts behind BlueFixx, dedicated to bridging the gap in home services.
        </p>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[8px] border border-[#C4C6CF33] p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="w-[120px] h-[120px] rounded-[12px] border-2 border-[#0051D533] overflow-hidden mb-6 relative">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="font-montserrat font-semibold text-[20px] leading-[28px] tracking-[0px] text-[#191C1E] mb-1">
                {leader.name}
              </h3>

              {/* Role */}
              <p className="font-montserrat font-medium text-[14px] leading-[20px] tracking-[0.14px] text-[#0051D5]">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
