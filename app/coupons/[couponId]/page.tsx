"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import AutoBreadcrumb from '@/components/common/AutoBreadcrumb';
import { Skeleton } from '@/components/ui/skeleton';
import { useScrollDisable } from '@/hooks/useScrollDisable';

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
    termsAndConditions: string[];
    minOrderValue?: string;
    maxDiscount?: string;
    applicableOn?: string[];
    storeLogo: string;
    storeWebsite: string;
    usageCount: number;
    successRate: number;
}

// Mock coupon data
const mockCoupons: { [key: string]: Coupon } = {
    'amazon-electronics-sale': {
        id: 'amazon-electronics-sale',
        title: 'Electronics Sale',
        description: 'Get extra 10% off on all electronics including smartphones, laptops, tablets, and more. Limited time offer!',
        code: 'AMAZON10',
        discount: '10%',
        store: 'Amazon',
        expiryDate: '2024-12-31',
        isActive: true,
        category: 'Electronics',
        termsAndConditions: [
            'Valid on electronics category only',
            'Minimum order value of ₹1000',
            'Maximum discount of ₹500',
            'Cannot be combined with other offers',
            'Valid till December 31, 2024'
        ],
        minOrderValue: '₹1000',
        maxDiscount: '₹500',
        applicableOn: ['Smartphones', 'Laptops', 'Tablets', 'Headphones', 'Cameras'],
        storeLogo: '🛒',
        storeWebsite: 'amazon.in',
        usageCount: 15420,
        successRate: 94
    },
    'flipkart-big-billion': {
        id: 'flipkart-big-billion',
        title: 'Big Billion Days',
        description: 'Massive savings during Flipkart&apos;s biggest sale event. Up to 80% off on thousands of products across all categories.',
        code: 'BIGBILLION',
        discount: '80%',
        store: 'Flipkart',
        expiryDate: '2024-12-31',
        isActive: true,
        category: 'General',
        termsAndConditions: [
            'Valid on selected products only',
            'No minimum order value',
            'Maximum discount varies by product',
            'Limited quantity available',
            'Valid till December 31, 2024'
        ],
        minOrderValue: 'No minimum',
        maxDiscount: 'Varies by product',
        applicableOn: ['All Categories'],
        storeLogo: '📱',
        storeWebsite: 'flipkart.com',
        usageCount: 89230,
        successRate: 97
    },
    'myntra-fashion-sale': {
        id: 'myntra-fashion-sale',
        title: 'End of Reason Sale',
        description: 'Fashion lovers rejoice! Get up to 70% off on your favorite fashion brands. From clothing to accessories, everything is on sale.',
        code: 'EORS70',
        discount: '70%',
        store: 'Myntra',
        expiryDate: '2024-12-31',
        isActive: true,
        category: 'Fashion',
        termsAndConditions: [
            'Valid on fashion items only',
            'Minimum order value of ₹500',
            'Maximum discount of ₹2000',
            'Valid on select brands',
            'Valid till December 31, 2024'
        ],
        minOrderValue: '₹500',
        maxDiscount: '₹2000',
        applicableOn: ['Clothing', 'Footwear', 'Accessories', 'Bags', 'Watches'],
        storeLogo: '👗',
        storeWebsite: 'myntra.com',
        usageCount: 45670,
        successRate: 92
    },
    'ajio-weekend-special': {
        id: 'ajio-weekend-special',
        title: 'Weekend Special',
        description: 'Make your weekend shopping special with extra 25% off on all items. Perfect time to refresh your wardrobe!',
        code: 'WEEKEND25',
        discount: '25%',
        store: 'Ajio',
        expiryDate: '2024-12-31',
        isActive: true,
        category: 'Fashion',
        termsAndConditions: [
            'Valid on all fashion items',
            'Minimum order value of ₹800',
            'Maximum discount of ₹1000',
            'Valid only on weekends',
            'Valid till December 31, 2024'
        ],
        minOrderValue: '₹800',
        maxDiscount: '₹1000',
        applicableOn: ['Fashion', 'Beauty', 'Accessories'],
        storeLogo: '🛍️',
        storeWebsite: 'ajio.com',
        usageCount: 12340,
        successRate: 89
    },
    'reliance-digital-mobile': {
        id: 'reliance-digital-mobile',
        title: 'Mobile Mania',
        description: 'Get extra 20% off on all mobile phones and accessories. From budget to premium smartphones, find your perfect device.',
        code: 'MOBILE20',
        discount: '20%',
        store: 'Reliance Digital',
        expiryDate: '2024-12-31',
        isActive: true,
        category: 'Electronics',
        termsAndConditions: [
            'Valid on mobile phones only',
            'Minimum order value of ₹2000',
            'Maximum discount of ₹5000',
            'Valid on select models',
            'Valid till December 31, 2024'
        ],
        minOrderValue: '₹2000',
        maxDiscount: '₹5000',
        applicableOn: ['Smartphones', 'Mobile Accessories', 'Cases', 'Screen Protectors'],
        storeLogo: '📺',
        storeWebsite: 'reliancedigital.com',
        usageCount: 9870,
        successRate: 95
    }
};

