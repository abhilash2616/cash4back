"use client";

import HeaderText from "@/components/common/HeaderText";
import Image from "next/image";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
        <HeaderText heading="Flash Deals" textalign="text-center" />

        <div className="flex items-center justify-center">
            <Image src="/assets/img/error_noproduct.png" alt="flash-deals" width={500} height={500} />
        </div>
            <p className="text-center text-gray-500">Sorry no data found regarding your search</p>
    </div>
  )
}

export default page