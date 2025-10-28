"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Offer, getOffersData } from '@/data/offers';
import { useParams } from 'next/navigation';
import { allStores } from '@/data/brands';

interface TabeldataProps {
    offers?: Offer[];
}

export function Tabeldata({ offers }: TabeldataProps) {
    const params = useParams();
    const storeId = params.storeId as string;
    const store = allStores[storeId];
    const storeName = store?.name || 'Store';

    const finalOffers = offers || getOffersData(storeName);
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-gray-900 font-bold text-[15px] p-4 border-r border-gray-800 w-[30%]">{storeName} Promo Codes</TableHead>
                    <TableHead className="text-gray-900 font-bold text-[15px] p-4 border-r border-gray-800 w-[30%]">Offer Details</TableHead>
                    <TableHead className="text-gray-900 font-bold text-[15px] p-4 w-[30%]">Validity</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {finalOffers.map((offer, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium text-[16px] p-4 border-r border-gray-800 w-[30%]">{offer.offerName}</TableCell>
                        <TableCell className="text-[16px] p-4 border-r border-gray-800 w-[30%]">{offer.offerDetails}</TableCell>
                        <TableCell className="text-[16px] p-4 w-[30%]">{offer.offerValidity}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
