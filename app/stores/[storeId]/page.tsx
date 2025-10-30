"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import AutoBreadcrumb from '@/components/common/AutoBreadcrumb';
import TermsAndConditions from '@/components/store/TermsAndConditions';
import RewardsRatesDialog from '@/components/store/RewardsRatesDialog';
import StarRating from '@/components/store/StarRating';
import { Skeleton } from '@/components/ui/skeleton';
import { useScrollDisable } from '@/hooks/useScrollDisable';
import { useAuth } from '@/context/AuthProvider';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '@splidejs/react-splide/css';
import { allStores, Store } from '@/data/brands';
import { Tabeldata } from '@/components/store/Tabeldata';
import ExtraData from '@/components/store/ExtraData';
import RelatedStore from '@/components/store/RelatedStore';
import PopularStore from '@/components/store/PopularStore';
import StoreFaqs from '@/components/store/StoreFaqs';



const StoreDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const { user } = useAuth();
    const storeId = params.storeId as string;
    const [store, setStore] = useState<Store | null>(null);
    const [loading, setLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

    // Disable scroll when loading
    useScrollDisable(loading);

    // Handle earn rewards button click
    const handleEarnRewards = () => {
        if (!user) {
            // User not logged in, redirect to login page
            router.push('/auth');
            return;
        }

        // User is logged in, proceed with the action
        // You can add your logic here for what happens when user clicks earn rewards
        // For example: redirect to store website, track the click, etc.
        if (store?.website) {
            // Open store website in new tab
            window.open(`https://${store.website}`, '_blank');
        }
    };


    useEffect(() => {
        const loadStoreData = async () => {
            setLoading(true);

            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            const storeData = allStores[storeId];
            if (storeData) {
                setStore(storeData);
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
                        <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
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
                                {store.isVerified && (
                                    <span className="bg-green-100 text-green-800 text-[10px] px-3 py-1 rounded-full">
                                        Verified Partner
                                    </span>
                                )}
                                {store.featured && (
                                    <span className="bg-blue-100 text-blue-800 text-[10px] px-3 py-1 rounded-full">
                                        Featured
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-600 text-md">{store.description}</p>
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
                <div className='flex justify-between'>
                    <div className='w-full md:w-[70%]'>
                        <div className="">
                            <div className='flex items-center justify-center mb-6'>
                                <div className="relative w-full">
                                    <Splide options={{
                                        perPage: 1,
                                        gap: "1rem",
                                        padding: { left: "2rem", right: "1rem" },
                                        autoplay: true,
                                        interval: 5000,
                                        pauseOnHover: true,
                                        arrows: false,
                                        pagination: true,
                                        classes: {
                                            pagination: 'rounded-full h-2 w-full flex justify-center items-center absolute bottom-5 left-0 right-0',
                                            paginationButton: 'h-2 w-5 bg-gray-200 hover:bg-gray-300',
                                        }
                                    }}>
                                        {store.banner.map((banner, index) => (
                                            <SplideSlide key={index}>
                                                <Image src={banner} alt={store.name} width={800} height={600} className='w-full h-[600px] object-cover rounded-[20px]' />
                                            </SplideSlide>
                                        ))}
                                        <div className="splide__progress" style={{ height: '4px', backgroundColor: '#e5e7eb', borderRadius: '2px' }}></div>
                                    </Splide>
                                </div>
                            </div>
                            {/* Main Info */}
                            <div className="border bg-white border-gray-200 rounded-[20px] p-10 mb-6">
                                <div className="mb-2">
                                    <h2 className="text-[20px] font-bold text-gray-900 mb-4">Important Timelines</h2>
                                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                                        {store.timelineData?.map((item, index) => (
                                            <div key={index} className='w-full'>
                                                <button className="flex items-center cursor-pointer text-xs md:text-base font-semibold leading-4 md:leading-6 flex-1 flex-col h-[112px] md:h-[166px] border md:border-[1.5px] border-[#e5e7eb] rounded-[15px] md:py-6 relative shadow-[0_4px_8px_0_rgba(0,0,0,0.08)] md:shadow-[0_6px_12px_0_rgba(0,0,0,0.08)] p-4 md:p-3 w-[80%]">
                                                    <span className='text-xs md:text-base font-semibold text-center'>
                                                        <span className='line-clamp-2'>{item.title}</span>
                                                    </span>
                                                    <span className='text-[32px] md:text-[48px] text-[#0036da] font-extrabold text-ck-blue leading-8 md:leading-[48px] mt-[10px] mb-[6px] md:mt-[14px] md:mb-[8px]'>{item.value}</span>
                                                    <span className='text-xs md:text-base font-semibold md:font-extrabold pr-6'>{item.subtitle}</span>
                                                    <span className='w-7 h-7 md:w-[24px] md:h-[24px] lg:w-[42px] lg:h-[42px] rounded-full bg-white grid place-content-center shadow-[0_2px_4px_0_rgba(0,0,0,0.08)] md:shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] absolute md:right-[12px] md:bottom-[15px] right-[8px] bottom-[10px] border md:border-[1.5px] border-[#e5e7eb]'>
                                                        <span>
                                                            <Image src='/assets/svg/arrow-right.svg' alt='clock' width={24} height={24} />
                                                        </span>
                                                    </span>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="border bg-white border-gray-200 rounded-[20px] p-10 mb-6">
                                <div className="">
                                    <h2 className="text-xl font-bold text-gray-900 mb-4">Important Terms & Conditions</h2>
                                    <ul className="space-y-4 list-disc list-inside mb-4">
                                        {store.termsAndConditions?.map((term, index) => (
                                            <li key={index}>
                                                {term}
                                            </li>
                                        ))}
                                    </ul>
                                    <TermsAndConditions
                                        storeName={store.name}
                                        timelineData={store.timelineData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[28%]'>
                        {/* Specialties */}
                        <div className="bg-white rounded-[20px] shadow-sm p-10 mb-6">
                            <div className='flex items-center justify-between mb-6'>
                                <div className='p-4 border border-gray-200 rounded-[10px]'>
                                    <Image src={store.logo} alt={store.name} width={100} height={100} className='w-full h-[40px] object-contain' />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <StarRating
                                        storeName={store.name}
                                        currentRating={store.rating}
                                        totalUsers={store.totalUsers}
                                        onRatingSubmit={(rating, review) => {
                                            console.log(`Rating submitted for ${store.name}:`, { rating, review });
                                            // Handle rating submission here
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <p className='text-lg font-bold text-gray-900 mb-4'>{store.name} Promo Codes</p>
                                <div className="relative mb-4">
                                    <div className={`text-sm text-gray-500 transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                                        {store.descriptionParagraphs?.map((paragraph, index) => (
                                            <p key={index} className={index > 0 ? 'mt-2' : ''}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    {!isExpanded && (
                                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                                    )}
                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="flex items-center gap-1 mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 group"
                                    >
                                        {isExpanded ? (
                                            <>
                                                <span>Show Less</span>
                                                <ChevronUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                                            </>
                                        ) : (
                                            <>
                                                <span>Show More</span>
                                                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                                            </>
                                        )}
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="bg-white rounded-[20px] shadow-sm p-10">
                            <h2 className='text-[30px] font-extrabold text-gray-900 mb-2'>{store.dynamicContent.rewardsText}</h2>
                            <p className='text-sm text-[#000] font-bold mb-2'>{store.dynamicContent.rewardsDescription}</p>
                            <RewardsRatesDialog storeName={store.name} />
                            <button
                                onClick={handleEarnRewards}
                                className='w-full bg-[#ff6d1d] text-white py-4 px-4 rounded-[20px] hover:bg-[#ff6d1d]/80 transition-colors capitalize'
                            >
                                {store.dynamicContent.earnRewardsText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-2 bg-gray-200 h-1 w-full shadow-2xs"></div>
            <div className='container mx-auto px-4 py-8'>
                <h2 className='font-semibold mb-6 text-[20px]'>{store.dynamicContent.promoHeading}</h2>
                <Tabeldata />
                <div className='my-6'>
                    <ExtraData store={store} />
                </div>
                {!user && store.relatedStores && store.relatedStores.length > 0 && (
                    <div className='mb-6'>
                        <RelatedStore
                            stores={store.relatedStores}
                            title={`Related Stores Like ${store.name}`}
                            showCashbackRate={true}
                            columnsCount={5}
                        />
                    </div>
                )}
                {!user && store.popularStores && store.popularStores.length > 0 && (
                    <div className='mb-6'>
                        <PopularStore
                            stores={store.popularStores}
                            title={`Popular Stores Like ${store.name}`}
                            showCashbackRate={true}
                            columnsCount={5}
                        />
                    </div>
                )}
                {!user && store.faqs && store.faqs.length > 0 && (
                    <div className='my-6'>
                        <StoreFaqs
                            faqs={store.faqs}
                            title={`Frequently Asked Questions about ${store.name}`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default StoreDetailPage;
