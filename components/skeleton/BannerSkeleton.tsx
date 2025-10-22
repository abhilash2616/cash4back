import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const BannerSkeleton: React.FC = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50">
            {/* Main carousel container */}
            <div className="relative w-full max-w-7xl mx-auto px-4">
                {/* Carousel slides */}
                <div className="flex gap-4 py-4 overflow-hidden">
                    {/* Desktop: 3 slides, Tablet: 2 slides, Mobile: 1 slide */}
                    <div className="flex-shrink-0 w-full lg:w-1/3 md:w-1/2">
                        <Skeleton className="w-full h-[300px] rounded-lg animate-pulse bg-gray-200" />
                    </div>
                    <div className="hidden md:flex lg:hidden flex-shrink-0 w-1/2">
                        <Skeleton className="w-full h-[300px] rounded-lg animate-pulse bg-gray-200" />
                    </div>
                    <div className="hidden lg:flex flex-shrink-0 w-1/3">
                        <Skeleton className="w-full h-[300px] rounded-lg animate-pulse bg-gray-200" />
                    </div>
                    <div className="hidden lg:flex flex-shrink-0 w-1/3">
                        <Skeleton className="w-full h-[300px] rounded-lg animate-pulse bg-gray-200" />
                    </div>
                </div>

                {/* Navigation arrows - positioned like Splide */}
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <Skeleton className="w-12 h-12 rounded-full animate-pulse bg-gray-200" />
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <Skeleton className="w-12 h-12 rounded-full animate-pulse bg-gray-200" />
                </div>
            </div>

            {/* Pagination dots skeleton */}
            <div className="flex justify-center items-center mt-8 gap-3">
                <Skeleton className="w-3 h-3 rounded-full animate-pulse bg-gray-200" />
                <Skeleton className="w-3 h-3 rounded-full animate-pulse bg-gray-200" />
                <Skeleton className="w-3 h-3 rounded-full animate-pulse bg-gray-200" />
                <Skeleton className="w-3 h-3 rounded-full animate-pulse bg-gray-200" />
                <Skeleton className="w-3 h-3 rounded-full animate-pulse bg-gray-200" />
            </div>
        </div>
    );
};

export default BannerSkeleton;
