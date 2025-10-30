"use client";

import { useParams } from "next/navigation";
import HeaderText from "@/components/common/HeaderText";
import AutoBreadcrumb from "@/components/common/AutoBreadcrumb";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoTimerOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const FlashDealDetail = () => {
    const params = useParams();
    const dealId = params.dealId as string;
    const [timeLeft, setTimeLeft] = useState(34 * 60 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, "0")}:${m
            .toString()
            .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    // Flash deals data mapping
    const flashDealsData: {
        [key: string]: {
            id: string;
            title: string;
            description: string;
            image: string;
            brandImage: string;
            discount: string;
            originalPrice: string;
            discountedPrice: string;
            cashback: string;
            validUntil: string;
            terms: string[];
        }
    } = {
        'biggest-sales': {
            id: 'biggest-sales',
            title: "Biggest Sales",
            description: "Get amazing discounts on your favorite products with up to 70% off!",
            image: "/assets/img/flashdeal/Vajor.png",
            brandImage: "/assets/img/flashdeal/strch-coupons.jpg",
            discount: "Up to 70% OFF",
            originalPrice: "₹2,999",
            discountedPrice: "₹899",
            cashback: "5% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected items only",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹500 required",
                "Cannot be combined with other offers"
            ]
        },
        'mobiles-electronics': {
            id: 'mobiles-electronics',
            title: "Mobiles & Electronics",
            description: "Latest smartphones and electronics with incredible deals!",
            image: "/assets/img/flashdeal/Vajor-1.png",
            brandImage: "/assets/img/flashdeal/clove-oral-care-coupons.jpg",
            discount: "Up to 60% OFF",
            originalPrice: "₹15,999",
            discountedPrice: "₹6,399",
            cashback: "8% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected mobile phones and electronics",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹1,000 required",
                "Cannot be combined with other offers"
            ]
        },
        'fashion': {
            id: 'fashion',
            title: "Fashion",
            description: "Trendy fashion items with amazing discounts!",
            image: "/assets/img/flashdeal/Vajor-2.png",
            brandImage: "/assets/img/flashdeal/nutrabay-offers-test.png",
            discount: "Up to 50% OFF",
            originalPrice: "₹1,999",
            discountedPrice: "₹999",
            cashback: "6% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected fashion items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹500 required",
                "Cannot be combined with other offers"
            ]
        },
        'home-kitchen': {
            id: 'home-kitchen',
            title: "Home & Kitchen",
            description: "Transform your home with our kitchen and home essentials!",
            image: "/assets/img/flashdeal/Vajor-3.png",
            brandImage: "/assets/img/flashdeal/times-prime-coupons.jpg",
            discount: "Up to 55% OFF",
            originalPrice: "₹3,999",
            discountedPrice: "₹1,799",
            cashback: "7% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected home and kitchen items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹800 required",
                "Cannot be combined with other offers"
            ]
        },
        'min-50-cashback': {
            id: 'min-50-cashback',
            title: "Min 50% Cashback",
            description: "Get minimum 50% cashback on all purchases!",
            image: "/assets/img/flashdeal/Vajor-4.png",
            brandImage: "/assets/img/flashdeal/bank-karo-axis-flipkart.png",
            discount: "50% Cashback",
            originalPrice: "₹2,000",
            discountedPrice: "₹1,000",
            cashback: "50% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Minimum 50% cashback guaranteed",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹500 required",
                "Cannot be combined with other offers"
            ]
        },
        'credit-cards': {
            id: 'credit-cards',
            title: "Credit Cards",
            description: "Apply for credit cards with amazing benefits!",
            image: "/assets/img/flashdeal/ascsac.png",
            brandImage: "/assets/img/flashdeal/bajaj-prime-coupons.png",
            discount: "Special Offer",
            originalPrice: "₹0",
            discountedPrice: "₹0",
            cashback: "Welcome Bonus",
            validUntil: "Limited Time Offer",
            terms: [
                "Apply for credit cards with special benefits",
                "Welcome bonus will be credited within 30 days",
                "Terms and conditions apply",
                "Subject to bank approval"
            ]
        },
        'beauty-grooming': {
            id: 'beauty-grooming',
            title: "Beauty & Grooming",
            description: "Premium beauty and grooming products at amazing prices!",
            image: "/assets/img/flashdeal/the-man-company.png",
            brandImage: "/assets/img/flashdeal/themancompany-coupons-hide.jpg",
            discount: "Up to 45% OFF",
            originalPrice: "₹1,500",
            discountedPrice: "₹825",
            cashback: "4% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected beauty and grooming products",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹300 required",
                "Cannot be combined with other offers"
            ]
        },
        'flights-hotels': {
            id: 'flights-hotels',
            title: "Flights & Hotels",
            description: "Book your next trip with amazing travel deals!",
            image: "/assets/img/flashdeal/Vajor-5.png",
            brandImage: "/assets/img/flashdeal/fitspire-coupons.png",
            discount: "Up to 30% OFF",
            originalPrice: "₹5,000",
            discountedPrice: "₹3,500",
            cashback: "3% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected flights and hotels",
                "Cashback will be credited within 7-10 business days",
                "Minimum booking value of ₹2,000 required",
                "Cannot be combined with other offers"
            ]
        },
        'food-grocery': {
            id: 'food-grocery',
            title: "Food & Grocery",
            description: "Fresh groceries and food items delivered to your doorstep!",
            image: "/assets/img/flashdeal/Vajor-6.png",
            brandImage: "/assets/img/flashdeal/cleevo-offers.png",
            discount: "Up to 25% OFF",
            originalPrice: "₹800",
            discountedPrice: "₹600",
            cashback: "2% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected food and grocery items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹200 required",
                "Cannot be combined with other offers"
            ]
        },
        'pharmacy': {
            id: 'pharmacy',
            title: "Pharmacy",
            description: "Essential medicines and health products at great prices!",
            image: "/assets/img/flashdeal/Vajor-7.png",
            brandImage: "/assets/img/flashdeal/house-of-koala-offers.png",
            discount: "Up to 20% OFF",
            originalPrice: "₹500",
            discountedPrice: "₹400",
            cashback: "2% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected pharmacy items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹150 required",
                "Cannot be combined with other offers"
            ]
        },
        'new-on-cashkaro': {
            id: 'new-on-cashkaro',
            title: "New on CashKaro",
            description: "Discover the latest brands and offers on CashKaro!",
            image: "/assets/img/flashdeal/sbi-simply.png",
            brandImage: "/assets/img/flashdeal/simply-click-sbi-card.png",
            discount: "Welcome Offer",
            originalPrice: "₹1,000",
            discountedPrice: "₹500",
            cashback: "10% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Welcome offer for new users",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹500 required",
                "Cannot be combined with other offers"
            ]
        },
        'education': {
            id: 'education',
            title: "Education",
            description: "Educational courses and materials with special discounts!",
            image: "/assets/img/flashdeal/Vajor-8.png",
            brandImage: "/assets/img/flashdeal/gonoise-coupons.jpg",
            discount: "Up to 40% OFF",
            originalPrice: "₹2,500",
            discountedPrice: "₹1,500",
            cashback: "5% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected educational courses",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹1,000 required",
                "Cannot be combined with other offers"
            ]
        },
        'loans': {
            id: 'loans',
            title: "Loans",
            description: "Get the best loan deals with competitive interest rates!",
            image: "/assets/img/flashdeal/Vajor-9.png",
            brandImage: "/assets/img/flashdeal/ott-play-coupons-test.png",
            discount: "Low Interest",
            originalPrice: "₹0",
            discountedPrice: "₹0",
            cashback: "Processing Fee Waiver",
            validUntil: "Limited Time Offer",
            terms: [
                "Competitive interest rates available",
                "Processing fee waiver on selected loans",
                "Terms and conditions apply",
                "Subject to bank approval"
            ]
        },
        'health-wellness': {
            id: 'health-wellness',
            title: "Health & Wellness",
            description: "Take care of your health with our wellness products!",
            image: "/assets/img/flashdeal/Vajor-10.png",
            brandImage: "/assets/img/flashdeal/hyugalife-coupons.jpg",
            discount: "Up to 35% OFF",
            originalPrice: "₹1,200",
            discountedPrice: "₹780",
            cashback: "3% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected health and wellness products",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹400 required",
                "Cannot be combined with other offers"
            ]
        },
        'departmental-1': {
            id: 'departmental-1',
            title: "Departmental Store",
            description: "Everything you need under one roof with amazing deals!",
            image: "/assets/img/flashdeal/Vajor-11.png",
            brandImage: "/assets/img/flashdeal/koparoclean-coupons.jpg",
            discount: "Up to 40% OFF",
            originalPrice: "₹1,500",
            discountedPrice: "₹900",
            cashback: "4% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected departmental store items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹500 required",
                "Cannot be combined with other offers"
            ]
        },
        'departmental-2': {
            id: 'departmental-2',
            title: "Departmental Store",
            description: "Quality products at unbeatable prices!",
            image: "/assets/img/flashdeal/Vajor-12.png",
            brandImage: "/assets/img/flashdeal/clove-oral-care-coupons.jpg",
            discount: "Up to 35% OFF",
            originalPrice: "₹1,200",
            discountedPrice: "₹780",
            cashback: "3% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected departmental store items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹400 required",
                "Cannot be combined with other offers"
            ]
        },
        'departmental-3': {
            id: 'departmental-3',
            title: "Departmental Store",
            description: "Shop smart with our exclusive departmental deals!",
            image: "/assets/img/flashdeal/Vajor-13.png",
            brandImage: "/assets/img/flashdeal/theurbannestco-coupons.png",
            discount: "Up to 45% OFF",
            originalPrice: "₹1,800",
            discountedPrice: "₹990",
            cashback: "5% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected departmental store items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹600 required",
                "Cannot be combined with other offers"
            ]
        },
        'departmental-4': {
            id: 'departmental-4',
            title: "Departmental Store",
            description: "Premium quality at affordable prices!",
            image: "/assets/img/flashdeal/Vajor-14.png",
            brandImage: "/assets/img/flashdeal/bombay-shaving-company.png",
            discount: "Up to 30% OFF",
            originalPrice: "₹1,000",
            discountedPrice: "₹700",
            cashback: "2% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected departmental store items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹300 required",
                "Cannot be combined with other offers"
            ]
        },
        'departmental-5': {
            id: 'departmental-5',
            title: "Departmental Store",
            description: "Your one-stop shop for all essentials!",
            image: "/assets/img/flashdeal/Vajor-15.png",
            brandImage: "/assets/img/flashdeal/fitspire-coupons.png",
            discount: "Up to 50% OFF",
            originalPrice: "₹2,000",
            discountedPrice: "₹1,000",
            cashback: "6% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected departmental store items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹500 required",
                "Cannot be combined with other offers"
            ]
        },
        'departmental-6': {
            id: 'departmental-6',
            title: "Departmental Store",
            description: "Great deals on everyday essentials!",
            image: "/assets/img/flashdeal/Vajor-16.png",
            brandImage: "/assets/img/flashdeal/nutrabay-offers-test.png",
            discount: "Up to 25% OFF",
            originalPrice: "₹800",
            discountedPrice: "₹600",
            cashback: "2% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected departmental store items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹200 required",
                "Cannot be combined with other offers"
            ]
        },
        'departmental-7': {
            id: 'departmental-7',
            title: "Departmental Store",
            description: "Quality meets affordability!",
            image: "/assets/img/flashdeal/Vajor-17.png",
            brandImage: "/assets/img/flashdeal/nutriburst-india-coupons-test.png",
            discount: "Up to 40% OFF",
            originalPrice: "₹1,500",
            discountedPrice: "₹900",
            cashback: "4% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected departmental store items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹500 required",
                "Cannot be combined with other offers"
            ]
        },
        'departmental-8': {
            id: 'departmental-8',
            title: "Departmental Store",
            description: "Shop more, save more!",
            image: "/assets/img/flashdeal/Vajor-18.png",
            brandImage: "/assets/img/flashdeal/la-mujer-coupons-test.png",
            discount: "Up to 35% OFF",
            originalPrice: "₹1,200",
            discountedPrice: "₹780",
            cashback: "3% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected departmental store items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹400 required",
                "Cannot be combined with other offers"
            ]
        },
        'departmental-9': {
            id: 'departmental-9',
            title: "Departmental Store",
            description: "Exclusive deals on premium products!",
            image: "/assets/img/flashdeal/Vajor-19.png",
            brandImage: "/assets/img/flashdeal/aevya-coupons.png",
            discount: "Up to 45% OFF",
            originalPrice: "₹1,800",
            discountedPrice: "₹990",
            cashback: "5% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected departmental store items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹600 required",
                "Cannot be combined with other offers"
            ]
        },
        'departmental-10': {
            id: 'departmental-10',
            title: "Departmental Store",
            description: "Your trusted shopping destination!",
            image: "/assets/img/flashdeal/Vajor-20.png",
            brandImage: "/assets/img/flashdeal/ceazur-coupons.jpg",
            discount: "Up to 30% OFF",
            originalPrice: "₹1,000",
            discountedPrice: "₹700",
            cashback: "2% Cashback",
            validUntil: "Limited Time Offer",
            terms: [
                "Valid on selected departmental store items",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹300 required",
                "Cannot be combined with other offers"
            ]
        }
    };

    // Get deal data based on dealId
    const dealData = flashDealsData[dealId] || {
        id: dealId,
        title: "Flash Deal",
        description: "Amazing deals waiting for you!",
        image: "/assets/img/flashdeal/Vajor.png",
        brandImage: "/assets/img/flashdeal/strch-coupons.jpg",
        discount: "Special Offer",
        originalPrice: "₹1,000",
        discountedPrice: "₹500",
        cashback: "5% Cashback",
        validUntil: "Limited Time Offer",
        terms: [
            "Valid on selected items only",
            "Cashback will be credited within 7-10 business days",
            "Minimum order value of ₹500 required",
            "Cannot be combined with other offers"
        ]
    };

    // Dynamic breadcrumb labels
    const customLabels = {
        [dealId]: dealData.title
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb Navigation */}
            <AutoBreadcrumb
                className="mb-6"
                customLabels={customLabels}
            />

            <HeaderText heading={`Flash Deal - ${dealData.title}`} textalign="text-left" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {/* Deal Image */}
                <div className="relative">
                    <div className="relative overflow-hidden rounded-xl">
                        <Image
                            src={dealData.image}
                            width={600}
                            height={400}
                            alt={dealData.title}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute top-4 left-4">
                            <Image
                                src={dealData.brandImage}
                                width={100}
                                height={60}
                                alt="Brand"
                                className="border-2 border-white object-contain bg-white w-[84px] h-12 rounded-lg overflow-hidden"
                            />
                        </div>
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg font-bold">
                            {dealData.discount}
                        </div>
                    </div>
                </div>

                {/* Deal Details */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{dealData.title}</h1>
                        <p className="text-gray-600 text-lg">{dealData.description}</p>
                    </div>

                    {/* Timer */}
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 flex items-center gap-3">
                        <IoTimerOutline className="text-2xl text-red-500" />
                        <div>
                            <p className="font-semibold text-gray-900">Deal Ends In:</p>
                            <p className="text-2xl font-bold text-red-500">{formatTime(timeLeft)}</p>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-3xl font-bold text-green-600">₹{dealData.discountedPrice}</span>
                            <span className="text-xl text-gray-500 line-through">₹{dealData.originalPrice}</span>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                                {dealData.cashback}
                            </span>
                        </div>
                        <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 text-lg">
                            Grab This Deal Now
                        </Button>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Terms & Conditions</h3>
                        <ul className="space-y-2">
                            {dealData.terms.map((term: string, index: number) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                    <span className="text-red-500 mt-1">•</span>
                                    <span>{term}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashDealDetail;
