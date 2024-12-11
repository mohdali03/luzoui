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
      services: [
        { name: "Haircut By Celebrity Stylist", price: "₹2,500" },
        { name: "Hair Wash", price: "₹500" },
        { name: "Blow Dry", price: "₹800" },
      ],
    },
    {
      name: "Nail Bar",
      img: "https://artaistry.com/cdn/shop/articles/blue_nail_4.png?crop=center&height=840&v=1703303207&width=840",
      services: [
        { name: "Manicure", price: "₹1,200" },
        { name: "Pedicure", price: "₹1,500" },
      ],
    },
    {
      name: "Face",
      img: "https://cdn.dotpe.in/longtail/store-items/8063959/0aVmDTnb.jpeg",
      services: [
        { name: "Facial", price: "₹2,000" },
        { name: "Skin Treatment", price: "₹3,000" },
      ],
    },
    { name: "Massage & Spa", img: massage, services: [] },
    { name: "Manicure & Pedicure", img: nail, services: [] },
    { name: "Waxing, Bleaching & Threading", img: wax, services: [] },
    { name: "Semi Permanent Make Up", img: makeup, services: [] },
  ];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number | null>(null);
  const [isServiceListOpen, setIsServiceListOpen] = useState(false);

  const handleCategoryClick = (index: number) => {
    if (selectedCategoryIndex === index) {
      // If the same category is clicked, toggle the service list
      setIsServiceListOpen(!isServiceListOpen);
    } else {
      // Otherwise, open the services list for the new category
      setSelectedCategoryIndex(index);
      setIsServiceListOpen(true);
    }
  };

  const addServiceToDatabase = async (categoryName: string, serviceName: string, price: string) => {
    try {
      const response = await fetch("/api/addService", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName, serviceName, price }),
      });

      if (!response.ok) {
        throw new Error("Failed to add service");
      }

      alert("Service added successfully!");
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  return (
    <div className="w-[4.5rem] md:w-[18rem] lg:w-[24rem] bg-white min-h-screen py-4 pt-2 flex flex-col items-center overflow-y-auto space-y-4 scrollbar-none">
      {categories.map((category, index) => (
        <div key={category.name} className="w-full">
          <button
            className={`flex flex-col md:flex-row items-center justify-start md:h-full text-center md:text-left space-y-2 md:space-y-0 md:space-x-2 transition-all duration-200 w-full px-2 ${
              selectedCategoryIndex === index
                ? "bg-[#e5eaf3] border-r-4 border-[#809bb3]"
                : ""
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
            <span className="text-[.7rem] md:text-sm lg:text-base md:ml-6 font-medium leading-3">
              {category.name}
            </span>
          </button>

          {isServiceListOpen && selectedCategoryIndex === index && category.services.length > 0 && (
            <div className="pl-6 mt-2 space-y-2">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="flex justify-between items-center w-full"
                >
                  <span className="text-gray-600">{service.name}</span>
                  <span className="text-gray-500">{service.price}</span>
                  <button
                    className="text-cyan-500 font-bold text-sm px-4 py-1 rounded-lg"
                    onClick={() =>
                      addServiceToDatabase(category.name, service.name, service.price)
                    }
                  >
                    ADD
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
