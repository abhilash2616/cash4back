"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import BannerSkeleton from "@/components/skeleton/BannerSkeleton";
import { useScrollDisable } from "@/hooks/useScrollDisable";

const Banner = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Disable scroll when skeleton is running
    useScrollDisable(isLoading);

    const banners = [
        { img: "/assets/img/banner/banner-1.png", link: "/stores/amazon" },
        { img: "/assets/img/banner/banner-2.png", link: "/stores/flipkart" },
        { img: "/assets/img/banner/banner-3.png", link: "/stores/myntra" },
        { img: "/assets/img/banner/banner-4.png", link: "/stores/ajio" },
        { img: "/assets/img/banner/banner-5.png", link: "/stores/reliance-digital" },
        { img: "/assets/img/banner/banner-6.png", link: "/stores/nykaa" },
        { img: "/assets/img/banner/banner-7.png", link: "/stores/firstcry" },
        { img: "/assets/img/banner/banner-8.png", link: "/stores/amazon" },
        { img: "/assets/img/banner/banner-9.png", link: "/stores/flipkart" },
    ];

    useEffect(() => {
        // Simulate loading time for better UX
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Slightly longer for demo purposes

        return () => clearTimeout(timer);
    }, []);


    // Show skeleton while loading
    if (isLoading) {
        return <BannerSkeleton />;
    }

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
                                className="w-full h-auto object-cover rounded-lg cursor-pointer transition-opacity duration-300"
                                priority={index < 3}
                            />
                        </Link>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Banner;

