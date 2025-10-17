"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import Link from "next/link";

type LinkItem = {
    name: string;
    href: string;
};

type SocialItem = {
    icon: React.ReactNode;
    href: string;
    label: string;
};

const aboutLinks: LinkItem[] = [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact" },
    { name: "Help Center", href: "/help" },
    { name: "FAQs", href: "/faq" },
];

const popularCategories: LinkItem[] = [
    { name: "Electronics", href: "/categories/electronics" },
    { name: "Fashion", href: "/categories/fashion" },
    { name: "Home & Kitchen", href: "/categories/home-kitchen" },
    { name: "Beauty & Personal Care", href: "/categories/beauty" },
    { name: "Health & Wellness", href: "/categories/health" },
    { name: "Travel", href: "/categories/travel" },
];

const topStores: LinkItem[] = [
    { name: "All Stores", href: "/stores" },
    { name: "Amazon", href: "/stores/amazon" },
    { name: "Flipkart", href: "/stores/flipkart" },
    { name: "Myntra", href: "/stores/myntra" },
    { name: "Ajio", href: "/stores/ajio" },
    { name: "FirstCry", href: "/stores/firstcry" },
    { name: "Reliance Digital", href: "/stores/reliance-digital" },
];

const legalLinks: LinkItem[] = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Shipping Policy", href: "/shipping-policy" },
    { name: "Cancellation Policy", href: "/cancellation-policy" },
];

const socialLinks: SocialItem[] = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaWhatsapp />, href: "#", label: "Whatsapp" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
];

const contactInfo = [
    { icon: <MdPhone />, text: "+91-9821397418 / 8527264999", href: "tel:+919821397418" },
    { icon: <MdEmail />, text: "contact@cashkaro.com", href: "mailto:contact@cashkaro.com" },
    { icon: <MdLocationOn />, text: "UM House, P-35, 2nd Floor, Sector 44 Rd, Gurugram, Haryana 122002", href: "https://maps.google.com/?q=UM+House+Sector+44+Gurugram" },
];

const downloadApp = [
    { img: "/assets/img/apple_store_v1.png", link: "#" },
    { img: "/assets/img/google_play_v1.png", link: "#" },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#5c5c5c] text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-6 gap-8 text-left">
                    {/* About CashKaro */}
                    <div className="pt-10 md:pl-10 flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-6 font-medium text-[18px]">About CashKaro</h2>
                        <ul className="space-y-2 text-white/70 text-sm">
                            {aboutLinks.map((link) => (
                                <li key={link.name} className="flex items-center gap-2">
                                    <Link href={link.href} className="hover:text-[#0FE2FF] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Categories */}
                    <div className="pt-10 md:pl-10 flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-6 font-medium text-[18px]">Popular Categories</h2>
                        <ul className="space-y-2 text-white/70 text-sm">
                            {popularCategories.map((link) => (
                                <li key={link.name} className="flex items-center gap-2">
                                    <Link href={link.href} className="hover:text-[#0FE2FF] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Top Stores */}
                    <div className="pt-10 flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-6 font-medium text-[18px]">Top Stores</h2>
                        <ul className="space-y-2 text-white/70 text-sm">
                            {topStores.map((link) => (
                                <li key={link.name} className="flex items-center gap-2">
                                    <Link href={link.href} className="hover:text-[#0FE2FF] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="pt-10 flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-6 font-medium text-[18px]">Legal</h2>
                        <ul className="space-y-2 text-white/70 text-sm">
                            {legalLinks.map((link) => (
                                <li key={link.name} className="flex items-center gap-2">
                                    <Link href={link.href} className="hover:text-[#0FE2FF] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="pt-10 flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-6 font-medium text-[18px]">Contact Us</h2>
                        <ul className="space-y-2 text-white/70 text-sm mb-4">
                            {contactInfo.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-white/70 mt-1">
                                        {item.icon}
                                    </span>
                                    <Link href={item.href} className="hover:text-[#0FE2FF] hover:cursor-pointer transition-colors text-sm">
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & App Download */}
                    <div className="pt-10 flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-2 font-medium text-[18px]">Follow Us</h2>
                        <div className="flex gap-4 text-white mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="hover:text-[#0FE2FF] transition-colors text-xl"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <h2 className="text-[#fff] mb-4 font-medium text-[18px]">Download App</h2>
                        <div className="flex flex-col gap-2">
                            {downloadApp.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <Link href={item.link}>
                                        <Image src={item.img} alt="Download App" width={120} height={40} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <hr className="my-6 border-white/20" />
                <div className="text-center text-white/70 text-xs mb-4">
                    <p className="mb-2">
                        Note: We might earn an affiliate commission when you purchase products through links on our reviews.
                    </p>
                    <p>
                        © {new Date().getFullYear()} CashKaro • All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;