import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const StoreCardSkeleton: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
                <Skeleton className="w-16 h-16 rounded-lg bg-gray-200" />
                <Skeleton className="w-16 h-6 rounded-full bg-gray-200" />
            </div>

            <Skeleton className="h-6 w-20 mb-2 bg-gray-200" />
            <Skeleton className="h-4 w-full mb-2 bg-gray-200" />
            <Skeleton className="h-4 w-3/4 mb-3 bg-gray-200" />

            <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-16 bg-gray-200" />
                <Skeleton className="h-4 w-12 bg-gray-200" />
            </div>
        </div>
    );
};

export default StoreCardSkeleton;
