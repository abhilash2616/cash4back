"use client"

import HeaderText from "@/components/common/HeaderText"
import AmazonTopDeals from "@/components/home/AmazonTopDeals"
import Banner from "@/components/home/Banner"
import BigDiscounts from "@/components/home/BigDiscounts"
import Categories from "@/components/home/Categories"
import Coupons from "@/components/home/Coupons"
import FlashDeal from "@/components/home/FlashDeal"
import HowCash4BackWork from "@/components/home/HowCash4BackWork"
import MostPopularBrands from "@/components/home/MostPopularBrands"
import PopularStoresCategories from "@/components/home/PopularStoresCategories"
import Superstars from "@/components/home/Superstars"
// import TabLink from "@/components/home/TabLink"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <div>
      <section className="pt-0 py-4 mb-0 md:py-8">
        <div className="mx-auto px-4">
          <Banner />
        </div>
      </section>
      <section className="py-4 md:py-8">
        <div className="mx-auto px-4">
          <HeaderText heading="Categories" textalign="text-left" />
          <Categories />
        </div>
      </section>
      <section className="relative w-full h-full overflow-hidden sm:h-[430px] md:h-[710px] bgGradient my-4 md:my-8">
        <div className="w-full object-fill md:object-cover sm:h-[430px] md:h-[710px]">
          <Image src="/assets/img/flashdeal/flashdeal.png" width={1920} height={710} alt="flashdeal" />
        </div>
        <div className="mx-auto">
          <FlashDeal />
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto px-4">
          <HeaderText heading="Big Discounts on Categories" textalign="text-left" />
          <BigDiscounts />
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto px-4">
          <HeaderText heading="Most Popular Brands" textalign="text-left" />
          <MostPopularBrands />
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto px-4">
          <AmazonTopDeals />
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto px-4">
          <HeaderText heading="How Cash4Back Works" textalign="text-center" />
          <HowCash4BackWork />
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <Image src="/assets/img/refer-earn-d.png" alt="refer-earn-discount" width={1200} height={350} className="w-full h-auto object-cover" />
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <HeaderText heading="India's Best Cashback & Coupons Site" textalign="text-center" />
          <div className="flex flex-wrap justify-center items-center py-8">
            <div className="w-[28%] flex flex-col justify-center items-center">
              <Image src="/assets/img/img1.png" alt="refer-earn-discount" width={350} height={300} className="w-[335px] h-auto object-cover" />
            </div>
            <div className="w-[28%] flex flex-col justify-center items-center">
              <Image src="/assets/img/img2.png" alt="refer-earn-discount" width={350} height={300} className="w-[335px] h-auto object-cover" />
            </div>
            <div className="w-[28%] flex flex-col justify-center items-center">
              <Image src="/assets/img/img3.png" alt="refer-earn-discount" width={350} height={300} className="w-[335px] h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <HeaderText heading="Today's Top Coupon Codes" textalign="text-center" />
          <Coupons />
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <HeaderText heading="Popular Sales Online" textalign="text-center" />
          <div className="flex flex-wrap items-center justify-center py-8">
            <div className="w-[25%] flex flex-col justify-center items-center">
              <Link href="/amazon">
                <Image src="/assets/img/amazon-d.png" alt="refer-earn-discount" width={350} height={300} className="w-full h-auto object-cover" />
              </Link>
            </div>
            <div className="w-[25%] flex flex-col justify-center items-center">
              <Link href="/flipkart">
                <Image src="/assets/img/flipkart.png" alt="refer-earn-discount" width={350} height={300} className="w-full h-auto object-cover" />
              </Link>
            </div>
            <div className="w-[25%] flex flex-col justify-center items-center">
              <Link href="/myntra">
                <Image src="/assets/img/myntra.png" alt="refer-earn-discount" width={350} height={300} className="w-full h-auto object-cover" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <HeaderText heading="Don't Take Our Word" textalign="text-center" />
          <div className="flex flex-wrap items-center justify-center gap-x-4 py-8">
            <div className="w-[25%] flex flex-col justify-center items-center">
              <Image src="/assets/img/dont-take-our-word-one.png" alt="refer-earn-discount" width={350} height={300} className="w-full h-auto object-cover" />
            </div>
            <div className="w-[25%] flex flex-col justify-center items-center">
              <Image src="/assets/img/ratan-tata-1740462315.png" alt="refer-earn-discount" width={350} height={300} className="w-full h-auto object-cover" />
            </div>
            <div className="w-[25%] flex flex-col justify-center items-center">
              <Image src="/assets/img/dont-take-our-word-three.png" alt="refer-earn-discount" width={350} height={300} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <PopularStoresCategories />
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto px-4">
        <HeaderText heading="Meet Our Superstars" textalign="text-center" />
          <Superstars />
        </div>
      </section>
    </div>
  )
}

export default page
