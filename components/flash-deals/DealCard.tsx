"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface DealCardProps {
    brandLogo?: string;
    brandName: string;
    productImage: string;
    title: string;
    buttonText?: string;
    buttonLink?: string;
}

const DealCard = ({
    brandName,
    brandLogo,
    productImage,
    title,
    buttonText = "Grab Deal",
    buttonLink = "#"
}: DealCardProps) => {

    return (
        <div className="relative w-full h-[220px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={productImage}
                    width={300}
                    height={200}
                    alt={title}
                    className=""
                />
            </div>

            {/* Logo - Top Left */}
            {brandLogo && (
                <div className="absolute top-12 left-2.5 z-10">
                    <div className="w-[80px] h-[50px]">
                        <Image
                            src={brandLogo}
                            alt={brandName}
                            width={100}
                            height={50}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Button - Bottom Right */}
            <div className="absolute bottom-0 right-2.5 z-10">
                <Link href={buttonLink}>
                    <Button
                        variant="default"
                        className="bg-[#0033FF] hover:bg-[#0028CC] text-white rounded-[10px] font-normal text-[15px] px-3 py-1 transition-all duration-300 ease-out active:scale-95 shadow-sm hover:cursor-pointer"
                    >
                        {buttonText}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default DealCard;

