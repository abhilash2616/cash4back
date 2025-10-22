"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import AutoBreadcrumb from '@/components/common/AutoBreadcrumb';
import { Skeleton } from '@/components/ui/skeleton';
import { useScrollDisable } from '@/hooks/useScrollDisable';

interface Store {
    id: string;
    name: string;
    logo: string;
    cashbackRate: string;
    category: string;
    isVerified: boolean;
    description: string;
    featured: boolean;
    website: string;
    rating: number;
    totalUsers: number;
    establishedYear: number;
    headquarters: string;
    specialties: string[];
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
    category: string;
}

// Mock store data
const mockStores: { [key: string]: Store } = {
    'amazon': {
        id: 'amazon',
        name: 'Amazon',
        logo: '/assets/img/brands/amazon.jpg',
        cashbackRate: 'Up to 5%',
        category: 'general',
        isVerified: true,
        description: 'Shop everything from electronics to fashion with amazing deals and fast delivery',
        featured: true,
        website: 'amazon.in',
        rating: 4.8,
        totalUsers: 5000000,
        establishedYear: 1994,
        headquarters: 'Seattle, USA',
        specialties: ['Electronics', 'Books', 'Fashion', 'Home & Kitchen', 'Grocery']
    },
    'flipkart': {
        id: 'flipkart',
        name: 'Flipkart',
        logo: '/assets/img/brands/flipkart.png',
        cashbackRate: 'Up to 4%',
        category: 'general',
        isVerified: true,
        description: 'India\'s leading e-commerce platform with millions of products',
        featured: true,
        website: 'flipkart.com',
        rating: 4.6,
        totalUsers: 3000000,
        establishedYear: 2007,
        headquarters: 'Bangalore, India',
        specialties: ['Electronics', 'Fashion', 'Home & Kitchen', 'Books', 'Sports']
    },
    'myntra': {
        id: 'myntra',
        name: 'Myntra',
        logo: '/assets/img/brands/myntra.jpg',
        cashbackRate: 'Up to 8%',
        category: 'fashion',
        isVerified: true,
        description: 'India\'s leading fashion destination with latest trends',
        featured: true,
        website: 'myntra.com',
        rating: 4.5,
        totalUsers: 2000000,
        establishedYear: 2007,
        headquarters: 'Bangalore, India',
        specialties: ['Fashion', 'Beauty', 'Accessories', 'Footwear', 'Lifestyle']
    },
    'ajio': {
        id: 'ajio',
        name: 'Ajio',
        logo: '/assets/img/brands/ajio-coupons.jpg',
        cashbackRate: 'Up to 7%',
        category: 'fashion',
        isVerified: true,
        description: 'Reliance\'s fashion platform with trendy collections',
        featured: false,
        website: 'ajio.com',
        rating: 4.3,
        totalUsers: 1500000,
        establishedYear: 2016,
        headquarters: 'Mumbai, India',
        specialties: ['Fashion', 'Beauty', 'Accessories', 'Footwear']
    },
    'reliance-digital': {
        id: 'reliance-digital',
        name: 'Reliance Digital',
        logo: '/assets/img/brands/reliancedigital-coupons.png',
        cashbackRate: 'Up to 5%',
        category: 'electronics',
        isVerified: true,
        description: 'Your one-stop destination for all electronics and digital products',
        featured: true,
        website: 'reliancedigital.com',
        rating: 4.4,
        totalUsers: 1000000,
        establishedYear: 2007,
        headquarters: 'Mumbai, India',
        specialties: ['Electronics', 'Mobile Phones', 'Laptops', 'Home Appliances', 'Gaming']
    },
    'nykaa': {
        id: 'nykaa',
        name: 'Nykaa',
        logo: '/assets/img/brands/mama-earth-coupons-hide.jpg',
        cashbackRate: 'Up to 7%',
        category: 'beauty',
        isVerified: true,
        description: 'India\'s leading beauty and personal care destination',
        featured: false,
        website: 'nykaa.com',
        rating: 4.3,
        totalUsers: 800000,
        establishedYear: 2012,
        headquarters: 'Mumbai, India',
        specialties: ['Beauty', 'Personal Care', 'Skincare', 'Makeup', 'Hair Care']
    },
    'firstcry': {
        id: 'firstcry',
        name: 'FirstCry',
        logo: '/assets/img/brands/firstcry.jpg',
        cashbackRate: 'Up to 9%',
        category: 'kids',
        isVerified: true,
        description: 'Everything for your little ones - from baby care to kids fashion',
        featured: false,
        website: 'firstcry.com',
        rating: 4.5,
        totalUsers: 600000,
        establishedYear: 2010,
        headquarters: 'Pune, India',
        specialties: ['Baby Care', 'Kids Fashion', 'Toys', 'Books', 'School Supplies']
    }
};

