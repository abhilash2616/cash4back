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
    { id: 1, img: "/assets/img/brands/adidas.jpg", link: "/page1", reward: "Upto 8% Cashback", tag: "sale is live", },
    { id: 2, img: "/assets/img/brands/ajio-coupons.jpg", link: "/page2", reward: "Flat 6% Cashback", tag: "mega offer", },
    { id: 3, img: "/assets/img/brands/amazon.jpg", link: "/page3", reward: "Upto 5% Cashback", tag: "exclusive deal", },
    { id: 4, img: "/assets/img/brands/biba-coupons.jpg", link: "/page4", reward: "Upto 7% Cashback", tag: "fashion sale", },
    { id: 5, img: "/assets/img/brands/clove-oral-care-coupons.jpg", link: "/page5", reward: "Upto 9% Cashback", tag: "health care", },
    { id: 6, img: "/assets/img/brands/dotandkey-coupons.png", link: "/page6", reward: "Upto 12% Cashback", tag: "skincare", },
    { id: 7, img: "/assets/img/brands/firstcry.jpg", link: "/page7", reward: "Upto 9% Cashback", tag: "baby care", },
    { id: 8, img: "/assets/img/brands/flipkart.png", link: "/page8", reward: "Upto 4% Cashback", tag: "big billion", },
    { id: 9, img: "/assets/img/brands/hk-vitals-coupons.jpg", link: "/page9", reward: "Upto 11% Cashback", tag: "health store", },
    { id: 10, img: "/assets/img/brands/hyugalife-coupons.jpg", link: "/page10", reward: "Upto 8% Cashback", tag: "wellness", },
    { id: 11, img: "/assets/img/brands/indigo-hotels-coupons.png", link: "/page11", reward: "Upto 15% Cashback", tag: "travel", },
    { id: 12, img: "/assets/img/brands/mama-earth-coupons-hide.jpg", link: "/page12", reward: "Upto 10% Cashback", tag: "natural care", },
    { id: 13, img: "/assets/img/brands/mcaffeine-coupons.jpg", link: "/page13", reward: "Upto 13% Cashback", tag: "coffee", },
    { id: 14, img: "/assets/img/brands/mokobara-coupon-codes-test.png", link: "/page14", reward: "Upto 6% Cashback", tag: "lifestyle", },
    { id: 15, img: "/assets/img/brands/neurogum-coupons-test.png", link: "/page15", reward: "Upto 14% Cashback", tag: "supplements", },
    { id: 16, img: "/assets/img/brands/nike-offers.jpg", link: "/page16", reward: "Upto 7% Cashback", tag: "sports", },
    { id: 17, img: "/assets/img/brands/reliancedigital-coupons.png", link: "/page17", reward: "Upto 5% Cashback", tag: "electronics", },
    { id: 18, img: "/assets/img/brands/sbi-elite-credit-card.png", link: "/page18", reward: "Upto 20% Cashback", tag: "banking", },
    { id: 19, img: "/assets/img/brands/strch-coupons.jpg", link: "/page19", reward: "Upto 8% Cashback", tag: "fashion", },
    { id: 20, img: "/assets/img/brands/thedermaco-coupons.jpg", link: "/page20", reward: "Upto 11% Cashback", tag: "dermatology", },
    { id: 21, img: "/assets/img/brands/truemeds-coupon-code.jpg", link: "/page21", reward: "Upto 10% Cashback", tag: "pharmacy", },
    { id: 22, img: "/assets/img/brands/uniqlo-coupons.jpg", link: "/page22", reward: "Upto 6% Cashback", tag: "apparel", },
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
          padding: { left: "2rem", right: "1rem" },
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