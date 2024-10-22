"use client";
import { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"; 
import banner1 from "@/public/static/banner1.jpeg";
import banner2 from "@/public/static/banner2.jpeg";
import banner3 from "@/public/static/banner3.jpeg";

export default function RightSide() {
  const [isHaircutOpen, setIsHaircutOpen] = useState(false);
  const [isStylingOpen, setIsStylingOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Women");



  const toggleHaircut = () => setIsHaircutOpen(!isHaircutOpen);
  const toggleStyling = () => setIsStylingOpen(!isStylingOpen);

  return (
    <div className="ml-[.4rem] h-screen pl-1.5 pr-0.5 bg-white pt-0 w-full">
      
      <div className="my-2">
      <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        > 
          <CarouselContent>
            {[banner1, banner2, banner3].map((banner, index) => (
              <CarouselItem key={index}>
                <Image
                  src={banner}
                  layout="responsive"
                  width={1200}
                  height={900}
                  alt={`banner-${index}`}
                  className="rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      
      <div className="mt-6 flex items-center border rounded-lg">
        <FaSearch width={24} className="ml-2 text-cyan-500"/>

        <input
          type="text"
          placeholder="Search for service..."
          className="border-none rounded w-full p-2 placeholder:text-gray-500 focus:outline-none"
        />
      </div>

      <div className="mt-4 flex space-x-4 w-full justify-center">
        <button
          onClick={() => setSelectedGender("Men")}
          className={`border px-4 py-2 rounded-lg flex items-center ${
            selectedGender === "Men" ? "bg-blue-500 text-white" : ""
          }`}
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/4439/4439964.png"
            width={24}
            height={24}
            className="w-6 h-6 mr-2"
            alt="men icon"
          />
          Men
        </button>
        <button
          onClick={() => setSelectedGender("Women")}
          className={`border px-4 py-2 rounded-lg flex items-center ${
            selectedGender === "Women" ? "bg-pink-500 text-white" : ""
          }`}
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2922/2922579.png"
            width={24}
            height={24}
            className="w-6 h-6 mr-2"
            alt="women icon"
          />
          Women
        </button>
      </div>

      <div className="mt-6">
        {selectedGender === "Women" && (
          <div
            className="border-b-4 px-4 py-2 cursor-pointer"
            onClick={toggleHaircut}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">Haircut (1)</p>
              <p>{isHaircutOpen ? "↑" : "↓"}</p>
            </div>
            {isHaircutOpen && (
              <div className="py-2 text-gray-600">
                <div className="flex w-full justify-between items-center">
                  <div>
                    <p className="font-medium text-sm text-black">
                      Haircut By Celebrity Stylist
                    </p>
                    <p className="text-xs text-gray-500">From ₹2,500</p>
                  </div>
                  <button className="shadow text-cyan-500 font-bold text-sm px-4 py-1 rounded-lg">
                    ADD
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {selectedGender === "Women" && (
          <div
            className="border-b-4 px-4 py-2 cursor-pointer"
            onClick={toggleStyling}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">Styling (5)</p>
              <p>{isStylingOpen ? "↑" : "↓"}</p>
            </div>
            {isStylingOpen && (
              <div className="py-2 text-gray-600">
                {[
                  { name: "Ironing", price: "₹1,200" },
                  { name: "Tongs", price: "₹1,200" },
                  { name: "Braiding", price: "₹1,500" },
                  { name: "Pinup", price: "₹1,800" },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-2"
                  >
                    <div>
                      <p className="font-medium text-sm text-black">
                        {service.name}
                      </p>
                      <p className="text-xs text-gray-500">From {service.price}</p>
                    </div>
                    <button className="shadow text-cyan-500 font-bold text-sm px-4 py-1 rounded-lg">
                      ADD
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
