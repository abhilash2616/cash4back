export interface Offer {
    offerName: string;
    offerDetails: string;
    offerValidity: string;
}

export const amazonOffersData: Offer[] = [
    {
        offerName: "Amazon Cashback & Reward Offers",
        offerDetails: "Get upto 2.5% CashKaro Rewards on Beauty, Luxury Beauty, Home Improvement and more",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "Amazon Coupon Codes",
        offerDetails: "Upto 40% Off on mobiles",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "Amazon India Coupons",
        offerDetails: "Upto 70% Off on kitchen & dining",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "Amazon Laptops Offers",
        offerDetails: "Upto 60% Off on Laptops",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "Amazon Vouchers For Headphones & Earphones",
        offerDetails: "Upto 75% Off on Headphones & Earphones",
        offerValidity: "Oct 31, 2025",
    },
];

export const flipkartOffersData: Offer[] = [
    {
        offerName: "Flipkart Big Billion Days",
        offerDetails: "Upto 80% Off on Electronics, Fashion, Home & more",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "Flipkart Mobile Offers",
        offerDetails: "Upto 50% Off on smartphones and accessories",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "Flipkart Fashion Sale",
        offerDetails: "Upto 70% Off on clothing and footwear",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "Flipkart Home & Furniture",
        offerDetails: "Upto 60% Off on home appliances and furniture",
        offerValidity: "Oct 31, 2025",
    },
];

export const myntraOffersData: Offer[] = [
    {
        offerName: "Myntra End of Reason Sale",
        offerDetails: "Upto 70% Off on fashion and lifestyle products",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "Myntra Beauty Bonanza",
        offerDetails: "Upto 50% Off on beauty and personal care",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "Myntra New Arrivals",
        offerDetails: "Upto 40% Off on latest fashion collection",
        offerValidity: "Oct 31, 2025",
    },
];

export const ajioOffersData: Offer[] = [
    {
        offerName: "Ajio Fashion Sale",
        offerDetails: "Upto 60% Off on men's and women's clothing",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "Ajio Weekend Special",
        offerDetails: "Upto 50% Off on footwear and accessories",
        offerValidity: "Oct 31, 2025",
    },
];

export const relianceDigitalOffersData: Offer[] = [
    {
        offerName: "Reliance Digital Electronics Sale",
        offerDetails: "Upto 40% Off on mobile phones and laptops",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "Reliance Digital Home Appliances",
        offerDetails: "Upto 30% Off on refrigerators, ACs and more",
        offerValidity: "Oct 31, 2025",
    },
];

export const nykaaOffersData: Offer[] = [
    {
        offerName: "Nykaa Beauty Bonanza",
        offerDetails: "Upto 50% Off on skincare and makeup products",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "Nykaa Wellness Sale",
        offerDetails: "Upto 40% Off on health and wellness products",
        offerValidity: "Oct 31, 2025",
    },
];

export const firstcryOffersData: Offer[] = [
    {
        offerName: "FirstCry Kids Festival",
        offerDetails: "Upto 60% Off on kids clothing and toys",
        offerValidity: "Oct 31, 2025",
    },
    {
        offerName: "FirstCry Baby Care Sale",
        offerDetails: "Upto 50% Off on baby essentials and care products",
        offerValidity: "Oct 31, 2025",
    },
];

// All offers data mapping
export const allOffersData: { [key: string]: Offer[] } = {
    'Amazon': amazonOffersData,
    'Flipkart': flipkartOffersData,
    'Myntra': myntraOffersData,
    'Ajio': ajioOffersData,
    'Reliance Digital': relianceDigitalOffersData,
    'Nykaa': nykaaOffersData,
    'FirstCry': firstcryOffersData,
};

// Function to get offers data for a brand
export const getOffersData = (brandName: string): Offer[] => {
    return allOffersData[brandName] || allOffersData['Amazon'];
};
