"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AutoBreadcrumb from '@/components/common/AutoBreadcrumb';

const CategoriesPage = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [sortBy, setSortBy] = useState('popularity');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const sortOptions = [
        { value: 'popularity', label: 'Popularity' },
        { value: 'cashback', label: 'Cashback %' },
        { value: 'newest', label: 'Newest' },
        { value: 'alphabetical', label: 'A-Z' }
    ];

    const tabs = [
        { id: 'all', label: 'All Categories', count: 15 },
        { id: 'electronics', label: 'Electronics', count: 3 },
        { id: 'fashion', label: 'Fashion', count: 4 },
        { id: 'home', label: 'Home & Kitchen', count: 2 },
        { id: 'beauty', label: 'Beauty & Personal Care', count: 3 },
        { id: 'health', label: 'Health & Wellness', count: 2 },
        { id: 'travel', label: 'Travel', count: 1 }
    ];

    const categories = React.useMemo(() => [
        { id: "biggest-sales", img: "/assets/img/categorie/biggest-sales.gif", name: "Biggest Sales", description: "Get the best deals with maximum cashback", storeCount: 25, category: "all", cashback: 9, isNew: false },
        { id: "electronics", img: "/assets/img/categorie/electronics-offers.png", name: "Mobiles & Electronics", description: "Latest gadgets with amazing cashback offers", storeCount: 18, category: "electronics", cashback: 7, isNew: false },
        { id: "fashion", img: "/assets/img/categorie/fashion-offers.png", name: "Fashion", description: "Trendy fashion with great savings", storeCount: 35, category: "fashion", cashback: 8, isNew: false },
        { id: "home-kitchen", img: "/assets/img/categorie/home-kitchen-offers.png", name: "Home & Kitchen", description: "Everything for your home with cashback", storeCount: 22, category: "home", cashback: 6, isNew: false },
        { id: "min-cashback", img: "/assets/img/categorie/min-cashback.png", name: "Min 50% Cashback", description: "Minimum 50% cashback on all purchases", storeCount: 15, category: "all", cashback: 50, isNew: true },
        { id: "banking-finance", img: "/assets/img/categorie/banking-finance-offers.png", name: "Credit Cards", description: "Best credit card offers and deals", storeCount: 12, category: "all", cashback: 5, isNew: false },
        { id: "beauty-grooming", img: "/assets/img/categorie/beauty-personal-care-offers.png", name: "Beauty & Grooming", description: "Beauty products with exclusive offers", storeCount: 28, category: "beauty", cashback: 9, isNew: false },
        { id: "travel", img: "/assets/img/categorie/travel-offers.png", name: "Flights & Hotels", description: "Travel deals with maximum savings", storeCount: 8, category: "travel", cashback: 4, isNew: false },
        { id: "food-grocery", img: "/assets/img/categorie/food-and-grocery.png", name: "Food & Grocery", description: "Daily essentials with cashback", storeCount: 16, category: "all", cashback: 3, isNew: false },
        { id: "pharmacy", img: "/assets/img/categorie/health-medicine-offers.png", name: "Pharmacy", description: "Health products with great offers", storeCount: 10, category: "health", cashback: 6, isNew: false },
        { id: "new-on-ck", img: "/assets/img/categorie/new-on-ck.png", name: "New on CashKaro", description: "Latest additions to our platform", storeCount: 5, category: "all", cashback: 8, isNew: true },
        { id: "education", img: "/assets/img/categorie/education-offers.png", name: "Education", description: "Educational courses and materials", storeCount: 7, category: "all", cashback: 4, isNew: false },
        { id: "loans", img: "/assets/img/categorie/loans-offers.png", name: "Loans", description: "Best loan offers and deals", storeCount: 6, category: "all", cashback: 2, isNew: false },
        { id: "health-wellness", img: "/assets/img/categorie/health-and-wellness.png", name: "Health & Wellness", description: "Health and wellness products", storeCount: 14, category: "health", cashback: 7, isNew: false },
        { id: "departmental", img: "/assets/img/categorie/departmental-offers.png", name: "Departmental", description: "Departmental store offers", storeCount: 9, category: "all", cashback: 5, isNew: false },
    ], []);

    // Filter and sort categories based on active tab and sort option
    const filteredAndSortedCategories = React.useMemo(() => {
        let filtered = categories;

        // Filter by active tab
        if (activeTab !== 'all') {
            filtered = categories.filter(category => category.category === activeTab);
        }

        // Sort based on selected option
        const sorted = [...filtered].sort((a, b) => {
            switch (sortBy) {
                case 'popularity':
                    return b.storeCount - a.storeCount; // Higher store count = more popular
                case 'cashback':
                    return b.cashback - a.cashback; // Higher cashback first
                case 'newest':
                    return b.isNew === a.isNew ? 0 : b.isNew ? -1 : 1; // New items first
                case 'alphabetical':
                    return a.name.localeCompare(b.name); // A-Z
                default:
                    return 0;
            }
        });

        return sorted;
    }, [activeTab, sortBy, categories]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-6">
                    {/* Breadcrumb */}
                    <div className="mb-6">
                        <AutoBreadcrumb />
                    </div>

                    {/* Main Heading with Dropdown */}
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">Home Categories</h1>
                        
                        {/* Sort Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-sm text-gray-700">
                                    Sort by: {sortOptions.find(option => option.value === sortBy)?.label}
                                </span>
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    {sortOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => {
                                                setSortBy(option.value);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                                                sortBy === option.value ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Tabs Section */}
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                >
                                    {tab.label}
                                    <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                        {tab.count}
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="container mx-auto px-4 py-8">
                {filteredAndSortedCategories.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredAndSortedCategories.map((category) => (
                            <Link key={category.id} href={`/categories/${category.id}`}>
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 cursor-pointer group">
                                    <div className="text-center">
                                        <div className="relative mb-4">
                                            <Image
                                                src={category.img}
                                                width={80}
                                                height={80}
                                                alt={category.name}
                                                className="w-20 h-20 rounded-lg mx-auto group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                {category.name}
                                            </h3>
                                            {category.isNew && (
                                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                                    NEW
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                                            {category.description}
                                        </p>

                                        <div className="flex items-center justify-center gap-2">
                                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                                {category.storeCount} stores
                                            </span>
                                            <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                                                {category.cashback}% cashback
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-500 text-lg mb-4">No categories found</div>
                        <p className="text-gray-400">Try selecting a different tab or sorting option.</p>
                    </div>
                )}
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
