"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter, FaApple, FaAndroid } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaWindows } from "react-icons/fa6";
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

const quickLinks: LinkItem[] = [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping & Returns", href: "/" },
    { name: "Product", href: "/product" },
];

const legalLinks: LinkItem[] = [
    { name: "Shipping Policy", href: "/shipping-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Cancellation Policy", href: "/cancellation-policy" },
    { name: "Privacy Policy", href: "/privacy-policy" },
];

const socialLinks: SocialItem[] = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaWhatsapp />, href: "#", label: "Whatsapp" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
];

const contactInfo = [
    { icon: <MdPhone />, text: "+91 7003810162", href: "tel:+917003810162" },
    { icon: <MdEmail />, text: "info@beyuvana.com", href: "mailto:info@beyuvana.com" },
    { icon: <MdLocationOn />, text: "Kolkata, India", href: "https://maps.app.goo.gl/g1Kd3rZHGFZm9gH89" },
];

const downloadApp = [
    { img: "/assets/img/apple_store_v1.png", link: "#" },
    { img: "/assets/img/google_play_v1.png", link: "#" },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#5c5c5c] text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-5 gap-8 text-left">
                    {/* Quick Links */}
                    <div className="pt-10 md:pl-10 flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-6 font-medium text-[18px]">About CashKaro</h2>
                        <ul className="space-y-2 text-white/70 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.name} className="flex items-center gap-2">
                                    <Link href={link.href} className="hover:text-[#0FE2FF] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="pt-10 md:pl-10 flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-6 font-medium text-[18px]">Useful Reads</h2>
                        <ul className="space-y-2 text-white/70 text-sm">
                            {quickLinks.map((link) => (
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
                        <h2 className="text-[#fff] mb-6 font-medium text-[18px]">Special Pages</h2>
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

                    {/* Contact & Social */}
                    <div className="pt-10 flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-6 font-medium text-[18px]">Connect With Us</h2>
                        <ul className="space-y-2 text-white/70 text-sm mb-4">
                            {contactInfo.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-white/70">
                                        {item.icon}
                                    </span>
                                    <Link href={item.href} className="hover:text-[#0FE2FF] hover:cursor-pointer transition-colors">
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Contact & Social */}
                    <div className="pt-10 flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-2 font-medium text-[18px]">Social Links</h2>
                        <div className="flex gap-4 text-white mb-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="hover:text-[#fff] transition-colors text-xl"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <h2 className="text-[#fff] mb-6 font-medium text-[18px]">Download App</h2>
                        <ul className="gap-4 text-white/70 text-sm mb-4 flex flex-wrap items-center justify-center">
                            {downloadApp.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <Link href={item.link}>
                                        <Image src={item.img} alt={item.link} width={100} height={100} />
                                    </Link>
                                </div>
                            ))}
                        </ul>
                    </div>

                </div>

                <hr className="my-6 border-white/20" />
                <p className="text-center text-white text-sm">
                    © {new Date().getFullYear()} @cash4back • All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;