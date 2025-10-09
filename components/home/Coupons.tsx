"use client";

import Image from 'next/image';
import Link from 'next/link';

const Coupons = () => {
    const coupons = [
        {
            img: "/assets/img/brands/amazon.jpg",
            link: "/amazon",
            name: "Amazon Rewards",
            discount: "Upto 80% Off",
            cashback: "Upto 5% Rewards",
            expires: "31-10-2025"
        },
        {
            img: "/assets/img/brands/flipkart.png",
            link: "/flipkart",
            name: "Flipkart Cashback",
            discount: "Upto 90% Off",
            cashback: "Upto 7% Cashback",
            expires: "31-10-2025"
        },
        {
            img: "/assets/img/brands/myntra.jpg",
            link: "/myntra",
            name: "Myntra Cashback",
            discount: "Upto 90% Off",
            cashback: "Upto 8% Cashback",
            expires: "31-10-2025"
        },
        {
            img: "/assets/img/brands/ajio-coupons.jpg",
            link: "/ajio",
            name: "Ajio Cashback",
            discount: "Upto 90% Off",
            cashback: "Upto 8% Cashback",
            expires: "31-10-2025"
        },
        {
            img: "/assets/img/brands/reliancedigital-coupons.png",
            link: "/croma",
            name: "Croma Cashback",
            discount: "Upto 70% Off",
            cashback: "Upto 3% Cashback",
            expires: "31-10-2025"
        },
    ];

    return (
        <div className="w-full flex flex-wrap justify-center items-center gap-4 py-8">
            {coupons.map((coupon, index) => (
                <div className='w-[200px] h-[280px] flex flex-col border rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300' key={index}>
                    {/* Top Section - Blue Header */}
                    <div className='bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-3 flex items-center justify-center'>
                        <p className='text-white text-center text-sm font-semibold'>{coupon.name}</p>
                    </div>
                    
                    {/* Middle Section - Logo */}
                    <div className='bg-white px-4 py-6 flex items-center justify-center flex-1'>
                        <div className='bg-white rounded-lg p-4'>
                            <Link href={coupon.link}>
                                <Image
                                    src={coupon.img}
                                    alt={coupon.name}
                                    width={80}
                                    height={60}
                                    className="w-full h-auto object-contain"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='bg-white px-4 py-4 space-y-2'>
                        <p className='text-gray-700 text-sm text-center'>{coupon.discount}</p>
                        <p className='text-blue-600 text-lg font-bold text-center'>{coupon.cashback}</p>
                        <p className='text-gray-500 text-xs text-center'>Expires: {coupon.expires}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Coupons