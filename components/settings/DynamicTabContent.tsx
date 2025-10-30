"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Pencil, Check } from "lucide-react";
import { OTPDialog } from "@/components/ui/otp-dialog";

// Dynamically import page components
const EarningsPage = dynamic(() => import("@/app/earnings/page"), { ssr: false });
const PaymentPage = dynamic(() => import("@/app/payment/page"), { ssr: false });
const PaymentHistoryPage = dynamic(() => import("@/app/payment-history/page"), { ssr: false });
const MissingCashbackPage = dynamic(() => import("@/app/missing-cashback/page"), { ssr: false });
const ReferEarnPage = dynamic(() => import("@/app/refer-earn/page"), { ssr: false });
const MyReferralsPage = dynamic(() => import("@/app/my-referrals/page"), { ssr: false });
const HelpPage = dynamic(() => import("@/app/help/page"), { ssr: false });
const ReviewPage = dynamic(() => import("@/app/review/page"), { ssr: false });
const PrivacyPage = dynamic(() => import("@/app/privacy/page"), { ssr: false });

interface DynamicTabContentProps {
    tabValue: string;
    formData: {
        fullName: string;
        email: string;
        mobile: string;
    };
    settings: {
        privacy: {
            dataSharing: boolean;
            analytics: boolean;
        };
        security: {
            twoFactorAuth: boolean;
            loginAlerts: boolean;
            sessionTimeout: string;
        };
    };
    onInputChange: (field: string, value: string) => void;
    onSettingsChange: (section: string, field: string, value: boolean | string) => void;
}

