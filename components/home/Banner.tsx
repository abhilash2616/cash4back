"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    const banners = [
        { img: "/assets/img/banner/banner-1.png", link: "/page1" },
        { img: "/assets/img/banner/banner-2.png", link: "/page2" },
        { img: "/assets/img/banner/banner-3.png", link: "/page3" },
        { img: "/assets/img/banner/banner-4.png", link: "/page4" },
        { img: "/assets/img/banner/banner-5.png", link: "/page5" },
        { img: "/assets/img/banner/banner-6.png", link: "/page6" },
        { img: "/assets/img/banner/banner-7.png", link: "/page7" },
        { img: "/assets/img/banner/banner-8.png", link: "/page8" },
        { img: "/assets/img/banner/banner-9.png", link: "/page9" },
    ];

    return (
        <div className="w-full">
            <Splide
                options={{
                    perPage: 3,
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
                aria-label="Banner Carousel"
            >
                {banners.map((banner, index) => (
                    <SplideSlide key={index}>
                        <Link href={banner.link}>
                            <Image
                                src={banner.img}
                                width={580}
                                height={250}
                                alt={`Banner ${index + 1}`}
                                className="w-full h-auto object-cover rounded-lg cursor-pointer"
                            />
                        </Link>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Banner;

