"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ChevronRight } from 'lucide-react';
import { RewardsRatesData, getRewardsRatesData } from '@/data/rewards';


interface RewardsRatesDialogProps {
    storeName: string;
    rewardsRatesData?: RewardsRatesData;
}


const RewardsRatesDialog: React.FC<RewardsRatesDialogProps> = ({
    storeName,
    rewardsRatesData
}) => {
    const finalRewardsData = rewardsRatesData || getRewardsRatesData(storeName);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="text-sm text-[#0036da] font-bold mb-2 cursor-pointer hover:text-[#0036da]/80 transition-colors flex items-center gap-1 group">
                    View Rewards Rates
                    <ChevronRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 text-[#0036da]" />
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900">
                        Rewards Rates - {storeName}
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 text-sm text-gray-700">
                    {/* Categories Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Category-wise Rewards Rates</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {finalRewardsData.categories.map((category, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-semibold text-gray-900">{category.category}</h4>
                                        <span className="text-lg font-bold text-green-600">{category.rate}</span>
                                    </div>
                                    <p className="text-gray-600 text-xs mb-3">{category.description}</p>
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>Min Order: {category.minOrderValue}</span>
                                        <span>Max Cashback: {category.maxCashback}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* General Information */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">General Information</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            {finalRewardsData.generalInfo.map((info, index) => (
                                <li key={index}>{info}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Important Notes */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            {finalRewardsData.importantNotes.map((note, index) => (
                                <li key={index}>{note}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                        <p className="text-blue-800 font-medium">
                            <strong>Disclaimer:</strong> Rewards rates are subject to change without prior notice.
                            Please check the latest rates before making a purchase. CashKaro reserves the right to
                            modify these terms at any time.
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default RewardsRatesDialog;
