"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
    const categories = [
        { id: "biggest-sales", img: "/assets/img/categorie/biggest-sales.gif", link: "/categories/biggest-sales", name: "Biggest Sales", },
        { id: "electronics", img: "/assets/img/categorie/electronics-offers.png", link: "/categories/electronics", name: "Mobiles & Electronics", },
        { id: "fashion", img: "/assets/img/categorie/fashion-offers.png", link: "/categories/fashion", name: "Fashion", },
        { id: "home-kitchen", img: "/assets/img/categorie/home-kitchen-offers.png", link: "/categories/home-kitchen", name: "Home & Kitchen", },
        { id: "min-cashback", img: "/assets/img/categorie/min-cashback.png", link: "/categories/min-cashback", name: "Min 50% Cashback", },
        { id: "banking-finance", img: "/assets/img/categorie/banking-finance-offers.png", link: "/categories/banking-finance", name: "Credit Cards", },
        { id: "beauty-grooming", img: "/assets/img/categorie/beauty-personal-care-offers.png", link: "/categories/beauty-grooming", name: "Beauty & Grooming", },
        { id: "travel", img: "/assets/img/categorie/travel-offers.png", link: "/categories/travel", name: "Flights & Hotels", },
        { id: "food-grocery", img: "/assets/img/categorie/food-and-grocery.png", link: "/categories/food-grocery", name: "Food & Grocery", },
        { id: "pharmacy", img: "/assets/img/categorie/health-medicine-offers.png", link: "/categories/pharmacy", name: "Pharmacy", },
        { id: "new-on-ck", img: "/assets/img/categorie/new-on-ck.png", link: "/categories/new-on-ck", name: "New on CashKaro", },
        { id: "education", img: "/assets/img/categorie/education-offers.png", link: "/categories/education", name: "Education", },
        { id: "loans", img: "/assets/img/categorie/loans-offers.png", link: "/categories/loans", name: "Loans", },
        { id: "health-wellness", img: "/assets/img/categorie/health-and-wellness.png", link: "/categories/health-wellness", name: "Health & Wellness", },
        { id: "departmental", img: "/assets/img/categorie/departmental-offers.png", link: "/categories/departmental", name: "Departmental", },
    ];

    return (
        <div className="w-full">
            <Splide
                options={{
                    perPage: 9,
                    gap: "1rem",
                    padding: { left: "6rem", right: "2rem" },
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
                aria-label="categorie Carousel"
            >
                {categories.map((categorie, index) => (
                    <SplideSlide key={index}>
                        <Link href={categorie.link} className="flex items-center cursor-pointer text-xs md:text-base font-semibold leading-4 md:leading-6 flex-col w-full h-full justify-center text-center gap-2 lg:gap-4 md:pt-3 pt-[10px] text-ck-text-inactive hover:text-ck-text-black group">
                            <Image
                                src={categorie.img}
                                width={136}
                                height={136}
                                alt={`categorie ${index + 1}`}
                                className="lg:w-[136px] lg:h-[136px] w-[73px] h-[73px] rounded-full group-hover:shadow-[0px_0px_10px_8px_rgba(0,0,0,0.06)] group-hover:border-[#DDDCE7] group-hover:border ease-in duration-300 overflow-hidden flex items-center justify-center"
                            />
                            <p className="text-[18px] font-semibold line-clamp-2">{categorie.name}</p>
                        </Link>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Categories;