const StoreDetailPage = () => {
    const params = useParams();
    const storeId = params.storeId as string;
    const [store, setStore] = useState<Store | null>(null);
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [loading, setLoading] = useState(true);

    // Disable scroll when loading
    useScrollDisable(loading);

    // Mock coupons data
    const generateMockCoupons = (storeName: string): Coupon[] => {
        const couponTemplates = {
            'Amazon': [
                { title: 'Electronics Sale', description: 'Extra 10% off on electronics', code: 'AMAZON10', discount: '10%', category: 'Electronics' },
                { title: 'Prime Day Deals', description: 'Up to 50% off on Prime Day', code: 'PRIME50', discount: '50%', category: 'General' },
                { title: 'New User Offer', description: '₹100 off on first order', code: 'NEW100', discount: '₹100', category: 'General' },
            ],
            'Flipkart': [
                { title: 'Big Billion Days', description: 'Up to 80% off on Big Billion Days', code: 'BIGBILLION', discount: '80%', category: 'General' },
                { title: 'Mobile Deals', description: 'Extra 15% off on smartphones', code: 'MOBILE15', discount: '15%', category: 'Electronics' },
                { title: 'Fashion Sale', description: '30% off on fashion items', code: 'FASHION30', discount: '30%', category: 'Fashion' },
            ],
            'Myntra': [
                { title: 'End of Reason Sale', description: 'Up to 70% off on fashion', code: 'EORS70', discount: '70%', category: 'Fashion' },
                { title: 'Beauty Bonanza', description: '25% off on beauty products', code: 'BEAUTY25', discount: '25%', category: 'Beauty' },
                { title: 'New Arrivals', description: '20% off on new collection', code: 'NEW20', discount: '20%', category: 'Fashion' },
            ],
            'Ajio': [
                { title: 'Ajio Sale', description: 'Up to 60% off on all items', code: 'AJIO60', discount: '60%', category: 'Fashion' },
                { title: 'Weekend Special', description: 'Extra 25% off this weekend', code: 'WEEKEND25', discount: '25%', category: 'Fashion' },
            ],
            'Reliance Digital': [
                { title: 'Digital Sale', description: 'Up to 40% off on electronics', code: 'DIGITAL40', discount: '40%', category: 'Electronics' },
                { title: 'Mobile Mania', description: 'Extra 20% off on mobile phones', code: 'MOBILE20', discount: '20%', category: 'Electronics' },
            ],
            'Nykaa': [
                { title: 'Beauty Bonanza', description: 'Up to 50% off on beauty products', code: 'BEAUTY50', discount: '50%', category: 'Beauty' },
                { title: 'Skincare Special', description: 'Extra 30% off on skincare', code: 'SKIN30', discount: '30%', category: 'Beauty' },
            ],
            'FirstCry': [
                { title: 'Kids Festival', description: 'Up to 60% off on kids products', code: 'KIDS60', discount: '60%', category: 'Kids' },
                { title: 'Baby Care Sale', description: 'Extra 25% off on baby essentials', code: 'BABY25', discount: '25%', category: 'Baby Care' },
            ]
        };

        const coupons = couponTemplates[storeName as keyof typeof couponTemplates] || [];

        return coupons.map((coupon, index) => ({
            id: `${storeName.toLowerCase()}-coupon-${index + 1}`,
            title: coupon.title,
            description: coupon.description,
            code: coupon.code,
            discount: coupon.discount,
            store: storeName,
            expiryDate: '2024-12-31',
            isActive: true,
            category: coupon.category
        }));
    };

    useEffect(() => {
        const loadStoreData = async () => {
            setLoading(true);

            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            const storeData = mockStores[storeId];
            if (storeData) {
                setStore(storeData);
                const storeCoupons = generateMockCoupons(storeData.name);
                setCoupons(storeCoupons);
            }

            setLoading(false);
        };

        if (storeId) {
            loadStoreData();
        }
    }, [storeId]);

    const customLabels = {
        [storeId]: store?.name || 'Store'
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex items-center space-x-4 mb-4">
                            <Skeleton className="w-16 h-16 rounded-lg" />
                            <div>
                                <Skeleton className="h-8 w-48 mb-2" />
                                <Skeleton className="h-4 w-96" />
                            </div>
                        </div>
                        <Skeleton className="h-4 w-32" />
                    </div>
                </div>
                <div className="container mx-auto px-4 py-8">
                    <Skeleton className="h-8 w-48 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <Skeleton key={i} className="h-48" />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (!store) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Store Not Found</h1>
                    <p className="text-gray-600 mb-6">The store you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/categories" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Back to Categories
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex items-center space-x-6 mb-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                            <Image
                                src={store.logo}
                                alt={store.name}
                                width={80}
                                height={80}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                                <h1 className="text-3xl font-bold text-gray-900">{store.name}</h1>
                                {store.isVerified && (
                                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                                        ✓ Verified Partner
                                    </span>
                                )}
                                {store.featured && (
                                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                        ⭐ Featured
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-600 text-lg">{store.description}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-green-600 mb-1">{store.cashbackRate}</div>
                            <div className="text-sm text-gray-500">cashback</div>
                        </div>
                    </div>

                    {/* Breadcrumb */}
                    <AutoBreadcrumb customLabels={customLabels} />
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Store Information */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Store Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <span className="text-gray-600">Website:</span>
                                    <span className="ml-2 font-medium">{store.website}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Established:</span>
                                    <span className="ml-2 font-medium">{store.establishedYear}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Headquarters:</span>
                                    <span className="ml-2 font-medium">{store.headquarters}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Rating:</span>
                                    <span className="ml-2 font-medium">{store.rating}/5 ⭐</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Total Users:</span>
                                    <span className="ml-2 font-medium">{store.totalUsers.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        {/* Specialties */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Specialties</h2>
                            <div className="flex flex-wrap gap-2">
                                {store.specialties.map((specialty, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                        {specialty}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h2>
                            <div className="space-y-4">
                                <div className="text-center p-4 bg-green-50 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">{store.cashbackRate}</div>
                                    <div className="text-sm text-gray-600">Cashback Rate</div>
                                </div>
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">{store.rating}</div>
                                    <div className="text-sm text-gray-600">User Rating</div>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-lg">
                                    <div className="text-2xl font-bold text-purple-600">{store.totalUsers.toLocaleString()}</div>
                                    <div className="text-sm text-gray-600">Happy Users</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Available Coupons */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Available Coupons</h2>
                        <span className="text-sm text-gray-500">{coupons.filter(c => c.isActive).length} active coupons</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coupons.map((coupon) => (
                            <div key={coupon.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{coupon.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{coupon.description}</p>

                                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                                        <div className="text-sm text-gray-600 mb-1">Coupon Code</div>
                                        <div className="text-xl font-bold text-gray-900 font-mono">{coupon.code}</div>
                                    </div>

                                    <div className="flex items-center justify-between mb-4">
                                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                                            {coupon.discount} off
                                        </span>
                                        <span className="text-sm text-gray-600">{coupon.category}</span>
                                    </div>

                                    <div className="text-xs text-gray-500 mb-4">
                                        Expires: {new Date(coupon.expiryDate).toLocaleDateString()}
                                    </div>

                                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                        Copy Code
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Back to Categories */}
                <div className="text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/stores"
                            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                            ← Back to All Stores
                        </Link>
                        <Link
                            href="/categories"
                            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                            Browse Categories
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreDetailPage;
