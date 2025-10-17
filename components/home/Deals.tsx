"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Deals = () => {
    const deals = [
        { img: "/assets/img/flashdeal/Vajor.png", link: "/page1", name: "Biggest Sales" },
        { img: "/assets/img/flashdeal/Vajor-1.png", link: "/page2", name: "Mobiles & Electronics" },
        { img: "/assets/img/flashdeal/Vajor-2.png", link: "/page3", name: "Fashion" },
        { img: "/assets/img/flashdeal/Vajor-3.png", link: "/page4", name: "Home & Kitchen" },
        { img: "/assets/img/flashdeal/Vajor-4.png", link: "/page5", name: "Min 50% Cashback" },
        { img: "/assets/img/flashdeal/ascsac.png", link: "/page6", name: "Credit Cards" },
        { img: "/assets/img/flashdeal/the-man-company.png", link: "/page7", name: "Beauty & Grooming" },
        { img: "/assets/img/flashdeal/Vajor-5.png", link: "/page8", name: "Flights & Hotels" },
        { img: "/assets/img/flashdeal/Vajor-6.png", link: "/page9", name: "Food & Grocery" },
        { img: "/assets/img/flashdeal/Vajor-7.png", link: "/page9", name: "Pharmacy" },
        { img: "/assets/img/flashdeal/sbi-simply.png", link: "/page9", name: "New on CashKaro" },
        { img: "/assets/img/flashdeal/Vajor-8.png", link: "/page9", name: "Education" },
        { img: "/assets/img/flashdeal/Vajor-9.png", link: "/page9", name: "Loans" },
        { img: "/assets/img/flashdeal/Vajor-10.png", link: "/page9", name: "Health & Wellness" },
        { img: "/assets/img/flashdeal/Vajor-11.png", link: "/page9", name: "Departmental" },
        { img: "/assets/img/flashdeal/Vajor-12.png", link: "/page9", name: "Departmental" },
        { img: "/assets/img/flashdeal/Vajor-13.png", link: "/page9", name: "Departmental" },
        { img: "/assets/img/flashdeal/Vajor-14.png", link: "/page9", name: "Departmental" },
        { img: "/assets/img/flashdeal/Vajor-15.png", link: "/page9", name: "Departmental" },
        { img: "/assets/img/flashdeal/Vajor-16.png", link: "/page9", name: "Departmental" },
        { img: "/assets/img/flashdeal/Vajor-17.png", link: "/page9", name: "Departmental" },
        { img: "/assets/img/flashdeal/Vajor-18.png", link: "/page9", name: "Departmental" },
        { img: "/assets/img/flashdeal/Vajor-19.png", link: "/page9", name: "Departmental" },
        { img: "/assets/img/flashdeal/Vajor-20.png", link: "/page9", name: "Departmental" },
    ];

    const brands = [
        { img: "/assets/img/flashdeal/strch-coupons.jpg" },
        { img: "/assets/img/flashdeal/clove-oral-care-coupons.jpg" },
        { img: "/assets/img/flashdeal/nutrabay-offers-test.png" },
        { img: "/assets/img/flashdeal/times-prime-coupons.jpg" },
        { img: "/assets/img/flashdeal/bank-karo-axis-flipkart.png" },
        { img: "/assets/img/flashdeal/bajaj-prime-coupons.png" },
        { img: "/assets/img/flashdeal/themancompany-coupons-hide.jpg" },
        { img: "/assets/img/flashdeal/fitspire-coupons.png" },
        { img: "/assets/img/flashdeal/cleevo-offers.png" },
        { img: "/assets/img/flashdeal/house-of-koala-offers.png" },
        { img: "/assets/img/flashdeal/simply-click-sbi-card.png" },
        { img: "/assets/img/flashdeal/gonoise-coupons.jpg" },
        { img: "/assets/img/flashdeal/ott-play-coupons-test.png" },
        { img: "/assets/img/flashdeal/hyugalife-coupons.jpg" },
        { img: "/assets/img/flashdeal/koparoclean-coupons.jpg" },
        { img: "/assets/img/flashdeal/clove-oral-care-coupons.jpg" },
        { img: "/assets/img/flashdeal/theurbannestco-coupons.png" },
        { img: "/assets/img/flashdeal/bombay-shaving-company.png" },
        { img: "/assets/img/flashdeal/fitspire-coupons.png" },
        { img: "/assets/img/flashdeal/nutrabay-offers-test.png" },
        { img: "/assets/img/flashdeal/nutriburst-india-coupons-test.png" },
        { img: "/assets/img/flashdeal/la-mujer-coupons-test.png" },
        { img: "/assets/img/flashdeal/aevya-coupons.png" },
        { img: "/assets/img/flashdeal/ceazur-coupons.jpg" },
    ];

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
                            href={deal.link}
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
                                <div className="absolute top-[19%] md:top-[19%] left-2.5 flex items-center overflow-hidden lg:!top-[19%] ">
                                    {/* Brand Img */}
                                    <Image
                                        src={brands[index]?.img || ""}
                                        width={100}
                                        height={60}
                                        alt={`brand ${index + 1}`}
                                        className="!border-[1.5px] !border-[#F5F7F9] object-contain bg-white w-[72px] h-10 md:w-[84px] md:h-12 2xl:w-[108px] 2xl:h-[60px] mr-2 rounded-lg lg:rounded-xl overflow-hidden"
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
    );
};

export default Deals;
