"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import HeaderText from "@/components/common/HeaderText";
import AutoBreadcrumb from "@/components/common/AutoBreadcrumb";
import DynamicTabContent from "@/components/settings/DynamicTabContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Settings,
    Wallet,
    CreditCard,
    Clock,
    Ticket,
    UserPlus,
    Users,
    HelpCircle,
    Star,
    Lock
} from "lucide-react";

const SettingsPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState("account-settings");

    const [settings, setSettings] = useState({
        privacy: {
            dataSharing: false,
            analytics: true
        },
        security: {
            twoFactorAuth: false,
            loginAlerts: true,
            sessionTimeout: "30"
        }
    });

    const [formData, setFormData] = useState({
        fullName: "Abhilash Bera",
        email: "abxxxxxxxxxxlf@gmail.com",
        mobile: "97XXXXXX56"
    });

    // Handle URL-based tab navigation
    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab) {
            setActiveTab(tab);
        }
    }, [searchParams]);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
        // Update URL without page reload
        const url = new URL(window.location.href);
        url.searchParams.set('tab', value);
        router.replace(url.pathname + url.search, { scroll: false });
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSettingsChange = (section: string, field: string, value: boolean | string) => {
        setSettings(prev => ({
            ...prev,
            [section]: {
                ...prev[section as keyof typeof prev],
                [field]: value
            }
        }));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb Navigation */}
            <AutoBreadcrumb className="mb-6" />

            <HeaderText heading="Account Settings" textalign="text-left" />

            <div className="mt-8">
                <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                    <div className="flex gap-6">
                        <TabsList className="flex flex-col items-start justify-start w-[30%] h-fit min-h-[600px] rounded-[20px] shadow-lg p-4 space-y-3">
                            <TabsTrigger value="account-settings" className="flex items-center gap-2 justify-start">
                                <Settings className="w-4 h-4" />
                                Account Settings
                            </TabsTrigger>
                            <TabsTrigger value="my-earnings" className="flex items-center gap-2 justify-start">
                                <Wallet className="w-4 h-4" />
                                My Earnings
                            </TabsTrigger>
                            <TabsTrigger value="payments" className="flex items-center gap-2 justify-start">
                                <CreditCard className="w-4 h-4" />
                                Payments
                            </TabsTrigger>
                            <TabsTrigger value="payment-history" className="flex items-center gap-2 justify-start">
                                <Clock className="w-4 h-4" />
                                Payment History
                            </TabsTrigger>
                            <TabsTrigger value="missing-cashback" className="flex items-center gap-2 justify-start">
                                <Ticket className="w-4 h-4" />
                                Missing Cashback
                            </TabsTrigger>
                            <TabsTrigger value="refer-earn" className="flex items-center gap-2 justify-start" onClick={(e) => { e.preventDefault(); router.push('/refer-earn'); }}>
                                <UserPlus className="w-4 h-4" />
                                Refer & Earn
                            </TabsTrigger>
                            <TabsTrigger value="my-referrals" className="flex items-center gap-2 justify-start">
                                <Users className="w-4 h-4" />
                                My Referrals
                            </TabsTrigger>
                            <TabsTrigger value="help" className="flex items-center gap-2 justify-start" onClick={(e) => { e.preventDefault(); router.push('/help'); }}>
                                <HelpCircle className="w-4 h-4" />
                                Help
                            </TabsTrigger>
                            <TabsTrigger value="review-us" className="flex items-center gap-2 justify-start" onClick={(e) => { e.preventDefault(); router.push('/review'); }}>
                                <Star className="w-4 h-4" />
                                Review Us
                            </TabsTrigger>
                            <TabsTrigger value="privacy-security" className="flex items-center gap-2 justify-start" onClick={(e) => { e.preventDefault(); router.push('/privacy'); }}>
                                <Lock className="w-4 h-4" />
                                Privacy & Security
                            </TabsTrigger>
                        </TabsList>

                        {/* Dynamic Tab Content */}
                        <TabsContent value={activeTab} className="mt-6 md:mt-0">
                            <DynamicTabContent
                                tabValue={activeTab}
                                formData={formData}
                                settings={settings}
                                onInputChange={handleInputChange}
                                onSettingsChange={handleSettingsChange}
                            />
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default SettingsPage;