const DynamicTabContent = ({
    tabValue,
    formData,
    onInputChange
}: DynamicTabContentProps) => {
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingMobile, setIsEditingMobile] = useState(false);

    const [otpOpen, setOtpOpen] = useState(false);
    const [otpFor, setOtpFor] = useState<null | "email" | "mobile">(null);
    const [receiveReferralEmail, setReceiveReferralEmail] = useState(true);
    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const mobileRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditingName) {
            fullNameRef.current?.focus();
        }
    }, [isEditingName]);
    useEffect(() => {
        if (isEditingEmail) {
            emailRef.current?.focus();
        }
    }, [isEditingEmail]);
    useEffect(() => {
        if (isEditingMobile) {
            mobileRef.current?.focus();
        }
    }, [isEditingMobile]);

    const openOtpFor = (field: "email" | "mobile") => {
        setOtpFor(field);
        setOtpOpen(true);
    };

    const handleVerifyOtp = async (otp: string) => {
        void otp; // mark param as used until real verification is wired
        // TODO: Integrate real verification. For now, accept any code.
        if (otpFor === "email") {
            setIsEditingEmail(true);
        } else if (otpFor === "mobile") {
            setIsEditingMobile(true);
        }
        setOtpOpen(false);
        setOtpFor(null);
        return true;
    };
    const renderTabContent = () => {
        switch (tabValue) {
            case "account-settings":
                return (
                    <Card className="rounded-[20px] border-gray-200">
                        <CardContent className="p-6 space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 w-[40%]">
                                        <Input
                                            id="fullName"
                                            value={formData.fullName}
                                            onChange={(e) => onInputChange('fullName', e.target.value)}
                                            ref={fullNameRef}
                                            readOnly={!isEditingName}
                                            onClick={() => { if (!isEditingName) setIsEditingName(true) }}
                                            className={
                                                `flex-1 h-12 rounded-[10px] placeholder:text-gray-500 border-gray-200 ${!isEditingName ? 'bg-gray-50' : ''}`
                                            }
                                        />
                                        <Button
                                            variant={isEditingName ? "default" : "ghost"}
                                            size="sm"
                                            onClick={() => setIsEditingName((v) => !v)}
                                            aria-label={isEditingName ? 'Save name' : 'Edit name'}
                                            title={isEditingName ? 'Save' : 'Edit'}
                                            className={isEditingName ? "bg-green-600 hover:bg-green-700" : "text-blue-600 hover:text-blue-700"}
                                        >
                                            {isEditingName ? (
                                                <Check className="w-4 h-4" />
                                            ) : (
                                                <Pencil className="w-4 h-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 w-[40%]">
                                        <Input
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => onInputChange('email', e.target.value)}
                                            ref={emailRef}
                                            readOnly={!isEditingEmail}
                                            onClick={() => { if (!isEditingEmail) openOtpFor("email") }}
                                            className={
                                                `flex-1 h-12 rounded-[10px] placeholder:text-gray-500 border-gray-200 ${!isEditingEmail ? 'bg-gray-50' : ''}`
                                            }
                                        />
                                        <Button
                                            variant={isEditingEmail ? "default" : "ghost"}
                                            size="sm"
                                            onClick={() => {
                                                if (!isEditingEmail) {
                                                    openOtpFor("email");
                                                } else {
                                                    setIsEditingEmail(false);
                                                }
                                            }}
                                            aria-label={isEditingEmail ? 'Save email' : 'Edit email'}
                                            title={isEditingEmail ? 'Save' : 'Edit'}
                                            className={isEditingEmail ? "bg-green-600 hover:bg-green-700" : "text-blue-600 hover:text-blue-700"}
                                        >
                                            {isEditingEmail ? (
                                                <Check className="w-4 h-4" />
                                            ) : (
                                                <Pencil className="w-4 h-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 w-[40%]">
                                        <Input
                                            id="mobile"
                                            value={formData.mobile}
                                            onChange={(e) => onInputChange('mobile', e.target.value)}
                                            ref={mobileRef}
                                            readOnly={!isEditingMobile}
                                            onClick={() => { if (!isEditingMobile) openOtpFor("mobile") }}
                                            className={
                                                `flex-1 h-12 rounded-[10px] placeholder:text-gray-500 border-gray-200 ${!isEditingMobile ? 'bg-gray-50' : ''}`
                                            }
                                        />
                                        <Button
                                            variant={isEditingMobile ? "default" : "ghost"}
                                            size="sm"
                                            onClick={() => {
                                                if (!isEditingMobile) {
                                                    openOtpFor("mobile");
                                                } else {
                                                    setIsEditingMobile(false);
                                                }
                                            }}
                                            aria-label={isEditingMobile ? 'Save mobile' : 'Edit mobile'}
                                            title={isEditingMobile ? 'Save' : 'Edit'}
                                            className={isEditingMobile ? "bg-green-600 hover:bg-green-700" : "text-blue-600 hover:text-blue-700"}
                                        >
                                            {isEditingMobile ? (
                                                <Check className="w-4 h-4" />
                                            ) : (
                                                <Pencil className="w-4 h-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="referral-email"
                                        checked={receiveReferralEmail}
                                        onCheckedChange={(v) => setReceiveReferralEmail(!!v)}
                                        aria-label="Receive email when I get referral earnings"
                                        className="border-gray-300 text-blue-600 focus-visible:ring-blue-500"
                                    />
                                    <Label htmlFor="referral-email" className="cursor-pointer select-none">
                                        Receive email when I get referral earnings
                                    </Label>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-[10px]">
                                    Save Changes
                                </Button>
                                <Button variant="destructive">
                                    Delete Account
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                );

            case "my-earnings":
                return (
                    <Suspense fallback={<div>Loading...</div>}>
                        <EarningsPage />
                    </Suspense>
                );

            case "payments":
                return (
                    <Suspense fallback={<div>Loading...</div>}>
                        <PaymentPage />
                    </Suspense>
                );

            case "payment-history":
                return (
                    <Suspense fallback={<div>Loading...</div>}>
                        <PaymentHistoryPage />
                    </Suspense>
                );

            case "missing-cashback":
                return (
                    <Suspense fallback={<div>Loading...</div>}>
                        <MissingCashbackPage />
                    </Suspense>
                );

            case "refer-earn":
                return (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ReferEarnPage />
                    </Suspense>
                );

            case "my-referrals":
                return (
                    <Suspense fallback={<div>Loading...</div>}>
                        <MyReferralsPage />
                    </Suspense>
                );

            case "help":
                return (
                    <Suspense fallback={<div>Loading...</div>}>
                        <HelpPage />
                    </Suspense>
                );

            case "review-us":
                return (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ReviewPage />
                    </Suspense>
                );

            case "privacy-security":
                return (
                    <Suspense fallback={<div>Loading...</div>}>
                        <PrivacyPage />
                    </Suspense>
                );

            default:
                return <div>Tab content not found</div>;
        }
    };

    return (
        <>
            {renderTabContent()}
            <OTPDialog
                open={otpOpen}
                onOpenChange={(o) => { if (!o) { setOtpOpen(false); setOtpFor(null); } else { setOtpOpen(true); } }}
                onVerify={handleVerifyOtp}
                otpLength={6}
                title={otpFor === "email" ? "Verify Email" : otpFor === "mobile" ? "Verify Mobile Number" : "Verify"}
                description={otpFor === "email" ? "Enter the OTP sent to your email." : otpFor === "mobile" ? "Enter the OTP sent to your phone number." : "Enter the verification code."}
            />
        </>
    );
};

export default DynamicTabContent;
