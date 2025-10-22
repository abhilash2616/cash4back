import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface GenericSkeletonProps {
    variant?: 'card' | 'list' | 'grid' | 'text' | 'image' | 'button';
    count?: number;
    className?: string;
}

const GenericSkeleton: React.FC<GenericSkeletonProps> = ({
    variant = 'card',
    count = 1,
    className = ""
}) => {
    const renderSkeleton = () => {
        switch (variant) {
            case 'card':
                return (
                    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
                        <Skeleton className="w-full h-32 rounded-lg mb-4 bg-gray-200" />
                        <Skeleton className="h-6 w-3/4 mb-2 bg-gray-200" />
                        <Skeleton className="h-4 w-full mb-2 bg-gray-200" />
                        <Skeleton className="h-4 w-2/3 bg-gray-200" />
                    </div>
                );

            case 'list':
                return (
                    <div className={`flex items-center space-x-4 p-4 ${className}`}>
                        <Skeleton className="w-12 h-12 rounded-full bg-gray-200" />
                        <div className="space-y-2 flex-1">
                            <Skeleton className="h-4 w-3/4 bg-gray-200" />
                            <Skeleton className="h-4 w-1/2 bg-gray-200" />
                        </div>
                    </div>
                );

            case 'grid':
                return (
                    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
                        {Array.from({ length: count }).map((_, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4">
                                <Skeleton className="w-full h-24 rounded-lg mb-3 bg-gray-200" />
                                <Skeleton className="h-4 w-3/4 mb-2 bg-gray-200" />
                                <Skeleton className="h-4 w-1/2 bg-gray-200" />
                            </div>
                        ))}
                    </div>
                );

            case 'text':
                return (
                    <div className={`space-y-2 ${className}`}>
                        <Skeleton className="h-4 w-full bg-gray-200" />
                        <Skeleton className="h-4 w-5/6 bg-gray-200" />
                        <Skeleton className="h-4 w-4/6 bg-gray-200" />
                    </div>
                );

            case 'image':
                return (
                    <Skeleton className={`w-full h-48 rounded-lg bg-gray-200 ${className}`} />
                );

            case 'button':
                return (
                    <Skeleton className={`h-10 w-24 rounded-lg bg-gray-200 ${className}`} />
                );

            default:
                return <Skeleton className={`w-full h-32 bg-gray-200 ${className}`} />;
        }
    };

    if (variant === 'grid') {
        return <>{renderSkeleton()}</>;
    }

    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index}>
                    {renderSkeleton()}
                </div>
            ))}
        </>
    );
};

export default GenericSkeleton;
