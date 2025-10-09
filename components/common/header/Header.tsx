"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiLogoutCircleLine } from "react-icons/ri";
import { TbSettings2 } from "react-icons/tb";
import { useState } from "react";
import { TbUserSquareRounded } from "react-icons/tb";
import { useAuth } from "@/context/AuthProvider";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import LoginForm from "@/app/auth/LoginForm";
import RegisterForm from "@/app/auth/RegisterForm";
import LogoutButton from "@/app/auth/LogoutButton";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import {
    RiMenu2Fill,
} from "react-icons/ri";
import { Search } from "lucide-react";
import { motion } from "motion/react"
import Nav from "./Nav";


const Header = () => {
    const { user } = useAuth();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="hidden lg:flex items-center justify-between gap-6 py-2">
                    <div className="flex">
                        <div className="flex items-center gap-x-8">
                            <Sheet>
                                <SheetTrigger className="p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer">
                                    <RiMenu2Fill className="text-2xl text-[#1E2C1E]" />
                                </SheetTrigger>
                                <SheetContent side="left" className="flex flex-col px-6 py-6 h-full w-[300px]">
                                    <SheetHeader>
                                        Category
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
                                {/* Login */}
                                <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                                    <DialogTrigger asChild>
                                        <Button
                                            className="text-white text-[14px] font-normal inline-flex gap-x-2 bg-[#1A2819] shadow-md shadow-gray-500/30 px-6 py-2 rounded-full hover:brightness-110 transition-all duration-200"
                                            onClick={() => setIsLoginOpen(true)}
                                        >
                                            <RiLogoutCircleLine />
                                            Login
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="bg-[#F4FFF9] border border-[#1E2C1E] text-white rounded-2xl w-[90%] max-w-[800px]">
                                        <DialogHeader>
                                            <VisuallyHidden>
                                                <DialogTitle>Login</DialogTitle>
                                            </VisuallyHidden>
                                        </DialogHeader>
                                        <LoginForm
                                            onClose={() => setIsLoginOpen(false)}
                                        // 🔹 OTP API comment preserved inside LoginForm
                                        />
                                    </DialogContent>
                                </Dialog>
                                {/* Register */}
                                <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                                    <DialogTrigger asChild>
                                        <Button
                                            className="text-black inline-flex gap-x-2 text-[14px] font-normal shadow-md shadow-gray-500/30 px-6 py-2 rounded-full hover:brightness-110 transition-all duration-200"
                                            onClick={() => setIsRegisterOpen(true)}
                                        >
                                            <TbSettings2 />
                                            Register
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="bg-[#F4FFF9] border border-[#1E2C1E] text-black rounded-2xl w-[90%] max-w-[800px]">
                                        <DialogHeader>
                                            <VisuallyHidden>
                                                <DialogTitle className="text-xl font-bold mb-3">
                                                    Create your account
                                                </DialogTitle>
                                            </VisuallyHidden>
                                        </DialogHeader>
                                        <RegisterForm onClose={() => setIsRegisterOpen(false)} />
                                    </DialogContent>
                                </Dialog>
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
