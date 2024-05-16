"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import carousel1 from './assets/Images/carousel1.png'
import carousel2 from './assets/Images/carousel2.png'
import carousel3 from './assets/Images/carousel3.png'
import {
  Carousel
} from "@material-tailwind/react";
export default function Home() {
  // useEffect(() => {
  //   const productResponse = fetch('/api/product')
  //     .then(response => console.log('res:', response))
  //   console.log('object', productResponse)
  // },[])
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const productResponse = await fetch('api/products');
      console.log('productResponse', productResponse)
      if (!productResponse.ok) {
        throw new Error('Network productResponse was not ok');
      }
      const data = await productResponse.json();
      console.log(data);
      return data
      // Redirect or perform other actions based on the response
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 py-10">
      <Carousel
        // ref={carouselRef}
        transition={{ duration: 2 }}
        className="carousel rounded-xl"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Image src={carousel1} alt="Carousel 1" className="h-full w-full object-cover" />
        <Image src={carousel2} alt="Carousel 2" className="h-full w-full object-cover" />
        <Image src={carousel3} alt="Carousel 3" className="h-full w-full object-cover" />
      </Carousel>
      <div>
        <div>
          <h4 onClick={handleSubmit}>Best Deals on SmartPhones</h4>
        </div>
        <div className="w-96">
          <div className="h-80">
            {/* <Image src="" alt="profile-picture" /> */}
          </div>
          <div className="text-center">
            <h4 color="blue-gray" className="mb-2">
              Natalie Paisley
            </h4>
            <span color="blue-gray" className="font-medium">
              CEO / Co-Founder
            </span>
          </div>
          <div className="flex justify-center gap-7 pt-2">
          </div>
        </div>
      </div>
    </main>
  );
}
