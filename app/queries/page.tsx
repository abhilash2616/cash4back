import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AutoBreadcrumb from "@/components/common/AutoBreadcrumb";
import Image from "next/image";

export default function QueriesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <AutoBreadcrumb />
            </div>

            <div className="max-w-5xl mx-auto">
                <Card className="border border-gray-200 rounded-[20px] p-0">
                    <CardHeader className="space-y-0 py-2 px-0 border-b border-gray-200">
                        <CardTitle className="text-[#00000] text-[16px] font-bold text-center">Your Recent Queries</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <div className="min-h-[500px] relative flex flex-col items-center justify-center py-12">
                            {/* Background Image */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <Image src="/assets/img/raise-query-bg.png" alt="Queries Empty" width={800} height={800} className="w-[80%] h-auto object-fill" />
                            </div>

                            {/* Foreground Image */}
                            <div className="relative z-20 flex items-center justify-center mb-8">
                                <Image src="/assets/img/no_queries_v1.png" alt="Queries Empty" width={100} height={100} className="w-full max-w-[300px] h-auto object-contain" />
                            </div>

                            {/* Text Content */}
                            <div className="relative z-30 flex flex-col items-center justify-center gap-2 mt-4">
                                <p className="text-[#00000] text-[16px] font-bold text-center">Sorry, No Queries Found in your Account</p>
                                <p className="text-[#00000] text-[14px] text-center">The queries you raise on your tracked Cashback/Rewards are shown here.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
