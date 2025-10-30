"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import ErrorInfoDialog from "@/components/earnings/ErrorInfoDialog";
import Link from "next/link";

export default function EarningsPage() {
    const [infoOpen, setInfoOpen] = useState(false);
    const [rewardsOpen, setRewardsOpen] = useState(false);
    const [referralsOpen, setReferralsOpen] = useState(false);
    return (
        <div className="container mx-auto p-4 border border-gray-200 rounded-[20px]">
            <div>
                <p className="text-[18px] font-bold text-gray-900 capitalize mb-1">all time earnings</p>
                <p className="text-gray-500 text-[14px] mb-2">Your Total Earnings amount includes your Cashback + Rewards + Referral amount.</p>
                <p className="text-[30px] leading-none font-bold text-[#0036da] mb-2">₹2,450</p>
                <p className="text-gray-500 text-[14px] mb-2">Earnings will show here within 72 hours of your shopping via CashKaro app</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border border-gray-200 rounded-[20px] p-4">
                    <CardContent className="p-0">
                        <div className="border-b pb-4 border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="text-[15px] font-medium text-gray-900 mb-1">Cashback</p>
                                <p className="text-[20px] leading-none font-medium">₹2,450</p>
                            </div>
                            <div>
                                <Button variant="ghost" className="cursor-pointer" size="icon" onClick={() => setInfoOpen(true)} aria-label="Rewards info">
                                    <AlertCircle className="h-5 w-5 text-black" />
                                </Button>
                            </div>
                        </div>
                        <div className="border-b py-4 border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="text-[18px] leading-none font-medium mb-1">₹2,450</p>
                                <p className="text-[14px] text-gray-800 leading-none">Available for payment</p>
                            </div>
                            <div>
                                <div className="border border-green-600 bg-green-100 rounded-[10px] p-2">
                                    <p className="text-[12px] font-medium text-gray-900 leading-none"><span className="w-2 h-2 rounded-full inline-block bg-green-600 mr-2"></span>Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b py-4 border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="text-[18px] leading-none font-medium">₹580</p>
                            </div>
                            <div>
                                <div className="border border-yellow-600 bg-yellow-100 rounded-[10px] p-2">
                                    <p className="text-[12px] font-medium text-gray-900 leading-none"><span className="w-2 h-2 rounded-full inline-block bg-yellow-600 mr-2"></span>Pending</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="text-[18px] leading-none font-medium">₹1,870</p>
                            </div>
                            <div>
                                <div className="border border-blue-600 bg-blue-100 rounded-[10px] p-2">
                                    <p className="text-[12px] font-medium text-gray-900 leading-none"><span className="w-2 h-2 rounded-full inline-block bg-blue-600 mr-2"></span>Paid</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 rounded-[20px] p-4">
                    <CardContent className="p-0">
                        <div className="border-b pb-4 border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="text-[15px] font-medium text-gray-900 mb-1">Rewards</p>
                                <p className="text-[20px] leading-none font-medium">₹2,850</p>
                            </div>
                            <div>
                                <Button variant="ghost" className="cursor-pointer" size="icon" onClick={() => setRewardsOpen(true)} aria-label="Cashback info">
                                    <AlertCircle className="h-5 w-5 text-black" />
                                </Button>
                            </div>
                        </div>
                        <div className="border-b py-4 border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="text-[18px] leading-none font-medium mb-1">₹2,250</p>
                                <p className="text-[14px] text-gray-800 leading-none">Available for payment</p>
                            </div>
                            <div>
                                <div className="border border-green-600 bg-green-100 rounded-[10px] p-2">
                                    <p className="text-[12px] font-medium text-gray-900 leading-none"><span className="w-2 h-2 rounded-full inline-block bg-green-600 mr-2"></span>Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b py-4 border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="text-[18px] leading-none font-medium">₹890</p>
                            </div>
                            <div>
                                <div className="border border-yellow-600 bg-yellow-100 rounded-[10px] p-2">
                                    <p className="text-[12px] font-medium text-gray-900 leading-none"><span className="w-2 h-2 rounded-full inline-block bg-yellow-600 mr-2"></span>Pending</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="text-[18px] leading-none font-medium">₹610</p>
                            </div>
                            <div>
                                <div className="border border-blue-600 bg-blue-100 rounded-[10px] p-2">
                                    <p className="text-[12px] font-medium text-gray-900 leading-none"><span className="w-2 h-2 rounded-full inline-block bg-blue-600 mr-2"></span>Paid</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 rounded-[20px] p-4">
                    <CardContent className="p-0">
                        <div className="border-b pb-4 border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="text-[15px] font-medium text-gray-900 mb-1">Referrals</p>
                                <p className="text-[20px] leading-none font-medium">₹1,250</p>
                            </div>
                            <div>
                                <Button variant="ghost" className="cursor-pointer" size="icon" onClick={() => setReferralsOpen(true)} aria-label="Cashback info">
                                    <AlertCircle className="h-5 w-5 text-black" />
                                </Button>
                            </div>
                        </div>
                        <div className="border-b py-4 border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="text-[18px] leading-none font-medium mb-1">₹1,250</p>
                                <p className="text-[14px] text-gray-800 leading-none">Available for payment</p>
                            </div>
                            <div>
                                <div className="border border-green-600 bg-green-100 rounded-[10px] p-2">
                                    <p className="text-[12px] font-medium text-gray-900 leading-none"><span className="w-2 h-2 rounded-full inline-block bg-green-600 mr-2"></span>Confirmed</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b py-4 border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="text-[18px] leading-none font-medium">₹0</p>
                            </div>
                            <div>
                                <div className="border border-yellow-600 bg-yellow-100 rounded-[10px] p-2">
                                    <p className="text-[12px] font-medium text-gray-900 leading-none"><span className="w-2 h-2 rounded-full inline-block bg-yellow-600 mr-2"></span>Pending</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="text-[18px] leading-none font-medium">₹0</p>
                            </div>
                            <div>
                                <div className="border border-blue-600 bg-blue-100 rounded-[10px] p-2">
                                    <p className="text-[12px] font-medium text-gray-900 leading-none"><span className="w-2 h-2 rounded-full inline-block bg-blue-600 mr-2"></span>Paid</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex items-center justify-center mb-6">
                <Link href="/settings?tab=payments">
                    <Button variant="outline" type="button" className="cursor-pointer bg-[#0036da] text-white rounded-[10px] px-8 py-6 capitalize text-[16px] font-medium">request payment</Button>
                </Link>
            </div>

            <div className="py-4 bg-blue-50 rounded-[20px] flex flex-col gap-2 pl-4">
                <Link href="/earnings/order-details" className="text-[16px] font-bold text-gray-800 capitalize py-4 border-b border-gray-200 hover:text-blue-600">my order details</Link>
                <Link href="/get-help" className="text-[16px] font-bold text-gray-800 capitalize py-4 hover:text-blue-600">Get Help</Link>
            </div>
            <ErrorInfoDialog open={infoOpen} onOpenChange={setInfoOpen} title="Cashback Breakup">
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Confirmed : </strong>Earnings after the return/cancellation period, which is available for bank transfer via UPI or NEFT. You will need a minimum of ₹1 confirmed Cashback to proceed.</li>
                    <li><strong> Pending : </strong>Earnings before the return/cancellation period.</li>
                    <li><strong> Paid : </strong>Earnings before the return/cancellation period.</li>
                </ul>
            </ErrorInfoDialog>
            <ErrorInfoDialog open={rewardsOpen} onOpenChange={setRewardsOpen} title="Rewards Breakup">
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Confirmed : </strong>Earnings after the return/cancellation period, which can be transferred to your Amazon Pay balance or redeemed via Flipkart gift card. You will need a minimum of ₹1 confirmed Rewards to proceed.</li>
                    <li><strong> Pending : </strong>Earnings before the return/cancellation period.</li>
                    <li><strong> Paid : </strong>Earnings before the return/cancellation period.</li>
                </ul>
            </ErrorInfoDialog>
            <ErrorInfoDialog open={referralsOpen} onOpenChange={setReferralsOpen} title="Referrals Breakup">
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Confirmed : </strong>Earnings after the return/cancellation period, which is available for bank transfer via UPI or NEFT. You will need a minimum of ₹1 confirmed Cashback to proceed.</li>
                    <li><strong> Pending : </strong>Earnings before the return/cancellation period.</li>
                    <li><strong> Paid : </strong>Earnings before the return/cancellation period.</li>
                </ul>
            </ErrorInfoDialog>
        </div>
    );
}
