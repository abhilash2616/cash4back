'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface RelatedStore {
    id: string;
    name: string;
    category: string;
    isVerified?: boolean;
    cashbackRate?: string;
}

interface RelatedStoreProps {
    stores: RelatedStore[];
    title?: string;
    showCashbackRate?: boolean;
    columnsCount?: number;
}

const RelatedStore: React.FC<RelatedStoreProps> = ({
    stores,
    title = "Related Stores",
    showCashbackRate = false,
    columnsCount = 5
}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    // Don't render if no stores
    if (!stores || stores.length === 0) {
        return null;
    }

    // Organize stores into columns
    const storesPerColumn = Math.ceil(stores.length / columnsCount);
    const storesByColumns: RelatedStore[][] = [];

    for (let i = 0; i < columnsCount; i++) {
        const startIndex = i * storesPerColumn;
        const endIndex = Math.min(startIndex + storesPerColumn, stores.length);
        storesByColumns.push(stores.slice(startIndex, endIndex));
    }

    return (
        <div className="w-full bg-white p-6 rounded-[20px] shadow-sm border border-gray-200">
            {/* Header */}
            <div className="mb-4">
                <div className="flex items-center justify-between gap-2">
                    <h2 className="text-xl font-bold text-gray-900 transition-colors duration-200">{title}</h2>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:cursor-pointer hover:scale-110 active:scale-95 group"
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                    >
                        <div className="transition-transform duration-300 ease-in-out">
                            {isExpanded ? (
                                <ChevronUp className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                            )}
                        </div>
                    </button>
                </div>
            </div>

            {/* Stores Grid */}
            {isExpanded && (
                <div className="flex flex-wrap justify-between gap-2">
                    {storesByColumns.map((column, columnIndex) => (
                        <div key={columnIndex} className="w-full md:w-[10%]">
                            {column.map((store, storeIndex) => (
                                <Link
                                    key={store.id}
                                    href={`/stores/${store.id}`}
                                    className="group cursor-pointer p-3 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 relative overflow-hidden block"
                                    style={{
                                        animationDelay: `${(columnIndex * 100) + (storeIndex * 50)}ms`,
                                        animation: 'fadeInUp 0.6s ease-out forwards',
                                        opacity: 0,
                                        transform: 'translateY(20px)'
                                    }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                                {store.name}
                                            </span>
                                        </div>
                                    </div>
                                    {showCashbackRate && (
                                        <div className="text-xs text-gray-500 mt-1 transition-colors duration-200 group-hover:text-gray-600">
                                            {store.category}
                                        </div>
                                    )}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RelatedStore;