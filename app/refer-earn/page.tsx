"use client";

import React, { useEffect, useState } from 'react';
import AutoBreadcrumb from '@/components/common/AutoBreadcrumb';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { Check, Copy } from 'lucide-react';
import Superstars from '@/components/home/Superstars';

const ReferEarnPage = () => {
    const [referralLink, setReferralLink] = useState<string>('');
    const [copied, setCopied] = useState<boolean>(false);

    useEffect(() => {
        const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
        setReferralLink(`${baseUrl}/signup?ref=your-ref-code`);
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(referralLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            
        }
    };

    const customLabels = {
        refer: 'Refer & Earn'
    };

    const howItWorks = [
        {
            id: 1,
            img: '/assets/img/howitwork-one.png',
            description: 'Share referral link with friends!',
        },

        {
            id: 2,
            img: '/assets/img/howitwork-two.png',
            description: 'Let your friends shop & get Cashback!',
        },

        {
            id: 3,
            img: '/assets/img/howitwork-three.png',
            description: 'You get 10% of your friend\'s Cashback',
        },
    ];

    return (
        <div className="w-full">

            {/* Content Section */}
            <div className="container mx-auto px-4 py-8">
                <AutoBreadcrumb customLabels={customLabels} />
                <div className='flex flex-wrap justify-between mt-16'>
                    <div className='w-full md:w-[70%]'>
                        <div className="relative w-full mb-4">
                            <Splide options={{
                                perPage: 1,
                                gap: "1rem",
                                autoplay: true,
                                interval: 5000,
                                pauseOnHover: true,
                                arrows: false,
                                pagination: true,
                                classes: {
                                    pagination: 'rounded-full h-2 w-full flex justify-center items-center absolute bottom-5 left-0 right-0',
                                    paginationButton: 'h-2 w-5 bg-gray-200 hover:bg-gray-300',
                                }
                            }}>
                                <SplideSlide>
                                    <Image src="/assets/img/refer_banner_three.png" alt="Refer & Earn" width={800} height={600} className='w-full h-auto object-cover rounded-[20px]' />
                                </SplideSlide>
                                <div className="splide__progress" style={{ height: '4px', backgroundColor: '#e5e7eb', borderRadius: '2px' }}></div>
                            </Splide>
                        </div>
                        <Card className="border border-gray-200 rounded-[20px] p-4 mb-4">
                            <CardContent>
                                <h2 className="text-[20px] font-bold text-gray-900">How This Works?</h2>
                                <p className="text-sm text-gray-500 mt-1 mb-4">Share your unique link. When your friends join and shop, both of you earn cashback.</p>

                                <div className="flex flex-col gap-4">
                                    {howItWorks.map((item) => (
                                        <div key={item.id} className="w-full">
                                            <div className='flex items-center gap-4'>
                                                <Image src={item.img} alt={item.description} width={100} height={100} className='w-[100px] h-[100px] object-cover rounded-full' />
                                                <p className="text-[18px] font-semibold leading-tight text-gray-800">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>




                            </CardContent>
                            <CardFooter className=''>
                                <p className='text-[16px] text-gray-800'>For example, if your friend earns ₹5000 as Cashback, you will get ₹500. This is how you enjoy a 10% bonus everytime your friend shops!</p>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className='w-full md:w-[28%]'>
                        <Card className="border border-gray-200 rounded-[20px] p-4 mb-4">
                            <CardContent>
                                <h2 className="text-sm text-gray-500 mb-1">Your Unique Referral Link</h2>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Referral link</label>
                                <div className="flex items-center gap-2 rounded-[16px] border border-gray-200 bg-gray-50 p-2 focus-within:ring-2 focus-within:ring-[#0036da]">
                                    <input
                                        readOnly
                                        value={referralLink}
                                        className="flex-1 bg-transparent px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none truncate"
                                    />
                                    <button
                                        onClick={handleCopy}
                                        className={`inline-flex items-center gap-2 rounded-[12px] px-4 py-2 text-sm font-medium transition-colors ${copied ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-[#0036da] text-white hover:bg-[#0036da]/90'}`}
                                    >
                                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        {copied ? 'Copied' : 'Copy'}
                                    </button>
                                </div>
                                <div className="mt-2 text-xs text-gray-500">
                                    Get up to 10% bonus when your friend makes their first purchase.
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border border-gray-200 rounded-[20px] p-4">
                            <CardContent>
                                <h2 className="text-base font-bold text-gray-900">Invite by Email</h2>
                                <p className="text-sm text-gray-500 mt-1 mb-4">Send an invite directly to your friend’s inbox.</p>

                                <div className="space-y-6">
                                    <Input
                                        id="invite-email"
                                        type="email"
                                        placeholder="name@example.com"
                                        className="w-full rounded-[16px] py-6 pl-4 pr-4 border-gray-300 focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-0 placeholder:text-gray-500"
                                    />

                                    <Button
                                        variant="default"
                                        type='submit'
                                        className="w-full text-white bg-[#ff6d1d] hover:bg-[#ff6d1d]/90 rounded-[16px] py-6 text-base cursor-pointer"
                                    >
                                        Send Invite
                                    </Button>

                                    <div className="flex items-center my-1 mb-3">
                                        <span className="h-px bg-gray-200 flex-1" />
                                        <span className="px-3 text-[11px] tracking-wider text-gray-400 uppercase">or</span>
                                        <span className="h-px bg-gray-200 flex-1" />
                                    </div>

                                    <Button
                                        variant="outline"
                                        type='button'
                                        className="w-full bg-[#20B038] text-white hover:text-gray-200 border border-gray-300 hover:bg-[#20B038]/90 rounded-[16px] py-6 text-base cursor-pointer"
                                    >
                                        <FaWhatsapp className="w-4 h-4" />
                                        Share via WhatsApp
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <div className='bg-blue-50 py-1 w-full'></div>

            <div className='container mx-auto px-4 my-8'>
                <h2 className='text-[20px] font-bold text-gray-900 mb-4'>Watch to Learn More!</h2>
                <div className='relative w-full max-w-3xl mr-auto rounded-[20px] overflow-hidden shadow-md border border-gray-200'>
                    <div className='relative pt-[56.25%]'>
                        <iframe
                            className='absolute inset-0 w-full h-full'
                            src="https://www.youtube.com/embed/yCApqEFWD0c?start=1"
                            title="Refer & Earn Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div className='bg-blue-50 py-1 w-full'></div>

            <div className='container mx-auto px-4 my-8'>
                <h2 className='text-[20px] font-bold text-gray-900 mb-4'>Don’t Believe Us? Hear it from the Top Earners!</h2>

                <div className='mt-8'>
                    <Superstars />
                </div>

            </div>
        </div>
    );
}

export default ReferEarnPage;