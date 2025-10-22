"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { TbUserSquareRounded } from "react-icons/tb";
import { useAuth } from "@/context/AuthProvider";
import LogoutButton from "@/app/auth/LogoutButton";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
    RiMenu2Fill,
} from "react-icons/ri";
import { LogInIcon, Search } from "lucide-react";
import { motion } from "motion/react"
import Nav from "@/components/common/header/Nav";


const Header = () => {
    const { user } = useAuth();
    const [searchFocused, setSearchFocused] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Always show loading state on server, only show auth state after hydration
    if (!mounted) {
        return (
            <header className="sticky top-0 z-50 w-full bg-white shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="hidden lg:flex items-center justify-between gap-6 py-2">
                        <div className="flex">
                            <div className="flex items-center gap-x-8">
                                <div className="p-2 rounded-md">
                                    <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                                <div>
                                    <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                                <div className="w-64 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div className="h-9 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className="sticky top-0 z-40 w-full bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="hidden lg:flex items-center justify-between gap-6 py-2">
                    <div className="flex">
                        <div className="flex items-center gap-x-8">
                            <Sheet>
                                <SheetTrigger className="p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer">
                                    <RiMenu2Fill className="text-2xl text-[#1E2C1E]" />
                                </SheetTrigger>
                                <SheetContent side="left" className="flex flex-col px-6 py-6 h-full w-[400px] overflow-visible">
                                    <SheetHeader>
                                        <SheetTitle>Category</SheetTitle>
                                    </SheetHeader>
                                    <Nav />
                                </SheetContent>
                            </Sheet>

                            <div>
                                <Link href="/">
                                    <Image src="assets/img/cashkaro_logo_v1.svg" width={100} height={25} alt="logo" />
                                </Link>
                            </div>
                            <motion.div
                                animate={{
                                    width: searchFocused ? 350 : 250,
                                }}
                                transition={{ duration: 0.3 }}
                                className="relative hidden sm:block"
                            >
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" />
                                <input
                                    type="text"
                                    placeholder="Search anything..."
                                    onFocus={() => setSearchFocused(true)}
                                    onBlur={() => setSearchFocused(false)}
                                    className="w-full pl-12 pr-4 py-2 bg-white border border-neutral-700 rounded-[20px] text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-neutral-600 transition-all duration-300 text-sm sm:text-base"
                                />
                            </motion.div>
                        </div>

                    </div>

                    <div className="flex items-center gap-x-4">
                        {!user ? (
                            <>
                                {/* Login/Register */}
                                <Link href="/auth">
                                    <Button
                                        className="text-white text-[14px] font-normal inline-flex gap-x-2 bg-[#0036da] shadow-md shadow-gray-500/30 px-6 py-2 rounded-full hover:brightness-110 transition-all duration-200 cursor-pointer"
                                    >
                                        <LogInIcon className="w-5 h-5" />
                                        Login / Signup
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            // User dropdown
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="inline-flex gap-x-2 rounded-full shadow px-4 font-normal py-2 capitalize bg-[#1A2819] text-white text-[12px]">
                                        <TbUserSquareRounded className="w-5 h-5" />
                                        {user.name || "User"}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-38">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link href="/profile" className="w-full block">
                                            Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href="/orders" className="w-full block">
                                            My Orders
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogoutButton />
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
