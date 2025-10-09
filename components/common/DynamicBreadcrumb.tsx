"use client";

import React from 'react';
import Link from 'next/link';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadcrumbItem {
    label: string;
    href?: string;
    isCurrentPage?: boolean;
}

interface DynamicBreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

const DynamicBreadcrumb: React.FC<DynamicBreadcrumbProps> = ({ items, className = "" }) => {
    return (
        <Breadcrumb className={className}>
            <BreadcrumbList>
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem>
                            {item.isCurrentPage ? (
                                <BreadcrumbPage className="text-gray-900 font-medium">
                                    {item.label}
                                </BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link href={item.href || '#'} className="text-gray-500 hover:text-blue-600 transition-colors">
                                        {item.label}
                                    </Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        {index < items.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default DynamicBreadcrumb;
