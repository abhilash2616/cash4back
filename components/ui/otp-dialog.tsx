"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Loader2, RefreshCw } from "lucide-react";

interface OTPDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onVerify: (otp: string) => Promise<boolean>;
    onResend?: () => Promise<void>;
    title?: string;
    description?: string;
    otpLength?: number;
    isLoading?: boolean;
}

export function OTPDialog({
    open,
    onOpenChange,
    onVerify,
    onResend,
    title = "Enter Verification Code",
    description = "Please enter the verification code sent to your registered mobile number.",
    otpLength = 6,
    isLoading = false
}: OTPDialogProps) {
    const [otp, setOtp] = useState("");
    const [isVerifying, setIsVerifying] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [error, setError] = useState("");

    const handleVerify = async () => {
        if (otp.length !== otpLength) {
            setError(`Please enter all ${otpLength} digits`);
            return;
        }

        setIsVerifying(true);
        setError("");

        try {
            const isValid = await onVerify(otp);
            if (isValid) {
                onOpenChange(false);
                setOtp("");
            } else {
                setError("Invalid verification code. Please try again.");
            }
        } catch {
            setError("Verification failed. Please try again.");
        } finally {
            setIsVerifying(false);
        }
    };

    const handleResend = async () => {
        if (!onResend) return;

        setIsResending(true);
        setError("");

        try {
            await onResend();
            setOtp("");
        } catch {
            setError("Failed to resend code. Please try again.");
        } finally {
            setIsResending(false);
        }
    };

    const handleOpenChange = (newOpen: boolean) => {
        if (!newOpen) {
            setOtp("");
            setError("");
        }
        onOpenChange(newOpen);
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <div className="flex justify-center">
                        <InputOTP
                            maxLength={otpLength}
                            value={otp}
                            onChange={setOtp}
                            onComplete={handleVerify}
                        >
                            <InputOTPGroup>
                                {Array.from({ length: otpLength }, (_, i) => (
                                    <InputOTPSlot key={i} index={i} />
                                ))}
                            </InputOTPGroup>
                        </InputOTP>
                    </div>

                    {error && (
                        <div className="text-sm text-red-600 text-center">
                            {error}
                        </div>
                    )}

                    <div className="flex flex-col gap-3">
                        <Button
                            onClick={handleVerify}
                            disabled={otp.length !== otpLength || isVerifying || isLoading}
                            className="w-full"
                        >
                            {isVerifying ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                "Verify Code"
                            )}
                        </Button>

                        {onResend && (
                            <Button
                                variant="outline"
                                onClick={handleResend}
                                disabled={isResending || isLoading}
                                className="w-full"
                            >
                                {isResending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Resending...
                                    </>
                                ) : (
                                    <>
                                        <RefreshCw className="mr-2 h-4 w-4" />
                                        Resend Code
                                    </>
                                )}
                            </Button>
                        )}
                    </div>

                    <div className="text-xs text-gray-500 text-center">
                        Didn&apos;t receive the code? Check your spam folder or try resending.
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
