"use client";

import AutoBreadcrumb from "@/components/common/AutoBreadcrumb";
import {
    AlertCircle,
    Search,
    Users,
    MessageCircle,
    MessageSquare,
    LucideIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HelpPage = () => {

    const quickHelpLinks: Array<{
        href: string;
        label: string;
        icon: LucideIcon;
        iconBg: string;
    }> = [
            {
                href: "/settings?tab=missing-cashback",
                label: "My Cashback is\nMissing",
                icon: AlertCircle,
                iconBg: "bg-red-100 group-hover:bg-red-200"
            },
            {
                href: "/help/faq",
                label: "Help with\nTracked Cashback",
                icon: Search,
                iconBg: "bg-blue-100 group-hover:bg-blue-200"
            },
            {
                href: "/help/faq",
                label: "How to\nRefer & Earn",
                icon: Users,
                iconBg: "bg-green-100 group-hover:bg-green-200"
            },
            {
                href: "/help/faq",
                label: "Want to\nConnect with Us",
                icon: MessageCircle,
                iconBg: "bg-purple-100 group-hover:bg-purple-200"
            },
            {
                href: "/help/faq",
                label: "Give Us\nFeedback",
                icon: MessageSquare,
                iconBg: "bg-orange-100 group-hover:bg-orange-200"
            }
        ];


    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <AutoBreadcrumb className="" />

            </div>

            <div className="w-full relative h-[300px]">
                <Image
                    src="/assets/img/help_banner_desktop_v1.png"
                    alt="Help & Support"
                    width={1920}
                    height={500}
                    className="w-full h-full object-cover absolute top-0 left-0"
                />
                <div className="absolute inset-0 flex items-center justify-start ">
                    <h1 className="text-[48px] leading-tight font-bold text-white pl-4 pl:ps-[100px] lg:pl-[172px] xl:pl-[272px] 2xl:pl-[372px]">How Can<br />We Help You</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-between items-center pt-6 pb-14 md:pt-10 md:pb-[50px] lg:pb-[80px] 2xl:pb-[104px] 3xl:pb-[112px] px-4 md:px-[50px] xl:px-[170px] 2xl:px-[20%]">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap md:justify-center md:gap-6 gap-2 w-fit m-auto">
                        {quickHelpLinks.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="group flex flex-col items-start justify-end cursor-pointer border border-[#E0E0E0] hover:border-[#0052CC] hover:shadow-lg transition-all ease-in duration-300 rounded-[20px] py-6 lg:py-8 px-4 md:px-6 gap-4 md:gap-4 min-w-[160px] min-h-[124px] md:h-[160px] lg:w-[272px] lg:h-[224px] bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
                                >
                                    <div className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-[20px] ${item.iconBg} transition-colors duration-300`}>
                                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#00000]" />
                                    </div>
                                    <p className="text-[22px] font-bold text-gray-800 capitalize text-left group-hover:text-[#0052CC] transition-colors duration-300 leading-tight whitespace-pre-line">{item.label}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HelpPage;
