import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const CouponCardSkeleton: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <Skeleton className="h-6 w-40 mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                </div>
                <Skeleton className="w-16 h-6 rounded-full" />
            </div>

            <Skeleton className="h-12 w-full rounded-lg mb-4" />

            <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-20" />
            </div>
        </div>
    );
};

export default CouponCardSkeleton;
