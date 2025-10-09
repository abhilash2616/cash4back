"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const PopularStoresCategories = () => {
    const [storesExpanded, setStoresExpanded] = useState(false);
    const [categoriesExpanded, setCategoriesExpanded] = useState(false);

    const popularStores = [
        ['Amazon', 'Booking.com', 'Croma', 'Dot and Key', 'Minimalist', 'Times Prime', 'Snitch', 'Bombay Shaving Company'],
        ['Flipkart', 'MamaEarth', 'OnePlus', 'Plum Goodness', 'GoDaddy', 'Muscleblaze', 'Pepperfry', 'Clovia'],
        ['Myntra', 'Truemeds', 'Samsung', 'Boat', 'Tata CLiQ', 'Lenskart', 'Fern N Petals', 'Earth Rhythm'],
        ['Ajio', 'XYXX Crew', 'Cleartrip', 'WoW', 'Hostinger', 'Healthkart', 'Dell', 'Shyaway'],
        ['Nykaa', 'The Derma Co', 'Mcaffeine', 'Adidas', 'GIVA', 'Udemy', 'Bella Vita']
    ];

    const popularCategories = [
        ['Lingerie', 'Refrigerators', 'Beard Shaving', 'Fashion Accessories'],
        ['Home Appliances', 'Baby Bath Products', 'Air Conditioners', 'Personal Care Appliances'],
        ['Kitchen Appliances', 'Fragrances', 'Baby Skin Care'],
        ['Baby Grooming', 'Skin Care Products', 'Air Purifiers'],
        ['Washing Machines', 'Hair Care Products', 'Electronics Products']
    ];

    return (
        <div className="w-full bg-white px-4">
            <hr className="border-gray-200 mb-8" />
            <div className="mb-8 flex justify-center flex-col">
                <button
                    onClick={() => setStoresExpanded(!storesExpanded)}
                    className="flex justify-center items-center gap-2 mb-4 text-[25px] font-bold text-black hover:text-gray-700 transition-colors"
                >
                    Popular Stores
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${storesExpanded ? 'rotate-180' : ''}`}
                    />
                </button>

                {storesExpanded && (
                    <div className="grid grid-cols-5 gap-4">
                        {popularStores.map((column, columnIndex) => (
                            <div key={columnIndex} className="space-y-2">
                                {column.map((store, storeIndex) => (
                                    <div key={storeIndex}>
                                        <Link href={`/store/${store}`} className="text-black text-sm hover:text-blue-600 cursor-pointer transition-colors">
                                            {store}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <hr className="border-gray-200 mb-8" />

            <div className="flex justify-center flex-col mb-8">
                <button
                    onClick={() => setCategoriesExpanded(!categoriesExpanded)}
                    className="flex justify-center items-center gap-2 mb-4 text-[25px] font-bold text-black hover:text-gray-700 transition-colors"
                >
                    Popular Categories
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${categoriesExpanded ? 'rotate-180' : ''}`}
                    />
                </button>

                {categoriesExpanded && (
                    <div className="grid grid-cols-5 gap-4">
                        {popularCategories.map((column, columnIndex) => (
                            <div key={columnIndex} className="space-y-2">
                                {column.map((category, categoryIndex) => (
                                    <div key={categoryIndex}>
                                        <Link href={`/category/${category}`} className="text-black text-sm hover:text-blue-600 cursor-pointer transition-colors">
                                            {category}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <hr className="border-gray-200" />
        </div>
    );
};

export default PopularStoresCategories;
