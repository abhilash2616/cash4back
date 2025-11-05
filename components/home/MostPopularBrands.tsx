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
    { id: 1, img: "/assets/img/brands/adidas.jpg", link: "/stores/adidas", reward: "Upto 8% Cashback", tag: "sale is live", },
    { id: 2, img: "/assets/img/brands/ajio-coupons.jpg", link: "/stores/ajio", reward: "Flat 6% Cashback", tag: "mega offer", },
    { id: 3, img: "/assets/img/brands/amazon.jpg", link: "/stores/amazon", reward: "Upto 5% Cashback", tag: "exclusive deal", },
    { id: 4, img: "/assets/img/brands/biba-coupons.jpg", link: "/stores/biba", reward: "Upto 7% Cashback", tag: "fashion sale", },
    { id: 5, img: "/assets/img/brands/clove-oral-care-coupons.jpg", link: "/stores/clove-oral-care", reward: "Upto 9% Cashback", tag: "health care", },
    { id: 6, img: "/assets/img/brands/dotandkey-coupons.png", link: "/stores/dotandkey", reward: "Upto 12% Cashback", tag: "skincare", },
    { id: 7, img: "/assets/img/brands/firstcry.jpg", link: "/stores/firstcry", reward: "Upto 9% Cashback", tag: "baby care", },
    { id: 8, img: "/assets/img/brands/flipkart.png", link: "/stores/flipkart", reward: "Upto 4% Cashback", tag: "big billion", },
    { id: 9, img: "/assets/img/brands/hk-vitals-coupons.jpg", link: "/stores/hk-vitals", reward: "Upto 11% Cashback", tag: "health store", },
    { id: 10, img: "/assets/img/brands/hyugalife-coupons.jpg", link: "/stores/hyugalife", reward: "Upto 8% Cashback", tag: "wellness", },
    { id: 11, img: "/assets/img/brands/indigo-hotels-coupons.png", link: "/stores/indigo-hotels", reward: "Upto 15% Cashback", tag: "travel", },
    { id: 12, img: "/assets/img/brands/mama-earth-coupons-hide.jpg", link: "/stores/mama-earth", reward: "Upto 10% Cashback", tag: "natural care", },
    { id: 13, img: "/assets/img/brands/mcaffeine-coupons.jpg", link: "/stores/mcaffeine", reward: "Upto 13% Cashback", tag: "coffee", },
    { id: 14, img: "/assets/img/brands/mokobara-coupon-codes-test.png", link: "/stores/mokobara", reward: "Upto 6% Cashback", tag: "lifestyle", },
    { id: 15, img: "/assets/img/brands/neurogum-coupons-test.png", link: "/stores/neurogum", reward: "Upto 14% Cashback", tag: "supplements", },
    { id: 16, img: "/assets/img/brands/nike-offers.jpg", link: "/stores/nike", reward: "Upto 7% Cashback", tag: "sports", },
    { id: 17, img: "/assets/img/brands/reliancedigital-coupons.png", link: "/stores/reliance-digital", reward: "Upto 5% Cashback", tag: "electronics", },
    { id: 18, img: "/assets/img/brands/sbi-elite-credit-card.png", link: "/stores/sbi-elite", reward: "Upto 20% Cashback", tag: "banking", },
    { id: 19, img: "/assets/img/brands/strch-coupons.jpg", link: "/stores/strch", reward: "Upto 8% Cashback", tag: "fashion", },
    { id: 20, img: "/assets/img/brands/thedermaco-coupons.jpg", link: "/stores/thedermaco", reward: "Upto 11% Cashback", tag: "dermatology", },
    { id: 21, img: "/assets/img/brands/truemeds-coupon-code.jpg", link: "/stores/truemeds", reward: "Upto 10% Cashback", tag: "pharmacy", },
    { id: 22, img: "/assets/img/brands/uniqlo-coupons.jpg", link: "/stores/uniqlo", reward: "Upto 6% Cashback", tag: "apparel", },
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