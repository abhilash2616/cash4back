"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TbUserSquareRounded } from "react-icons/tb";
import { useAuth } from "@/context/AuthProvider";
import LogoutButton from "@/app/auth/LogoutButton";
import {
    User,
    CreditCard,
    Settings,
    HelpCircle,
    DollarSign,
    History,
    AlertCircle,
    MessageCircle,
    Users,
    ThumbsUp,
    ShieldCheck
} from "lucide-react";

const UserDropdown = () => {
    const { user } = useAuth();

    if (!user) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="inline-flex gap-x-2 rounded-full shadow px-4 font-normal py-2 capitalize bg-[#1A2819] text-white text-[12px]">
                    <TbUserSquareRounded className="w-5 h-5" />
                    {user.name || "User"}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuLabel className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    My Account
                </DropdownMenuLabel>

                <DropdownMenuItem className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    <Link href="/settings?tab=account-settings" className="w-full">
                        Account Settings
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Shopping & Orders */}
                <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1">
                    Cashback & Rewards
                </DropdownMenuLabel>

                {/* Cashback & Rewards */}
                <DropdownMenuItem className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <Link href="/settings?tab=my-earnings" className="w-full">
                        My Earnings
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <Link href="/settings?tab=payments" className="w-full">
                        Payment
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                    <History className="w-4 h-4" />
                    <Link href="/settings?tab=payment-history" className="w-full">
                        Payment History
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <Link href="/settings?tab=missing-cashback" className="w-full">
                        Missing Cashback
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <Link href="/queries" className="w-full">
                        Your Queries
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Cashback & Rewards */}
                <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1">
                    Referrals
                </DropdownMenuLabel>
                <DropdownMenuItem className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <Link href="/refer-earn" className="w-full">
                        Refer & Earn
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <Link href="/settings?tab=my-referrals" className="w-full">
                        My Referrals
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Cards & Payments */}
                <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1">
                    Support & Feedback
                </DropdownMenuLabel>
                <DropdownMenuItem className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    <Link href="/help" className="w-full">
                        Help
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    <Link href="/review" className="w-full">
                        Review Us
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <Link href="/privacy" className="w-full">
                        Privacy & Security
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Logout */}
                <DropdownMenuItem>
                    <LogoutButton />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;
