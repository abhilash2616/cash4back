"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AutoBreadcrumb from '@/components/common/AutoBreadcrumb';

const StoresPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLetter, setSelectedLetter] = useState('all');

    const stores = React.useMemo(() => [
        {
            id: "amazon",
            name: "Amazon",
            logo: "🛒",
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
            logo: "🛍️",
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
            logo: "🛒",
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
            logo: "🎬",
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
            logo: "📱",
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
            logo: "🍕",
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
            logo: "👶",
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
            logo: "📱",
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
            logo: "🛒",
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
            logo: "✈️",
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
            logo: "👗",
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
            logo: "💄",
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
            logo: "🛍️",
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
            logo: "📺",
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
            logo: "🍔",
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
            logo: "🍽️",
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

                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative max-w-md">
                            <input
                                type="text"
                                placeholder="Search stores..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        selectedCategory === category.id
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {category.label} ({category.count})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Alphabet Filter */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-1">
                            <button
                                onClick={() => setSelectedLetter('all')}
                                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                                    selectedLetter === 'all'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                All
                            </button>
                            {alphabet.map((letter) => (
                                <button
                                    key={letter}
                                    onClick={() => setSelectedLetter(letter)}
                                    className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                                        selectedLetter === letter
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stores Grid */}
            <div className="container mx-auto px-4 py-8">
                {filteredAndSortedStores.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredAndSortedStores.map((store) => (
                            <Link key={store.id} href={`/stores/${store.id}`}>
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 cursor-pointer group">
                                    <div className="text-center">
                                        <div className="relative mb-4">
                                            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-3xl mx-auto group-hover:scale-105 transition-transform duration-300">
                                                {store.logo}
                                            </div>
                                            {store.isVerified && (
                                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-xs">✓</span>
                                                </div>
                                            )}
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
                                            <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                                                {store.rating} ⭐
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
                                <span className="text-2xl">💰</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximum Cashback</h3>
                            <p className="text-gray-600">Get up to 9% cashback on your purchases across all partner stores</p>
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
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Shopping?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of users who are already saving money with our cashback platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/categories"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Browse Categories
                        </Link>
                        <Link
                            href="/auth/register"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Sign Up Free
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoresPage;
