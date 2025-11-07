"use client";

import { useParams } from "next/navigation";
import AutoBreadcrumb from "@/components/common/AutoBreadcrumb";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoTimerOutline } from "react-icons/io5";
import { Check, Copy, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { amazonData } from "@/data/brands";

const TopDealDetail = () => {
    const params = useParams();
    const dealId = params.dealId as string;
    const [timeLeft, setTimeLeft] = useState(34 * 60 * 60);
    const [copied, setCopied] = useState(false);

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

    const copyToClipboard = async (code: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const topDealsData: {
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
            couponCode?: string;
            brandName?: string;
            brandTagline?: string;
            keyFeatures?: string[];
            aboutOffer?: string[];
            whyChoose?: string[];
            aboutBrand?: string[];
            cashbackDetails?: string[];
            howToGrab?: string[];
        }
    } = {
        'biggest-sales': {
            id: 'biggest-sales',
            title: "Biggest Sales",
            description: "Get amazing discounts on your favorite products with up to 70% off on Amazon's biggest sale event!",
            image: "/assets/img/amazon-top-deals/beauty.png",
            brandImage: amazonData.logo,
            discount: "Up to 70% OFF",
            originalPrice: "₹2,999",
            discountedPrice: "₹899",
            cashback: "5% Cashback",
            validUntil: "Limited Time Offer",
            couponCode: "BIGSALE70",
            brandName: "Amazon",
            brandTagline: "Shop Everything",
            keyFeatures: [
                "Products Are 100% Authentic",
                "Fast Delivery Available",
                "Wide Range of Categories",
                "Prime Member Benefits"
            ],
            aboutOffer: [
                "Up to 70% off on selected items across all categories",
                "5% CashKaro Cashback on all purchases",
                "Valid on electronics, fashion, home & kitchen, and more",
                "Additional discounts for Prime members"
            ],
            whyChoose: [
                "100% Authentic Products from verified sellers",
                "Fast and Secure Delivery with Amazon Prime",
                "24/7 Customer Support",
                "Easy Returns and Refunds",
                "Wide selection of products"
            ],
            aboutBrand: [
                "Amazon is India's largest online marketplace",
                "Offers millions of products across various categories",
                "Trusted by millions of customers nationwide",
                "Secure payment options and easy checkout"
            ],
            cashbackDetails: [
                "Cashback will be tracked within 24-48 hours",
                "Cashback will be confirmed within 7-10 business days",
                "Cashback will be credited to your account within 15-20 business days"
            ],
            howToGrab: [
                "Click on 'Grab Deal' button",
                "You will be redirected to Amazon",
                "Shop and checkout as usual",
                "Cashback will be automatically tracked"
            ],
            terms: [
                "Valid on selected items only",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹500 required",
                "Cannot be combined with other offers",
                "Do not add products to cart before clicking through CashKaro"
            ]
        },
        'mobiles-electronics': {
            id: 'mobiles-electronics',
            title: "Mobiles & Electronics",
            description: "Latest smartphones, laptops, and electronics with incredible deals and exclusive offers!",
            image: "/assets/img/amazon-top-deals/fashion.png",
            brandImage: amazonData.logo,
            discount: "Up to 60% OFF",
            originalPrice: "₹15,999",
            discountedPrice: "₹6,399",
            cashback: "8% Cashback",
            validUntil: "Limited Time Offer",
            couponCode: "MOBILE60",
            brandName: "Amazon",
            brandTagline: "Tech Deals",
            keyFeatures: [
                "Latest Models Available",
                "EMI Options Available",
                "Exchange Offers",
                "Warranty Included"
            ],
            aboutOffer: [
                "Up to 60% off on smartphones and electronics",
                "8% CashKaro Cashback on all purchases",
                "No Cost EMI options available",
                "Exchange your old device and save more"
            ],
            whyChoose: [
                "Genuine products with manufacturer warranty",
                "Latest models from top brands",
                "Easy EMI options",
                "Fast delivery on electronics"
            ],
            aboutBrand: [
                "Amazon offers the widest selection of electronics",
                "Exclusive deals on smartphones and gadgets",
                "Trusted sellers and verified products"
            ],
            cashbackDetails: [
                "Cashback will be tracked within 24-48 hours",
                "Cashback will be confirmed within 7-10 business days",
                "Cashback will be credited to your account within 15-20 business days"
            ],
            howToGrab: [
                "Click on 'Grab Deal' button",
                "Browse and select your favorite electronics",
                "Checkout and make payment",
                "Cashback will be automatically tracked"
            ],
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
            description: "Trendy fashion items including clothing, accessories, and footwear with amazing discounts!",
            image: "/assets/img/amazon-top-deals/homeImp.png",
            brandImage: amazonData.logo,
            discount: "Up to 50% OFF",
            originalPrice: "₹1,999",
            discountedPrice: "₹999",
            cashback: "6% Cashback",
            validUntil: "Limited Time Offer",
            couponCode: "FASHION50",
            brandName: "Amazon",
            brandTagline: "Style Deals",
            keyFeatures: [
                "Latest Fashion Trends",
                "Multiple Brands Available",
                "Size Guide Available",
                "Easy Returns"
            ],
            aboutOffer: [
                "Up to 50% off on fashion items",
                "6% CashKaro Cashback on all purchases",
                "Valid on clothing, footwear, and accessories",
                "Free shipping on orders above ₹499"
            ],
            whyChoose: [
                "Wide range of brands and styles",
                "Latest fashion trends",
                "Easy returns and exchanges",
                "Size guide and customer reviews"
            ],
            aboutBrand: [
                "Amazon Fashion offers styles for everyone",
                "From casual wear to formal attire",
                "Trusted brands and quality products"
            ],
            cashbackDetails: [
                "Cashback will be tracked within 24-48 hours",
                "Cashback will be confirmed within 7-10 business days",
                "Cashback will be credited to your account within 15-20 business days"
            ],
            howToGrab: [
                "Click on 'Grab Deal' button",
                "Browse fashion items",
                "Select your size and add to cart",
                "Checkout and earn cashback"
            ],
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
            description: "Transform your home with kitchen appliances, home decor, and furniture at unbeatable prices!",
            image: "/assets/img/amazon-top-deals/luggage.png",
            brandImage: amazonData.logo,
            discount: "Up to 55% OFF",
            originalPrice: "₹3,999",
            discountedPrice: "₹1,799",
            cashback: "7% Cashback",
            validUntil: "Limited Time Offer",
            couponCode: "HOME55",
            brandName: "Amazon",
            brandTagline: "Home Essentials",
            keyFeatures: [
                "Premium Quality Products",
                "Installation Services Available",
                "Warranty Included",
                "Easy Returns"
            ],
            aboutOffer: [
                "Up to 55% off on home and kitchen items",
                "7% CashKaro Cashback on all purchases",
                "Valid on appliances, furniture, and decor",
                "Free installation on selected items"
            ],
            whyChoose: [
                "Quality products from trusted brands",
                "Installation services available",
                "Warranty and support included",
                "Easy returns and exchanges"
            ],
            aboutBrand: [
                "Amazon Home & Kitchen offers everything for your home",
                "From kitchen appliances to furniture",
                "Quality products at great prices"
            ],
            cashbackDetails: [
                "Cashback will be tracked within 24-48 hours",
                "Cashback will be confirmed within 7-10 business days",
                "Cashback will be credited to your account within 15-20 business days"
            ],
            howToGrab: [
                "Click on 'Grab Deal' button",
                "Browse home and kitchen products",
                "Add to cart and checkout",
                "Earn cashback on your purchase"
            ],
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
            description: "Get minimum 50% cashback on all purchases - the best cashback offer available!",
            image: "/assets/img/amazon-top-deals/shoes.png",
            brandImage: amazonData.logo,
            discount: "50% Cashback",
            originalPrice: "₹2,000",
            discountedPrice: "₹1,000",
            cashback: "50% Cashback",
            validUntil: "Limited Time Offer",
            couponCode: "CASH50",
            brandName: "Amazon",
            brandTagline: "Maximum Savings",
            keyFeatures: [
                "Minimum 50% Cashback Guaranteed",
                "Valid on All Categories",
                "No Minimum Purchase",
                "Instant Cashback"
            ],
            aboutOffer: [
                "Minimum 50% cashback guaranteed on all purchases",
                "Valid across all product categories",
                "No minimum purchase requirement",
                "Best cashback offer available"
            ],
            whyChoose: [
                "Highest cashback rate available",
                "Valid on all products",
                "No restrictions",
                "Easy to claim"
            ],
            aboutBrand: [
                "Amazon offers the best deals and cashback",
                "Shop everything and earn maximum cashback",
                "Trusted platform with millions of products"
            ],
            cashbackDetails: [
                "Cashback will be tracked within 24-48 hours",
                "Cashback will be confirmed within 7-10 business days",
                "Cashback will be credited to your account within 15-20 business days"
            ],
            howToGrab: [
                "Click on 'Grab Deal' button",
                "Shop any product on Amazon",
                "Checkout and make payment",
                "Earn 50% cashback automatically"
            ],
            terms: [
                "Minimum 50% cashback guaranteed",
                "Cashback will be credited within 7-10 business days",
                "Valid on all products",
                "Cannot be combined with other offers"
            ]
        },
        'credit-cards': {
            id: 'credit-cards',
            title: "Credit Cards",
            description: "Apply for Amazon credit cards with amazing benefits, welcome bonuses, and exclusive rewards!",
            image: "/assets/img/amazon-top-deals/sports.png",
            brandImage: amazonData.logo,
            discount: "Special Offer",
            originalPrice: "₹0",
            discountedPrice: "₹0",
            cashback: "Welcome Bonus",
            validUntil: "Limited Time Offer",
            brandName: "Amazon",
            brandTagline: "Financial Services",
            keyFeatures: [
                "Welcome Bonus Available",
                "Reward Points on Every Purchase",
                "No Annual Fee",
                "Easy Application Process"
            ],
            aboutOffer: [
                "Apply for Amazon credit cards with special benefits",
                "Welcome bonus will be credited within 30 days",
                "Earn reward points on every purchase",
                "No annual fee for first year"
            ],
            whyChoose: [
                "Exclusive benefits for Amazon shoppers",
                "Reward points on all purchases",
                "Easy application and approval",
                "No hidden charges"
            ],
            aboutBrand: [
                "Amazon offers co-branded credit cards",
                "Special benefits for Prime members",
                "Secure and trusted financial services"
            ],
            cashbackDetails: [
                "Welcome bonus will be credited within 30 days",
                "Reward points will be credited to your account",
                "Cashback on eligible purchases"
            ],
            howToGrab: [
                "Click on 'Grab Deal' button",
                "Fill out the credit card application",
                "Submit required documents",
                "Get approved and enjoy benefits"
            ],
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
            description: "Premium beauty and grooming products from top brands at amazing prices with exclusive offers!",
            image: "/assets/img/amazon-top-deals/watches.png",
            brandImage: amazonData.logo,
            discount: "Up to 45% OFF",
            originalPrice: "₹1,500",
            discountedPrice: "₹825",
            cashback: "4% Cashback",
            validUntil: "Limited Time Offer",
            couponCode: "BEAUTY45",
            brandName: "Amazon",
            brandTagline: "Beauty Essentials",
            keyFeatures: [
                "Authentic Products",
                "Top Brands Available",
                "Beauty Tips Included",
                "Easy Returns"
            ],
            aboutOffer: [
                "Up to 45% off on beauty and grooming products",
                "4% CashKaro Cashback on all purchases",
                "Valid on skincare, makeup, and grooming items",
                "Free samples on selected orders"
            ],
            whyChoose: [
                "100% authentic products from verified sellers",
                "Wide range of international and Indian brands",
                "Customer reviews and ratings",
                "Easy returns and exchanges"
            ],
            aboutBrand: [
                "Amazon Beauty offers products for all skin types",
                "From budget-friendly to premium brands",
                "Trusted sellers and genuine products"
            ],
            cashbackDetails: [
                "Cashback will be tracked within 24-48 hours",
                "Cashback will be confirmed within 7-10 business days",
                "Cashback will be credited to your account within 15-20 business days"
            ],
            howToGrab: [
                "Click on 'Grab Deal' button",
                "Browse beauty and grooming products",
                "Add to cart and checkout",
                "Earn cashback on your purchase"
            ],
            terms: [
                "Valid on selected beauty and grooming products",
                "Cashback will be credited within 7-10 business days",
                "Minimum order value of ₹300 required",
                "Cannot be combined with other offers"
            ]
        }
    };

    const dealData = topDealsData[dealId] || {
        id: dealId,
        title: "Top Deal",
        description: "Amazing deals waiting for you!",
        image: "/assets/img/amazon-top-deals/beauty.png",
        brandImage: amazonData.logo,
        discount: "Special Offer",
        originalPrice: "₹1,000",
        discountedPrice: "₹500",
        cashback: "5% Cashback",
        validUntil: "Limited Time Offer",
        couponCode: "DEAL500",
        brandName: "Amazon",
        brandTagline: "Best Offers",
        keyFeatures: ["Limited Time Offer", "Best Prices"],
        aboutOffer: ["Special discount available", "Cashback on all purchases"],
        whyChoose: ["Best prices", "Fast delivery"],
        aboutBrand: ["Trusted brand", "Quality products"],
        cashbackDetails: ["Cashback will be tracked within 24-48 hours"],
        howToGrab: ["Click Grab Deal", "Shop and checkout"],
        terms: [
            "Valid on selected items only",
            "Cashback will be credited within 7-10 business days",
            "Minimum order value of ₹500 required",
            "Cannot be combined with other offers"
        ]
    };

    const customLabels = {
        [dealId]: dealData.title
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4">
                <AutoBreadcrumb
                    className="my-6"
                    customLabels={customLabels}
                />
            </div>
            <div className="w-full">

                <div className="flex flex-col items-center justify-start">
                    <div className="max-w-[480px] p-6 flex flex-col items-center relative">
                        <div className="w-full flex justify-center">
                            <Image
                                src={dealData.image}
                                alt={dealData.title}
                                width={500}
                                height={200}
                                className="mt-3 object-contain"
                            />
                            <div className="absolute top-[25%] left-[5%] bg-white px-3 py-2 flex items-center gap-2">
                                <Image
                                    src={dealData.brandImage}
                                    alt="brand"
                                    width={55}
                                    height={55}
                                    className="rounded-md"
                                />
                                <span className="text-gray-600 text-xs leading-tight">
                                    {dealData.brandTagline || "Best Deals"}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button className="my-6 w-[450px] bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-[20px] shadow-md hover:shadow-lg transition flex items-center justify-center gap-2">
                        Grab Deal <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>



            <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">
                        {dealData.brandName || dealData.title}: {dealData.discount} + Extra 10% Off + {dealData.cashback}
                    </h1>

                    {dealData.keyFeatures && dealData.keyFeatures.length > 0 && (
                        <ul className="space-y-2 mb-8">
                            {dealData.keyFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-700">
                                    <span className="text-gray-400 mt-1">•</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="space-y-8">
                        {dealData.aboutOffer && dealData.aboutOffer.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Offer</h2>
                                <ul className="space-y-2">
                                    {dealData.aboutOffer.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-gray-400 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {dealData.whyChoose && dealData.whyChoose.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">
                                    Why should you choose {dealData.brandName || dealData.title}
                                </h2>
                                <ul className="space-y-2">
                                    {dealData.whyChoose.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-gray-400 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {dealData.aboutBrand && dealData.aboutBrand.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">
                                    About {dealData.brandName || dealData.title}
                                </h2>
                                <ul className="space-y-2">
                                    {dealData.aboutBrand.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-gray-400 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {dealData.cashbackDetails && dealData.cashbackDetails.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">CashKaro Cashback Details</h2>
                                <ul className="space-y-2">
                                    {dealData.cashbackDetails.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-gray-400 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {dealData.howToGrab && dealData.howToGrab.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">How to Grab This Deal</h2>
                                <ul className="space-y-2">
                                    {dealData.howToGrab.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-gray-400 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopDealDetail;

