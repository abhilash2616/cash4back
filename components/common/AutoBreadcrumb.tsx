"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import DynamicBreadcrumb from './DynamicBreadcrumb';

interface AutoBreadcrumbProps {
    className?: string;
    customLabels?: { [key: string]: string };
}

const AutoBreadcrumb: React.FC<AutoBreadcrumbProps> = ({
    className = "",
    customLabels = {}
}) => {
    const pathname = usePathname();

    // Generate breadcrumb items from pathname
    const generateBreadcrumbItems = () => {
        const pathSegments = pathname.split('/').filter(segment => segment !== '');
        const items: { label: string; href?: string; isCurrentPage?: boolean }[] = [
            { label: 'Home', href: '/' }
        ];

        let currentPath = '';

        pathSegments.forEach((segment, index) => {
            currentPath += `/${segment}`;
            const isLast = index === pathSegments.length - 1;

            // Use custom label if provided, otherwise format the segment
            const label = customLabels[segment] ||
                segment.split('-').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ');

            items.push({
                label,
                href: isLast ? undefined : currentPath,
                isCurrentPage: isLast
            });
        });

        return items;
    };

    const breadcrumbItems = generateBreadcrumbItems();

    return <DynamicBreadcrumb items={breadcrumbItems} className={className} />;
};

export default AutoBreadcrumb;
