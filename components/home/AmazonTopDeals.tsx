"use client"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { amazonData } from "@/data/brands"

const AmazonTopDeals = () => {
  const deals = [
    { img: "/assets/img/amazon-top-deals/beauty.png", slug: "biggest-sales", name: "Biggest Sales" },
    { img: "/assets/img/amazon-top-deals/fashion.png", slug: "mobiles-electronics", name: "Mobiles & Electronics" },
    { img: "/assets/img/amazon-top-deals/homeImp.png", slug: "fashion", name: "Fashion" },
    { img: "/assets/img/amazon-top-deals/luggage.png", slug: "home-kitchen", name: "Home & Kitchen" },
    { img: "/assets/img/amazon-top-deals/shoes.png", slug: "min-50-cashback", name: "Min 50% Cashback" },
    { img: "/assets/img/amazon-top-deals/sports.png", slug: "credit-cards", name: "Credit Cards" },
    { img: "/assets/img/amazon-top-deals/watches.png", slug: "beauty-grooming", name: "Beauty & Grooming" },
  ]
  return (
    <div className="w-full">
      <Splide
        options={{
          perPage: 4,
          gap: "1rem",
          padding: { left: "2rem", right: "1rem" },
          autoplay: false,
          interval: 5000,
          pauseOnHover: true,
          arrows: true,
          pagination: false,
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
        aria-label="deal Carousel"
      >
        {deals.map((deal, index) => (
          <SplideSlide key={index}>
            <Link
              href={`/top-deals/${deal.slug}`}
              className="flex items-center justify-center overflow-hidden rounded-xl relative w-full h-full cursor-pointer"
            >
              <div className="w-full h-full">
                <Image
                  src={deal.img}
                  width={435}
                  height={343}
                  alt={`deal ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="w-full absolute inset-0 z-10">
                <div className="absolute top-[19%] md:top-[10%] left-2.5 flex items-center overflow-hidden lg:!top-[10%] ">
                  {/* Brand Img */}
                  <Image
                    src={amazonData.logo}
                    width={100}
                    height={60}
                    alt="Amazon"
                    className="!border-[1.5px] !border-[#F5F7F9] object-contain bg-white w-[72px] h-10 md:w-[84px] md:h-12 2xl:w-[108px] 2xl:h-[60px] mr-2 rounded-[5px] lg:rounded-[10px] overflow-hidden"
                  />

                </div>
                <Button variant="default" className="absolute bottom-2.5 2xl:bottom-3 right-2.5 2xl:right-3 bg-white rounded-[5px] font-semibold text-[15px] border-none text-black cursor-pointer">
                  Grab Deal
                </Button>
              </div>

            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default AmazonTopDeals
