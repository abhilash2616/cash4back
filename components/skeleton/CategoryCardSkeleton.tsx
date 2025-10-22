import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const CategoryCardSkeleton: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
                <div className="relative mb-6">
                    <Skeleton className="w-30 h-30 rounded-full mx-auto bg-gray-200" />
                </div>

                <Skeleton className="h-6 w-32 mx-auto mb-3 bg-gray-200" />

                <Skeleton className="h-4 w-full mb-2 bg-gray-200" />
                <Skeleton className="h-4 w-3/4 mx-auto mb-4 bg-gray-200" />

                <div className="flex items-center justify-center">
                    <Skeleton className="h-6 w-20 rounded-full bg-gray-200" />
                </div>
            </div>
        </div>
    );
};

export default CategoryCardSkeleton;
