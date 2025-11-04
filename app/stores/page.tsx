"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AutoBreadcrumb from '@/components/common/AutoBreadcrumb';
import PopularStore from '@/components/store/PopularStore';

const StoresPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLetter, setSelectedLetter] = useState('all');

    const stores = React.useMemo(() => [
        {
            id: "amazon",
            name: "Amazon",
            logo: "/assets/img/brands/amazon.jpg",
            cashbackRate: "5%",
            category: "general",
            isVerified: true,
            description: "Shop everything from electronics to fashion with amazing deals and fast delivery",
            featured: true,
            website: "amazon.in",
            rating: 4.8,
            totalUsers: 5000000,
            establishedYear: 1994,
            headquarters: "Seattle, USA",
            specialties: ["Electronics", "Books", "Fashion", "Home & Kitchen", "Grocery"]
        },
        {
            id: "ajio",
            name: "Ajio",
            logo: "/assets/img/brands/ajio-coupons.jpg",
            cashbackRate: "7%",
            category: "fashion",
            isVerified: true,
            description: "Reliance's fashion platform with trendy collections",
            featured: false,
            website: "ajio.com",
            rating: 4.3,
            totalUsers: 1500000,
            establishedYear: 2016,
            headquarters: "Mumbai, India",
            specialties: ["Fashion", "Beauty", "Accessories", "Footwear"]
        },
        {
            id: "bigbasket",
            name: "BigBasket",
            logo: "/assets/img/categorie/food-and-grocery.png",
            cashbackRate: "3%",
            category: "grocery",
            isVerified: true,
            description: "India's largest online grocery store",
            featured: false,
            website: "bigbasket.com",
            rating: 4.2,
            totalUsers: 1200000,
            establishedYear: 2011,
            headquarters: "Bangalore, India",
            specialties: ["Grocery", "Fresh Produce", "Household Items", "Personal Care"]
        },
        {
            id: "bookmyshow",
            name: "BookMyShow",
            logo: "/assets/img/categorie/entertainment-offers.png",
            cashbackRate: "2%",
            category: "entertainment",
            isVerified: true,
            description: "Book movie tickets, events, and shows online",
            featured: false,
            website: "bookmyshow.com",
            rating: 4.1,
            totalUsers: 800000,
            establishedYear: 2007,
            headquarters: "Mumbai, India",
            specialties: ["Movies", "Events", "Sports", "Concerts"]
        },
        {
            id: "croma",
            name: "Croma",
            logo: "/assets/img/bigdiscount/computer.png",
            cashbackRate: "4%",
            category: "electronics",
            isVerified: true,
            description: "Tata's electronics and digital products store",
            featured: false,
            website: "croma.com",
            rating: 4.0,
            totalUsers: 500000,
            establishedYear: 2006,
            headquarters: "Mumbai, India",
            specialties: ["Electronics", "Mobile Phones", "Laptops", "Home Appliances"]
        },
        {
            id: "dominos",
            name: "Domino's",
            logo: "/assets/img/categorie/food-and-grocery.png",
            cashbackRate: "3%",
            category: "food",
            isVerified: true,
            description: "Pizza delivery and takeaway",
            featured: false,
            website: "dominos.co.in",
            rating: 4.3,
            totalUsers: 600000,
            establishedYear: 1996,
            headquarters: "Mumbai, India",
            specialties: ["Pizza", "Fast Food", "Beverages", "Desserts"]
        },
        {
            id: "firstcry",
            name: "FirstCry",
            logo: "/assets/img/brands/firstcry.jpg",
            cashbackRate: "9%",
            category: "kids",
            isVerified: true,
            description: "Everything for your little ones - from baby care to kids fashion",
            featured: false,
            website: "firstcry.com",
            rating: 4.5,
            totalUsers: 600000,
            establishedYear: 2010,
            headquarters: "Pune, India",
            specialties: ["Baby Care", "Kids Fashion", "Toys", "Books", "School Supplies"]
        },
        {
            id: "flipkart",
            name: "Flipkart",
            logo: "/assets/img/brands/flipkart.png",
            cashbackRate: "4%",
            category: "general",
            isVerified: true,
            description: "India's leading e-commerce platform with millions of products",
            featured: true,
            website: "flipkart.com",
            rating: 4.6,
            totalUsers: 3000000,
            establishedYear: 2007,
            headquarters: "Bangalore, India",
            specialties: ["Electronics", "Fashion", "Home & Kitchen", "Books", "Sports"]
        },
        {
            id: "grofers",
            name: "Grofers",
            logo: "/assets/img/categorie/food-and-grocery.png",
            cashbackRate: "2%",
            category: "grocery",
            isVerified: true,
            description: "Online grocery delivery service",
            featured: false,
            website: "grofers.com",
            rating: 4.0,
            totalUsers: 400000,
            establishedYear: 2013,
            headquarters: "Gurgaon, India",
            specialties: ["Grocery", "Fresh Produce", "Household Items"]
        },
        {
            id: "make-my-trip",
            name: "MakeMyTrip",
            logo: "/assets/img/categorie/travel-offers.png",
            cashbackRate: "3%",
            category: "travel",
            isVerified: true,
            description: "Book flights, hotels, and holiday packages",
            featured: false,
            website: "makemytrip.com",
            rating: 4.2,
            totalUsers: 700000,
            establishedYear: 2000,
            headquarters: "Gurgaon, India",
            specialties: ["Flights", "Hotels", "Holidays", "Buses", "Trains"]
        },
        {
            id: "myntra",
            name: "Myntra",
            logo: "/assets/img/brands/myntra.jpg",
            cashbackRate: "8%",
            category: "fashion",
            isVerified: true,
            description: "India's leading fashion destination with latest trends",
            featured: true,
            website: "myntra.com",
            rating: 4.5,
            totalUsers: 2000000,
            establishedYear: 2007,
            headquarters: "Bangalore, India",
            specialties: ["Fashion", "Beauty", "Accessories", "Footwear", "Lifestyle"]
        },
        {
            id: "nykaa",
            name: "Nykaa",
            logo: "/assets/img/categorie/beauty-personal-care-offers.png",
            cashbackRate: "7%",
            category: "beauty",
            isVerified: true,
            description: "India's leading beauty and personal care destination",
            featured: false,
            website: "nykaa.com",
            rating: 4.3,
            totalUsers: 800000,
            establishedYear: 2012,
            headquarters: "Mumbai, India",
            specialties: ["Beauty", "Personal Care", "Skincare", "Makeup", "Hair Care"]
        },
        {
            id: "paytm-mall",
            name: "Paytm Mall",
            logo: "/assets/img/categorie/departmental-offers.png",
            cashbackRate: "3%",
            category: "general",
            isVerified: true,
            description: "Online shopping with Paytm cashback",
            featured: false,
            website: "paytmmall.com",
            rating: 4.1,
            totalUsers: 900000,
            establishedYear: 2017,
            headquarters: "Noida, India",
            specialties: ["Electronics", "Fashion", "Home & Kitchen", "Books"]
        },
        {
            id: "reliance-digital",
            name: "Reliance Digital",
            logo: "/assets/img/brands/reliancedigital-coupons.png",
            cashbackRate: "5%",
            category: "electronics",
            isVerified: true,
            description: "Your one-stop destination for all electronics and digital products",
            featured: true,
            website: "reliancedigital.com",
            rating: 4.4,
            totalUsers: 1000000,
            establishedYear: 2007,
            headquarters: "Mumbai, India",
            specialties: ["Electronics", "Mobile Phones", "Laptops", "Home Appliances", "Gaming"]
        },
        {
            id: "swiggy",
            name: "Swiggy",
            logo: "/assets/img/categorie/food-and-grocery.png",
            cashbackRate: "2%",
            category: "food",
            isVerified: true,
            description: "Food delivery from your favorite restaurants",
            featured: false,
            website: "swiggy.com",
            rating: 4.4,
            totalUsers: 1500000,
            establishedYear: 2014,
            headquarters: "Bangalore, India",
            specialties: ["Food Delivery", "Restaurants", "Groceries", "Alcohol"]
        },
        {
            id: "zomato",
            name: "Zomato",
            logo: "/assets/img/categorie/food-and-grocery.png",
            cashbackRate: "2%",
            category: "food",
            isVerified: true,
            description: "Discover and order food from restaurants",
            featured: false,
            website: "zomato.com",
            rating: 4.3,
            totalUsers: 1200000,
            establishedYear: 2008,
            headquarters: "Gurgaon, India",
            specialties: ["Food Delivery", "Restaurants", "Dining", "Reviews"]
        }
    ], []);

    // Categories for filtering
    const categories = [
        { id: 'all', label: 'All Stores', count: stores.length },
        { id: 'general', label: 'General', count: stores.filter(s => s.category === 'general').length },
        { id: 'fashion', label: 'Fashion', count: stores.filter(s => s.category === 'fashion').length },
        { id: 'electronics', label: 'Electronics', count: stores.filter(s => s.category === 'electronics').length },
        { id: 'food', label: 'Food', count: stores.filter(s => s.category === 'food').length },
        { id: 'grocery', label: 'Grocery', count: stores.filter(s => s.category === 'grocery').length },
        { id: 'beauty', label: 'Beauty', count: stores.filter(s => s.category === 'beauty').length },
        { id: 'kids', label: 'Kids', count: stores.filter(s => s.category === 'kids').length },
        { id: 'travel', label: 'Travel', count: stores.filter(s => s.category === 'travel').length },
        { id: 'entertainment', label: 'Entertainment', count: stores.filter(s => s.category === 'entertainment').length }
    ];

    // Alphabet letters for filtering
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Filter and sort stores
    const filteredAndSortedStores = React.useMemo(() => {
        let filtered = stores;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(store =>
                store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                store.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(store => store.category === selectedCategory);
        }

        // Filter by letter
        if (selectedLetter !== 'all') {
            filtered = filtered.filter(store =>
                store.name.charAt(0).toUpperCase() === selectedLetter
            );
        }

        // Sort alphabetically
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
    }, [searchTerm, selectedCategory, selectedLetter, stores]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-6">
                    {/* Breadcrumb */}
                    <div className="mb-6">
                        <AutoBreadcrumb />
                    </div>

                    {/* Main Heading */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">All Stores</h1>
                        <p className="text-gray-600">Discover amazing cashback offers from our partner stores</p>
                    </div>

                    {/* Alphabet Filter */}
                    <div className="mb-6">
                        <div className="mb-3">
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Filter by Letter</h3>
                        </div>
                        <div className="">
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setSelectedLetter('all')}
                                    className={`px-4 py-2.5 rounded-[10px] text-sm font-semibold transition-all duration-200 shadow-sm cursor-pointer ${selectedLetter === 'all'
                                        ? 'bg-[#0036da] text-white shadow-md scale-105 rounded-[10px]'
                                        : 'bg-white text-gray-700 hover:bg-[#0036da] hover:text-white rounded-[10px] hover:shadow-md border border-[#E0E0E0]'
                                        }`}
                                >
                                    All
                                </button>
                                {alphabet.map((letter) => {
                                    const hasStores = stores.some(store =>
                                        store.name.charAt(0).toUpperCase() === letter
                                    );
                                    return (
                                        <button
                                            key={letter}
                                            onClick={() => setSelectedLetter(letter)}
                                            disabled={!hasStores}
                                            className={`px-3.5 py-2.5 rounded-[10px] text-sm font-semibold transition-all duration-200 shadow-sm min-w-[2.5rem] ${selectedLetter === letter
                                                ? 'bg-[#0036da] text-white shadow-md scale-105'
                                                : hasStores
                                                    ? 'bg-white text-gray-700 hover:bg-[#0036da] hover:text-white rounded-[10px] hover:shadow-md border border-[#E0E0E0]'
                                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50 border border-[#E0E0E0]'
                                                }`}
                                        >
                                            {letter}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* All Stores Grid */}
            <div className="container mx-auto px-4 py-8">
                {filteredAndSortedStores.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredAndSortedStores.map((store) => (
                            <Link key={store.id} href={`/stores/${store.id}`}>
                                <div className="bg-white rounded-[20px] md:h-[300px] h-auto shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 cursor-pointer group">
                                    <div className="text-center">
                                        <div className="relative mb-4">
                                            <div className="w-20 h-20 rounded-lg flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                                                <Image
                                                    src={store.logo}
                                                    alt={`${store.name} logo`}
                                                    width={64}
                                                    height={64}
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                {store.name}
                                            </h3>
                                            {store.featured && (
                                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                                    Featured
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                                            {store.description}
                                        </p>

                                        <div className="flex items-center justify-center gap-2 mb-3">
                                            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                                                {store.cashbackRate} cashback
                                            </span>
                                            <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                                                {store.rating}
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </span>
                                        </div>

                                        <div className="text-xs text-gray-500">
                                            {store.totalUsers.toLocaleString()} users
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-500 text-lg mb-4">No stores found</div>
                        <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>

            {/* Stats Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Partner Stores?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We&apos;ve carefully selected the best stores to give you maximum value and savings.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximum Cashback</h3>
                            <p className="text-gray-600">Get up to 9% cashback on your purchases across all partner stores</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Stores</h3>
                            <p className="text-gray-600">All our partner stores are verified and trusted by millions of users</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Deals</h3>
                            <p className="text-gray-600">Exclusive deals and coupons available only through our platform</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StoresPage;
