"use client";

import { useState } from "react";
import AutoBreadcrumb from "@/components/common/AutoBreadcrumb";
import StarRating from "@/components/store/StarRating";
import { ArrowRightIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ReviewItem {
    id: string;
    author: string;
    comment: string;
    rating: number;
    date: string;
}

const reviews: ReviewItem[] = [
    {
        id: "1",
        author: "Vijayakumar Kumar",
        comment: "this is not fake app... its working awesome experience",
        rating: 5,
        date: "19 Jul 2025"
    },
    {
        id: "2",
        author: "Prarthana Mondal",
        comment: "Great app to get rewards and cashback for every purchase made through cashkaro.",
        rating: 5,
        date: "18 June 2025"
    }
];

interface HowItWorksItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

const howItWorks: HowItWorksItem[] = [
    {
        id: 1,
        image: "/assets/img/howck_1.png",
        title: "Visit CashKaro app first",
        description: "before you shop online"
    },
    {
        id: 2,
        image: "/assets/img/howck_2.png",
        title: "Select the brand you want to shop on",
        description: "and you will be re-directed to their site/app"
    },
    {
        id: 3,
        image: "/assets/img/howck_3.png",
        title: "Shop & pay as usual on the site",
        description: "you are shopping normally, no difference"
    },
    {
        id: 4,
        image: "/assets/img/howck_4.png",
        title: "Get Cashback on your order",
        description: "in your CashKaro account"
    },
    {
        id: 5,
        image: "/assets/img/howck_5.png",
        title: "Transfer your Cashback",
        description: "to your Bank, UPI or take as Amazon pay balance / Flipkart gift cards"
    }
];

export default function ReviewPage() {
    const [isRatingDialogOpen, setIsRatingDialogOpen] = useState(false);

    return (
        <div className="container mx-auto px-4 py-8">
            <AutoBreadcrumb className="mb-8" />

            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-[70%] py-4 border border-[#E0E0E0] rounded-[20px]">
                    <div className="py-4 px-8">
                        <h2 className="text-[22px] font-bold text-gray-900 capitalize mb-6">Cash4back Reviews</h2>
                        <p className="text-[16px] text-gray-800 mb-4">Lakhs of Indians visit CashKaro every day and make the most of our best offers to get the best deals plus some extra Cashback, right into their bank account. CashKaro reviews from these users show how our deals and offers have held up over the years.</p>
                        <p className="text-[16px] text-gray-800 mb-4">These reviews are filled with appreciation from our users who are ecstatic about getting the best discount coupons and extra Cashback, only through CashKaro.</p>
                        <p className="text-[16px] text-gray-800">CashKaro is the brainchild of Swati and Rohan Bhargava, who launched the platform back in 2011 in the UK, bringing it to Indian customers in 2013. Since its inception, CashKaro has distributed hundreds of crores in Cashback to its customers and has contributed billions of dollars in GMV for online retailers to become the undisputed king of Cashback in India. Billionaire tycoon Ratan Tata has also invested in CashKaro, because he also believes that Indians love to #GetMoreHamesha!</p>
                    </div>

                    <div className="border shadow-md border-gray-200 flex flex-wrap justify-between px-8 py-4 items-center">
                        <div>
                            <p>Tell Us About Your Experience!</p>
                        </div>
                        <div className="flex items-center gap-2">

                            <button
                                onClick={() => setIsRatingDialogOpen(true)}
                                className="px-12 py-3 bg-blue-600 text-white rounded-[10px] hover:bg-blue-700 transition-colors text-[16px] font-bold"
                            >
                                Write a Review
                            </button>
                        </div>
                    </div>


                    <div className="px-8 py-4 mt-8">
                        <Image src="/assets/img/testimo.png" alt="Review" width={900} height={500} className="w-full h-[450px] object-contain rounded-[10px]" />
                    </div>

                    <div className="py-6 px-8">
                        {reviews.map((review, index) => (
                            <div
                                key={review.id}
                                className={`border border-gray-200 rounded-[10px] p-4 ${index !== reviews.length - 1 ? 'mb-4' : ''}`}
                            >
                                <h2 className="text-[20px] font-bold text-gray-900 capitalize mb-2">{review.author}</h2>
                                <p className="text-[16px] text-gray-500 mb-4">{review.comment}</p>
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <Star
                                                key={starIndex}
                                                className={`w-4 h-4 ${starIndex < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-[14px] font-normal text-gray-900">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <StarRating
                        storeName="Cash4back"
                        open={isRatingDialogOpen}
                        onOpenChange={setIsRatingDialogOpen}
                        onRatingSubmit={(rating, review) => {
                            console.log("Rating submitted:", { rating, review });
                            // Handle rating submission here
                        }}
                    />

                </div>
                <div className="w-full md:w-[28%]">
                    <div className="relative">
                        <Link href="/">
                            <Image src="/assets/img/pickday_bg.png" alt="Review Banner" width={300} height={300} className="w-full h-[300px] object-cover rounded-[10px]" />
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-6 px-8 w-full h-full lg:h-[270px]">
                                <h2 className="text-[20px] font-bold text-center text-white capitalize mb-4">Pick Of the Day</h2>
                                <p className="text-[16px] text-black bg-white p-4 rounded-[10px] leading-relaxed mb-4">Pickday.in is a platform that allows you to pick up your daily needs from the comfort of your home. It is a platform that allows you to pick up your daily needs from the comfort of your home.</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-8 border border-gray-200 rounded-[10px] p-4">
                        <h2 className="text-[20px] font-bold text-gray-900 text-center capitalize mb-4">How CashKaro Works?</h2>
                        <div className="flex flex-col gap-y-4">
                            {howItWorks.map((item) => (
                                <div key={item.id} className="flex flex-wrap gap-x-4">
                                    <Image src={item.image} alt="Review Banner" width={150} height={150} className="w-[100px] h-[100px] object-cover rounded-full flex-shrink-0" />
                                    <div className="flex flex-col justify-center items-start flex-1 min-w-0">
                                        <p className="text-[16px] font-bold text-gray-900 capitalize mb-2 break-words">{item.title}</p>
                                        <p className="text-[14px] text-gray-500 break-words">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex item-center justify-center">
                            <Link href="/">
                                <Button variant="default" className="w-full text-[#0052CC] hover:text-[#0052CC]/90 text-base cursor-pointer hover:underline">
                                    Learn More <ArrowRightIcon className="w-4 h-4 text-[#0052CC]" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
