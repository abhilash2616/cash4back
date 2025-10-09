"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface Brand {
  id: number;
  img: string;
  link: string;
  reward: string;
  tag: string;
}

const MostPopularBrands = () => {
  const brands: Brand[] = [
    { id: 1, img: "/assets/img/brands/amazon.jpg", link: "/page1", reward: "Upto 8% Rewards", tag: "sale is live", },
    { id: 2, img: "/assets/img/brands/flipkart.jpg", link: "/page2", reward: "Flat 6% Rewards", tag: "mega offer", },
    { id: 3, img: "/assets/img/brands/ajio-coupons.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 4, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 5, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 6, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 7, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 8, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 9, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 10, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 11, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 12, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 13, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 14, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 15, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 16, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 17, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 18, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 19, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", },
    { id: 20, img: "/assets/img/brands/myntra.jpg", link: "/page3", reward: "Upto 10% Rewards", tag: "exclusive deal", }
  ];

  const chunkArray = (arr: Brand[], size: number) => {
    const result: Brand[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const brandPairs = chunkArray(brands, 2);

  return (
    <div className="py-8">
      <Splide
        options={{
          perPage: 6,
          gap: "1rem",
          rewind: true,
          padding: { left: "6rem", right: "2rem" },
          pagination: false,
          autoplay: false,
          breakpoints: {
            1024: {
              perPage: 2,
              padding: { left: "1rem", right: "1rem" },
            },
            640: {
              perPage: 1,
              padding: { left: "0.5rem", right: "0.5rem" },
            },
          },
        }}
      >
        {brandPairs.map((pair, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col gap-4">
              {pair.map((brand) => (
                <Link href={brand.link} key={brand.id}>
                  <div className="w-full border rounded-[20px] overflow-hidden">
                    <div className="bg-red-200 px-4 py-2">
                      <p className="text-center text-red-500 text-[15px] font-semibold capitalize">
                        {brand.tag}
                      </p>
                    </div>
                    <div className="p-6">
                      <Image
                        src={brand.img}
                        width={380}
                        height={176}
                        alt={brand.link}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center mb-3">
                      <Button
                        variant="default"
                        className="bg-blue-800 rounded-[10px] px-10 py-4 text-[15px] text-white font-semibold"
                      >
                        {brand.reward}
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MostPopularBrands;