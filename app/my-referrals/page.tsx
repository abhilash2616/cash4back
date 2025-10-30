import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function MyReferralsPage() {
    return (
        <div className="container mx-auto p-4 border border-gray-200 rounded-[20px]">

            <div className="flex items-center justify-around mt-6">
                <Card className="border bg-blue-50 border-gray-200 rounded-[20px] p-4 w-[35%]">
                    <CardHeader className="!p-0 border-b border-gray-200">
                        <CardTitle className="text-[18px] text-center font-bold text-gray-900 w-full">Total Referral Cashback Earned</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-[24px] text-center font-bold text-blue-600">₹1000</p>
                    </CardContent>
                </Card>
                <Card className="border bg-blue-50 border-gray-200 rounded-[20px] p-4 w-[35%]">
                    <CardHeader className="!p-0 border-b border-gray-200">
                        <CardTitle className="text-[18px] text-center font-bold text-gray-900 w-full">Number of Friends Joined</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-[24px] text-center font-bold text-blue-600">10</p>
                    </CardContent>
                </Card>
            </div>

            <div className="flex items-center justify-center my-8">
                <Image src="/assets/img/referral_empty.svg" alt="My Referrals" width={300} height={300} className="w-[40%] h-auto object-cover" />
            </div>
            <div className="text-center">
                <p className="text-[18px] font-bold text-gray-900 mb-2">Nothing yet!</p>
                <p className="text-[15px] text-gray-700 mb-1">Friends who shop together, save together.</p>
                <p className="text-[15px] text-gray-700 mb-1">Refer a friend today and get <span className="text-[#ff6d1d]">10%</span> of their earnings every time they shop.</p>
                <p className="text-[15px] text-gray-700 mb-6">It&apos;s a win-win.</p>
                <Link href="/refer-earn">
                    <Button variant="outline" type="button" className="cursor-pointer bg-[#0036da] text-white rounded-[10px] px-8 py-6 capitalize text-[16px] font-medium">Start Referring Now</Button>
                </Link>
            </div>

        </div>
    );
}