const CouponDetailPage = () => {
    const params = useParams();
    const couponId = params.couponId as string;
    const [coupon, setCoupon] = useState<Coupon | null>(null);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    // Disable scroll when loading
    useScrollDisable(loading);

    const copyToClipboard = async () => {
        if (coupon?.code) {
            try {
                await navigator.clipboard.writeText(coupon.code);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        }
    };

    useEffect(() => {
        const loadCouponData = async () => {
            setLoading(true);

            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            const couponData = mockCoupons[couponId];
            if (couponData) {
                setCoupon(couponData);
            }

            setLoading(false);
        };

        if (couponId) {
            loadCouponData();
        }
    }, [couponId]);

    const customLabels = {
        [couponId]: coupon?.title || 'Coupon'
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <Skeleton className="h-96" />
                        </div>
                        <div>
                            <Skeleton className="h-64" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!coupon) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Coupon Not Found</h1>
                    <p className="text-gray-600 mb-6">The coupon you&apos;re looking for doesn&apos;t exist or has expired.</p>
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
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
                            {coupon.storeLogo}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                                <h1 className="text-3xl font-bold text-gray-900">{coupon.title}</h1>
                                {coupon.isActive ? (
                                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                                        ✓ Active
                                    </span>
                                ) : (
                                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                                        ✗ Expired
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-600 text-lg">{coupon.description}</p>
                            <div className="flex items-center space-x-4 mt-2">
                                <span className="text-sm text-gray-500">Store: {coupon.store}</span>
                                <span className="text-sm text-gray-500">Category: {coupon.category}</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-orange-600 mb-1">{coupon.discount}</div>
                            <div className="text-sm text-gray-500">discount</div>
                        </div>
                    </div>

                    {/* Breadcrumb */}
                    <AutoBreadcrumb customLabels={customLabels} />
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Coupon Code Section */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Coupon Code</h2>
                            <div className="bg-gray-100 rounded-lg p-6 text-center">
                                <div className="text-sm text-gray-600 mb-2">Your Coupon Code</div>
                                <div className="text-3xl font-bold text-gray-900 font-mono mb-4">{coupon.code}</div>
                                <button
                                    onClick={copyToClipboard}
                                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${copied
                                            ? 'bg-green-600 text-white'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    {copied ? '✓ Copied!' : 'Copy Code'}
                                </button>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Terms & Conditions</h2>
                            <ul className="space-y-2">
                                {coupon.termsAndConditions.map((term, index) => (
                                    <li key={index} className="flex items-start space-x-2">
                                        <span className="text-gray-400 mt-1">•</span>
                                        <span className="text-gray-700">{term}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Applicable On */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Applicable On</h2>
                            <div className="flex flex-wrap gap-2">
                                {coupon.applicableOn?.map((item, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Coupon Details */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Coupon Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-gray-600">Discount:</span>
                                    <span className="ml-2 font-medium text-orange-600">{coupon.discount}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Min Order Value:</span>
                                    <span className="ml-2 font-medium">{coupon.minOrderValue}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Max Discount:</span>
                                    <span className="ml-2 font-medium">{coupon.maxDiscount}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Expires:</span>
                                    <span className="ml-2 font-medium">{new Date(coupon.expiryDate).toLocaleDateString()}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Usage Count:</span>
                                    <span className="ml-2 font-medium">{coupon.usageCount.toLocaleString()}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Success Rate:</span>
                                    <span className="ml-2 font-medium">{coupon.successRate}%</span>
                                </div>
                            </div>
                        </div>

                        {/* Store Information */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Store Information</h2>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                                    {coupon.storeLogo}
                                </div>
                                <div>
                                    <div className="font-medium">{coupon.store}</div>
                                    <div className="text-sm text-gray-600">{coupon.storeWebsite}</div>
                                </div>
                            </div>
                            <Link
                                href={`/stores/${coupon.store.toLowerCase().replace(/\s+/g, '-')}`}
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                            >
                                Visit Store
                            </Link>
                        </div>

                        {/* Success Rate Indicator */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Coupon Performance</h2>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">{coupon.successRate}%</div>
                                <div className="text-sm text-gray-600 mb-4">Success Rate</div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-green-600 h-2 rounded-full"
                                        style={{ width: `${coupon.successRate}%` }}
                                    ></div>
                                </div>
                                <div className="text-xs text-gray-500 mt-2">
                                    Used successfully by {coupon.usageCount.toLocaleString()} users
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Categories */}
                <div className="text-center mt-12">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/categories"
                            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                            ← Back to All Categories
                        </Link>
                        <Link
                            href="/stores"
                            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                            Browse All Stores
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponDetailPage;
