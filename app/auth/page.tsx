"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { useAuth } from "@/context/AuthProvider";
import { toast } from "react-toastify";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";

export default function AuthPage() {
    const [loading, setLoading] = useState(false);
    const { setUser } = useAuth();
    const [form, setForm] = useState({ emailOrPhone: "" });
    const [error, setError] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const router = useRouter();

    // Send OTP functionality
    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!form.emailOrPhone) {
            setError("Please enter your mobile number or email.");
            setLoading(false);
            return;
        }

        try {
            // TODO: Implement OTP sending API
            // const data = await apiFetch<unknown>("/send-otp/v1", {
            //   method: "POST",
            //   body: JSON.stringify({ emailOrPhone: form.emailOrPhone }),
            // });

            // For now, simulate OTP sending
            toast.success("OTP sent successfully!");
            setIsOtpSent(true);
        } catch (err: unknown) {
            console.error(err);
            setError("Failed to send OTP. Please try again.");
            toast.error("Failed to send OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Verify OTP functionality
    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!otp || otp.length !== 6) {
            setError("Please enter a valid 6-digit OTP.");
            setLoading(false);
            return;
        }

        try {
            // TODO: Implement OTP verification API
            // const data = await apiFetch<unknown>("/verify-otp/v1", {
            //   method: "POST",
            //   body: JSON.stringify({ emailOrPhone: form.emailOrPhone, otp: otp }),
            // });

            // For now, simulate successful login
            const mockUser = {
                id: "1",
                name: "User",
                email: form.emailOrPhone.includes("@") ? form.emailOrPhone : "",
                phone: form.emailOrPhone.includes("@") ? "" : form.emailOrPhone,
            };

            setUser(mockUser);
            localStorage.setItem("user", JSON.stringify(mockUser));

            toast.success("Login successful!");
            router.push("/");
        } catch (err: unknown) {
            console.error(err);
            setError("Invalid OTP. Please try again.");
            toast.error("Invalid OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleAuth = () => {
        // TODO: Implement Google authentication functionality
        toast.info("Google authentication coming soon!");
    };

    const handleResendOtp = () => {
        const event = new Event('submit') as unknown as React.FormEvent<HTMLFormElement>;
        handleSendOtp(event);
    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="flex justify-start">
                    <Link href="/">
                        <Button variant="ghost" className="cursor-pointer">
                            <ArrowLeftIcon className="w-6 h-6" />
                        </Button>
                    </Link>
                </div>
                {/* Header */}
                <div className="text-center mb-4">
                    <h1 className="text-[25px] font-semibold text-gray-900 mb-2 leading-tight">Login or signup</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        We will send an OTP to verify
                    </p>
                </div>

                {/* Auth Form */}
                <Card className="w-full border-none shadow-none mb-4">
                    {/* <CardHeader>
                        <CardTitle className="text-center">Enter mobile number or email</CardTitle>
                    </CardHeader> */}
                    <CardContent>
                        {!isOtpSent ? (
                            <form onSubmit={handleSendOtp}>
                                <div className="flex flex-col gap-4">
                                    <div className="grid gap-2">
                                        <Input
                                            type="text"
                                            placeholder="Enter mobile number or email"
                                            value={form.emailOrPhone}
                                            onChange={(e) => setForm({ ...form, emailOrPhone: e.target.value })}
                                            required
                                            className="text-left placeholder:text-left placeholder:text-gray-400 placeholder:text-sm placeholder:font-normal h-12 text-base rounded-[20px]"
                                        />
                                    </div>
                                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                                    <Button
                                        type="submit"
                                        className="w-full text-white bg-[#0036da] hover:bg-[#0036da]/90 rounded-[20px] h-10 text-base cursor-pointer"
                                        disabled={loading}
                                    >
                                        {loading ? "Sending..." : "Continue"}
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleVerifyOtp}>
                                <div className="flex flex-col gap-4">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-600 mb-2">
                                            OTP sent to {form.emailOrPhone}
                                        </p>
                                        <Input
                                            type="text"
                                            placeholder="Enter 6-digit OTP"
                                            value={otp}
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                                                setOtp(val);
                                            }}
                                            required
                                            className="text-left text-lg tracking-widest h-12 placeholder:text-left placeholder:text-gray-400 rounded-[20px]"
                                            maxLength={6}
                                        />
                                    </div>
                                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#0036da] hover:bg-[#0036da]/90 rounded-[20px] h-10 text-base cursor-pointer text-white"
                                        disabled={loading}
                                    >
                                        {loading ? "Verifying..." : "Verify OTP"}
                                    </Button>

                                    <div className="text-center">
                                        <button
                                            type="button"
                                            onClick={handleResendOtp}
                                            className="text-sm text-[#0036da] hover:text-[#0036da]/90 underline cursor-pointer"
                                        >
                                            Resend OTP
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </CardContent>
                </Card>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[55%] border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-50 text-gray-500">Or</span>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    {/* Google Login */}
                <Button
                    variant="outline"
                    className=" rounded-full h-12 w-12 !p-0 hover:bg-gray-50 cursor-pointer"
                    onClick={handleGoogleAuth}
                >
                    <Image
                        src="/assets/img/g-logo.png"
                        alt="Google"
                        width={20}
                        height={20}
                        className="w-6 h-6"
                    />
                    
                </Button>
                </div>

                {/* Footer Links */}
                <div className="text-center">
                    <p className="text-xs text-gray-500">
                        By continuing, you agree to Cash4Back&apos;s{" "}
                        <Link href="/terms" className="underline hover:text-gray-700">
                            terms & conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="underline hover:text-gray-700">
                            privacy policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
