"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import AutoBreadcrumb from '@/components/common/AutoBreadcrumb';
import { Skeleton } from '@/components/ui/skeleton';
import StoreCardSkeleton from '@/components/skeleton/StoreCardSkeleton';
import CouponCardSkeleton from '@/components/skeleton/CouponCardSkeleton';

interface Store {
    id: string;
    name: string;
    logo: string;
    cashbackRate: string;
    category: string;
    isVerified: boolean;
    description: string;
    featured: boolean;
}

interface Coupon {
    id: string;
    title: string;
    description: string;
    code: string;
    discount: string;
    store: string;
    expiryDate: string;
    isActive: boolean;
}

// Category data mapping
const categoryData: { [key: string]: { name: string; description: string; icon: string } } = {
        'biggest-sales': { name: 'Biggest Sales', description: 'Get the best deals with maximum cashback', icon: '🔥' },
        'electronics': { name: 'Mobiles & Electronics', description: 'Latest gadgets with amazing cashback offers', icon: '📱' },
        'fashion': { name: 'Fashion', description: 'Trendy fashion with great savings', icon: '👗' },
        'home-kitchen': { name: 'Home & Kitchen', description: 'Everything for your home with cashback', icon: '🏠' },
        'min-cashback': { name: 'Min 50% Cashback', description: 'Minimum 50% cashback on all purchases', icon: '💰' },
        'banking-finance': { name: 'Credit Cards', description: 'Best credit card offers and deals', icon: '💳' },
        'beauty-grooming': { name: 'Beauty & Grooming', description: 'Beauty products with exclusive offers', icon: '💄' },
        'travel': { name: 'Flights & Hotels', description: 'Travel deals with maximum savings', icon: '✈️' },
        'food-grocery': { name: 'Food & Grocery', description: 'Daily essentials with cashback', icon: '🛒' },
        'pharmacy': { name: 'Pharmacy', description: 'Health products with great offers', icon: '💊' },
        'new-on-ck': { name: 'New on CashKaro', description: 'Latest additions to our platform', icon: '🆕' },
        'education': { name: 'Education', description: 'Educational courses and materials', icon: '📚' },
        'loans': { name: 'Loans', description: 'Best loan offers and deals', icon: '🏦' },
        'health-wellness': { name: 'Health & Wellness', description: 'Health and wellness products', icon: '🏥' },
        'departmental': { name: 'Departmental', description: 'Departmental store offers', icon: '🏪' },
    };

