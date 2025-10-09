"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AutoBreadcrumb from '@/components/common/AutoBreadcrumb';

const CategoriesPage = () => {

    const categories = [
        { id: "biggest-sales", img: "/assets/img/categorie/biggest-sales.gif", name: "Biggest Sales", description: "Get the best deals with maximum cashback", storeCount: 25 },
        { id: "electronics", img: "/assets/img/categorie/electronics-offers.png", name: "Mobiles & Electronics", description: "Latest gadgets with amazing cashback offers", storeCount: 18 },
        { id: "fashion", img: "/assets/img/categorie/fashion-offers.png", name: "Fashion", description: "Trendy fashion with great savings", storeCount: 35 },
        { id: "home-kitchen", img: "/assets/img/categorie/home-kitchen-offers.png", name: "Home & Kitchen", description: "Everything for your home with cashback", storeCount: 22 },
        { id: "min-cashback", img: "/assets/img/categorie/min-cashback.png", name: "Min 50% Cashback", description: "Minimum 50% cashback on all purchases", storeCount: 15 },
        { id: "banking-finance", img: "/assets/img/categorie/banking-finance-offers.png", name: "Credit Cards", description: "Best credit card offers and deals", storeCount: 12 },
        { id: "beauty-grooming", img: "/assets/img/categorie/beauty-personal-care-offers.png", name: "Beauty & Grooming", description: "Beauty products with exclusive offers", storeCount: 28 },
        { id: "travel", img: "/assets/img/categorie/travel-offers.png", name: "Flights & Hotels", description: "Travel deals with maximum savings", storeCount: 8 },
        { id: "food-grocery", img: "/assets/img/categorie/food-and-grocery.png", name: "Food & Grocery", description: "Daily essentials with cashback", storeCount: 16 },
        { id: "pharmacy", img: "/assets/img/categorie/health-medicine-offers.png", name: "Pharmacy", description: "Health products with great offers", storeCount: 10 },
        { id: "new-on-ck", img: "/assets/img/categorie/new-on-ck.png", name: "New on CashKaro", description: "Latest additions to our platform", storeCount: 5 },
        { id: "education", img: "/assets/img/categorie/education-offers.png", name: "Education", description: "Educational courses and materials", storeCount: 7 },
        { id: "loans", img: "/assets/img/categorie/loans-offers.png", name: "Loans", description: "Best loan offers and deals", storeCount: 6 },
        { id: "health-wellness", img: "/assets/img/categorie/health-and-wellness.png", name: "Health & Wellness", description: "Health and wellness products", storeCount: 14 },
        { id: "departmental", img: "/assets/img/categorie/departmental-offers.png", name: "Departmental", description: "Departmental store offers", storeCount: 9 },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Categories</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover amazing deals and cashback offers across all your favorite categories.
                            Shop smart and save more with our partner stores.
                        </p>
                    </div>

                    {/* Breadcrumb */}
                    <div className="flex justify-center mt-6">
                        <AutoBreadcrumb />
                    </div>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <Link key={category.id} href={`/categories/${category.id}`}>
                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                                <div className="text-center">
                                    <div className="relative mb-6">
                                        <Image
                                            src={category.img}
                                            width={120}
                                            height={120}
                                            alt={category.name}
                                            className="w-30 h-30 rounded-full mx-auto group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {category.name}
                                    </h3>

                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {category.description}
                                    </p>

                                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                                            {category.storeCount} stores
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Categories?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We&apos;ve carefully curated the best stores and offers in each category to give you maximum value.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💰</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximum Cashback</h3>
                            <p className="text-gray-600">Get up to 9% cashback on your purchases across all categories</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🏪</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Stores</h3>
                            <p className="text-gray-600">All our partner stores are verified and trusted by millions of users</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Deals</h3>
                            <p className="text-gray-600">Exclusive deals and coupons available only through our platform</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Saving?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of users who are already saving money with our cashback platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/auth/register"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Sign Up Free
                        </Link>
                        <Link
                            href="/stores"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Browse Stores
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;
