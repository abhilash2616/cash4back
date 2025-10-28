// Centralized brand data index file
import { amazonData } from './amazon';
import { flipkartData } from './flipkart';
import { myntraData } from './myntra';
import { ajioData } from './ajio';
import { relianceDigitalData } from './relianceDigital';
import { nykaaData } from './nykaa';
import { firstcryData } from './firstcry';

// Re-export all brand data
export { amazonData } from './amazon';
export { flipkartData } from './flipkart';
export { myntraData } from './myntra';
export { ajioData } from './ajio';
export { relianceDigitalData } from './relianceDigital';
export { nykaaData } from './nykaa';
export { firstcryData } from './firstcry';

// Store interface
export interface Store {
    id: string;
    name: string;
    logo: string;
    banner: string[];
    cashbackRate: string;
    category: string;
    isVerified: boolean;
    description: string;
    featured: boolean;
    website: string;
    rating: number;
    totalUsers: number;
    establishedYear: number;
    headquarters: string;
    specialties: string[];
    timelineData: {
        title: string;
        value: string;
        subtitle: string;
    }[];
    termsAndConditions: string[];
    descriptionParagraphs: string[];
    dynamicContent: {
        promoHeading: string;
        rewardsText: string;
        rewardsDescription: string;
        earnRewardsText: string;
    };
    extraData: {
        title: string;
        description: string;
    }[];
    popularStores?: {
        id: string;
        name: string;
        category: string;
        isVerified?: boolean;
        cashbackRate?: string;
    }[];
    relatedStores?: {
        id: string;
        name: string;
        category: string;
        isVerified?: boolean;
        cashbackRate?: string;
    }[];
    faqs?: {
        question: string;
        answer: string;
    }[];
}

// Coupon interface
export interface Coupon {
    id: string;
    title: string;
    description: string;
    code: string;
    discount: string;
    store: string;
    expiryDate: string;
    isActive: boolean;
    category: string;
}

// All stores data
export const allStores: { [key: string]: Store } = {
    'amazon': amazonData,
    'flipkart': flipkartData,
    'myntra': myntraData,
    'ajio': ajioData,
    'reliance-digital': relianceDigitalData,
    'nykaa': nykaaData,
    'firstcry': firstcryData,
};

// Coupon templates for each store
export const couponTemplates: { [key: string]: Omit<Coupon, 'id' | 'store' | 'expiryDate' | 'isActive'>[] } = {
    'Amazon': [
        { title: 'Electronics Sale', description: 'Extra 10% off on electronics', code: 'AMAZON10', discount: '10%', category: 'Electronics' },
        { title: 'Prime Day Deals', description: 'Up to 50% off on Prime Day', code: 'PRIME50', discount: '50%', category: 'General' },
        { title: 'New User Offer', description: '₹100 off on first order', code: 'NEW100', discount: '₹100', category: 'General' },
    ],
    'Flipkart': [
        { title: 'Big Billion Days', description: 'Up to 80% off on Big Billion Days', code: 'BIGBILLION', discount: '80%', category: 'General' },
        { title: 'Mobile Deals', description: 'Extra 15% off on smartphones', code: 'MOBILE15', discount: '15%', category: 'Electronics' },
        { title: 'Fashion Sale', description: '30% off on fashion items', code: 'FASHION30', discount: '30%', category: 'Fashion' },
    ],
    'Myntra': [
        { title: 'End of Reason Sale', description: 'Up to 70% off on fashion', code: 'EORS70', discount: '70%', category: 'Fashion' },
        { title: 'Beauty Bonanza', description: '25% off on beauty products', code: 'BEAUTY25', discount: '25%', category: 'Beauty' },
        { title: 'New Arrivals', description: '20% off on new collection', code: 'NEW20', discount: '20%', category: 'Fashion' },
    ],
    'Ajio': [
        { title: 'Ajio Sale', description: 'Up to 60% off on all items', code: 'AJIO60', discount: '60%', category: 'Fashion' },
        { title: 'Weekend Special', description: 'Extra 25% off this weekend', code: 'WEEKEND25', discount: '25%', category: 'Fashion' },
    ],
    'Reliance Digital': [
        { title: 'Digital Sale', description: 'Up to 40% off on electronics', code: 'DIGITAL40', discount: '40%', category: 'Electronics' },
        { title: 'Mobile Mania', description: 'Extra 20% off on mobile phones', code: 'MOBILE20', discount: '20%', category: 'Electronics' },
    ],
    'Nykaa': [
        { title: 'Beauty Bonanza', description: 'Up to 50% off on beauty products', code: 'BEAUTY50', discount: '50%', category: 'Beauty' },
        { title: 'Skincare Special', description: 'Extra 30% off on skincare', code: 'SKIN30', discount: '30%', category: 'Beauty' },
    ],
    'FirstCry': [
        { title: 'Kids Festival', description: 'Up to 60% off on kids products', code: 'KIDS60', discount: '60%', category: 'Kids' },
        { title: 'Baby Care Sale', description: 'Extra 25% off on baby essentials', code: 'BABY25', discount: '25%', category: 'Baby Care' },
    ]
};

// Function to generate coupons for a store
export const generateCoupons = (storeName: string): Coupon[] => {
    const coupons = couponTemplates[storeName] || [];

    return coupons.map((coupon, index) => ({
        id: `${storeName.toLowerCase()}-coupon-${index + 1}`,
        title: coupon.title,
        description: coupon.description,
        code: coupon.code,
        discount: coupon.discount,
        store: storeName,
        expiryDate: '2024-12-31',
        isActive: true,
        category: coupon.category
    }));
};
