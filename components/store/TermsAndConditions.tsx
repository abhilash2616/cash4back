"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ChevronRight } from 'lucide-react';
import { TermsData, getTermsData } from '@/data/terms';


interface TermsAndConditionsProps {
    storeName: string;
    timelineData?: {
        title: string;
        value: string;
        subtitle: string;
    }[];
    termsData?: TermsData;
}


const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
    storeName,
    timelineData,
    termsData
}) => {
    const finalTermsData = termsData || getTermsData(storeName);

    // Get dynamic values from timeline data
    const getCashbackDays = () => {
        const confirmData = timelineData?.find(item => item.title.includes('confirm'));
        return confirmData?.value || '30';
    };

    const getMinOrderValue = () => {
        const trackData = timelineData?.find(item => item.title.includes('track'));
        return trackData?.value || '299';
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="text-blue-600 hover:text-blue-800 underline font-medium cursor-pointer flex items-center gap-2 group">
                    View All Terms & Conditions
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-blue-600" />
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-gray-900">
                        Terms & Conditions - {storeName}
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm text-gray-700">
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">General Terms:</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            {finalTermsData.generalTerms.map((term, index) => (
                                <li key={index}>{term}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Cashback Terms:</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Cashback will be credited within {getCashbackDays()} days of order confirmation</li>
                            <li>Minimum order value: ₹{getMinOrderValue()} for cashback eligibility</li>
                            {finalTermsData.cashbackTerms.slice(2).map((term, index) => (
                                <li key={index}>{term}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Payment & Shipping:</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            {finalTermsData.paymentShippingTerms.map((term, index) => (
                                <li key={index}>{term}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Important Notes:</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            {finalTermsData.importantNotes.map((note, index) => (
                                <li key={index}>{note}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                        <p className="text-yellow-800 font-medium">
                            <strong>Note:</strong> These terms are subject to change. Please check back regularly for updates.
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default TermsAndConditions;
