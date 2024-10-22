"use client";
import { useState } from "react";
import Image from "next/image";
import massage from "@/public/massage.png";
import makeup from "@/public/makeup.png";
import nail from "@/public/nail.png";
import wax from "@/public/wax.png";

export default function Sidebar() {
  const categories = [
    {
      name: "Hair-Cut, Wash & Style",
      img: "https://media.vyaparify.com/vcards/services/36135/Hair-Spa-Treatments-at-DK's-Unisex-Salon.png",
    },
    {
      name: "Nail Bar",
      img: "https://artaistry.com/cdn/shop/articles/blue_nail_4.png?crop=center&height=840&v=1703303207&width=840",
    },
    {
      name: "Face",
      img: "https://cdn.dotpe.in/longtail/store-items/8063959/0aVmDTnb.jpeg",
    },
    { name: "Massage & Spa", img: massage },
    {
      name: "Manicure & Pedicure",
      img: nail,
    },
    {
      name: "Waxing, Bleaching & Threading",
      img: wax,
    },
    {
      name: "Semi Permanent Make Up",
      img: makeup,
    },
  ];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const handleCategoryClick = (index:any) => {
    setSelectedCategoryIndex(index);
  };

  return (
    <div className="w-[4.5rem] bg-white h-screen py-4 pt-2 flex flex-col items-center overflow-y-auto space-y-4 scrollbar-none">
      {categories.map((category, index) => (
        <button
          key={category.name}
          className={`flex flex-col items-center justify-center text-center space-y-2 transition-all duration-200 w-full ${
            selectedCategoryIndex === index ? "bg-[#e5eaf3] border-r-4 border-[#809bb3]" : ""
          }`}
          onClick={() => handleCategoryClick(index)}
        >
          <Image
            src={category.img}
            className="rounded-full object-cover"
            width={48}
            height={48}
            alt={category.name}
          />
          <span className="text-[.7rem] font-medium leading-3">{category.name}</span>
        </button>
      ))}
    </div>
  );
}