const CategoryDetailPage = () => {
    const params = useParams();
    const categoryId = params.categoryId as string;
    const [stores, setStores] = useState<Store[]>([]);
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [loading, setLoading] = useState(true);

    const currentCategory = categoryData[categoryId] || { name: 'Category', description: 'Category description', icon: '📦' };

    const customLabels = {
        'biggest-sales': 'Biggest Sales',
        'electronics': 'Mobiles & Electronics',
        'fashion': 'Fashion',
        'home-kitchen': 'Home & Kitchen',
        'min-cashback': 'Min 50% Cashback',
        'banking-finance': 'Credit Cards',
        'beauty-grooming': 'Beauty & Grooming',
        'travel': 'Flights & Hotels',
        'food-grocery': 'Food & Grocery',
        'pharmacy': 'Pharmacy',
        'new-on-ck': 'New on CashKaro',
        'education': 'Education',
        'loans': 'Loans',
        'health-wellness': 'Health & Wellness',
        'departmental': 'Departmental',
    };

    // Mock data for stores
    const mockStores: Store[] = React.useMemo(() => [
        {
            id: 'amazon',
            name: 'Amazon',
            logo: '🛒',
            cashbackRate: 'Up to 5%',
            category: categoryId,
            isVerified: true,
            description: 'Shop everything from electronics to fashion',
            featured: true
        },
        {
            id: 'flipkart',
            name: 'Flipkart',
            logo: '📱',
            cashbackRate: 'Up to 4%',
            category: categoryId,
            isVerified: true,
            description: 'India\'s leading e-commerce platform',
            featured: true
        },
        {
            id: 'myntra',
            name: 'Myntra',
            logo: '👗',
            cashbackRate: 'Up to 8%',
            category: categoryId,
            isVerified: true,
            description: 'Fashion and lifestyle shopping',
            featured: true
        },
        {
            id: 'ajio',
            name: 'Ajio',
            logo: '🛍️',
            cashbackRate: 'Up to 7%',
            category: categoryId,
            isVerified: true,
            description: 'Trendy fashion for everyone',
            featured: false
        },
        {
            id: 'reliance-digital',
            name: 'Reliance Digital',
            logo: '📺',
            cashbackRate: 'Up to 5%',
            category: categoryId,
            isVerified: true,
            description: 'Electronics and digital products',
            featured: true
        },
        {
            id: 'nykaa',
            name: 'Nykaa',
            logo: '💄',
            cashbackRate: 'Up to 7%',
            category: categoryId,
            isVerified: true,
            description: 'Beauty and personal care',
            featured: false
        },
        {
            id: 'firstcry',
            name: 'FirstCry',
            logo: '👶',
            cashbackRate: 'Up to 9%',
            category: categoryId,
            isVerified: true,
            description: 'Kids and baby products',
            featured: false
        }
    ], [categoryId]);

    // Mock data for coupons
    const mockCoupons: Coupon[] = React.useMemo(() => [
        {
            id: 'amazon-electronics-sale',
            title: 'Electronics Sale',
            description: 'Get extra 10% off on all electronics including smartphones, laptops, tablets, and more',
            code: 'AMAZON10',
            discount: '10%',
            store: 'Amazon',
            expiryDate: '2024-12-31',
            isActive: true
        },
        {
            id: 'flipkart-big-billion',
            title: 'Big Billion Days',
            description: 'Massive savings during Flipkart\'s biggest sale event. Up to 80% off on thousands of products',
            code: 'BIGBILLION',
            discount: '80%',
            store: 'Flipkart',
            expiryDate: '2024-12-31',
            isActive: true
        },
        {
            id: 'myntra-fashion-sale',
            title: 'End of Reason Sale',
            description: 'Fashion lovers rejoice! Get up to 70% off on your favorite fashion brands',
            code: 'EORS70',
            discount: '70%',
            store: 'Myntra',
            expiryDate: '2024-12-31',
            isActive: true
        }
    ], []);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setStores(mockStores);
            setCoupons(mockCoupons);
            setLoading(false);
        }, 1000);
    }, [categoryId, mockStores, mockCoupons]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                {/* Header Skeleton */}
                <div className="bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex items-center space-x-4 mb-4">
                            <Skeleton className="w-12 h-12 rounded-full" />
                            <div>
                                <Skeleton className="h-8 w-64 mb-2" />
                                <Skeleton className="h-4 w-96" />
                            </div>
                        </div>
                        <Skeleton className="h-4 w-48" />
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    {/* Featured Stores Skeleton */}
                    <section className="mb-12">
                        <div className="flex items-center justify-between mb-6">
                            <Skeleton className="h-8 w-48" />
                            <Skeleton className="h-4 w-24" />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                            {[...Array(6)].map((_, i) => (
                                <StoreCardSkeleton key={i} />
                            ))}
                        </div>
                    </section>

                    {/* Coupons Skeleton */}
                    <section className="mb-12">
                        <div className="flex items-center justify-between mb-6">
                            <Skeleton className="h-8 w-48" />
                            <Skeleton className="h-4 w-24" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(3)].map((_, i) => (
                                <CouponCardSkeleton key={i} />
                            ))}
                        </div>
                    </section>

                    {/* Stats Skeleton */}
                    <section className="bg-white rounded-lg shadow-md p-8">
                        <Skeleton className="h-8 w-48 mb-6" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="text-center">
                                    <Skeleton className="h-8 w-16 mx-auto mb-2" />
                                    <Skeleton className="h-4 w-24 mx-auto" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex items-center space-x-4 mb-4">
                        <span className="text-4xl">{currentCategory.icon}</span>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{currentCategory.name}</h1>
                            <p className="text-gray-600 mt-2">{currentCategory.description}</p>
                        </div>
                    </div>

                    {/* Breadcrumb */}
                    <AutoBreadcrumb customLabels={customLabels} />
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Featured Stores Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Featured Stores</h2>
                        <span className="text-sm text-gray-500">{stores.length} stores available</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                        {stores.map((store) => (
                            <Link key={store.id} href={`/stores/${store.id}`}>
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                                            {store.logo}
                                        </div>
                                        {store.isVerified && (
                                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                                ✓ Verified
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                        {store.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{store.description}</p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-green-600 font-bold text-lg">{store.cashbackRate}</span>
                                        <span className="text-sm text-gray-500">cashback</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Coupons Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Available Coupons</h2>
                        <span className="text-sm text-gray-500">{coupons.filter(c => c.isActive).length} active coupons</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coupons.map((coupon) => (
                            <Link key={coupon.id} href={`/coupons/${coupon.id}`}>
                                <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer ${!coupon.isActive ? 'opacity-50' : ''}`}>
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{coupon.title}</h3>
                                        <p className="text-sm text-gray-600">{coupon.description}</p>
                                    </div>
                                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                        {coupon.discount}
                                    </span>
                                </div>

                                <div className="bg-gray-100 p-3 rounded-lg mb-4">
                                    <div className="flex items-center justify-between">
                                        <code className="text-sm font-mono">{coupon.code}</code>
                                        <button
                                            className={`px-3 py-1 text-xs rounded ${coupon.isActive
                                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                                }`}
                                        >
                                            Copy
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>{coupon.store}</span>
                                    <span>Expires: {coupon.expiryDate}</span>
                                </div>

                                {!coupon.isActive && (
                                    <div className="mt-3 text-center">
                                        <span className="text-red-600 text-sm font-medium">Expired</span>
                                    </div>
                                )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Category Stats */}
                <section className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Category Statistics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">{stores.length}</div>
                            <div className="text-gray-600">Partner Stores</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">{coupons.filter(c => c.isActive).length}</div>
                            <div className="text-gray-600">Active Coupons</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">Up to 9%</div>
                            <div className="text-gray-600">Max Cashback</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CategoryDetailPage;
