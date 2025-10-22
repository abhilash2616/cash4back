"use client";

import { useEffect } from 'react';

export const useScrollDisable = (isDisabled: boolean) => {
    useEffect(() => {
        if (isDisabled) {
            // Scroll to top when skeleton starts
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

            // Disable scroll
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            // Enable scroll
            document.body.style.overflow = 'unset';
            document.body.style.height = 'auto';
        }

        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.height = 'auto';
        };
    }, [isDisabled]);
};
