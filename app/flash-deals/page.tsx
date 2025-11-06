"use client";

import { useState, useMemo, useEffect } from "react";
import DealCard from "@/components/flash-deals/DealCard";
import FilterSidebar from "@/components/flash-deals/FilterSidebar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AutoBreadcrumb from "@/components/common/AutoBreadcrumb";
import HeaderText from "@/components/common/HeaderText";
import { IoTimerOutline } from "react-icons/io5";

// Sample dummy data
const dummyDeals = [
  {
    id: "1",
    brandName: "STRCH",
    brandLogo: "/assets/img/flashdeal/strch-coupons.jpg",
    productImage: "/assets/img/flashdeal/Vajor.png",
    title: "Enjoy Flat 40% off On Women's Gymwear",
    description: "Gym Ready Collection",
    cashback: "Flat 75% Cashback",
    tag: "Limited Period",
  },
  {
    id: "2",
    brandName: "IndiGo HOTELS",
    brandLogo: "/assets/img/flashdeal/bank-karo-axis-flipkart.png",
    productImage: "/assets/img/flashdeal/Vajor-1.png",
    title: "Book Your Dream Stays",
    description: "Minimum Booking: ₹2500",
    cashback: "Flat ₹2,000 Cashback",
    tag: "Limited Period",
  },
  {
    id: "3",
    brandName: "clove ORAL CARE",
    brandLogo: "/assets/img/flashdeal/clove-oral-care-coupons.jpg",
    productImage: "/assets/img/flashdeal/Vajor-2.png",
    title: "Enamel Repair Pack + Free Dental Health Plan Worth ₹2000*",
    description: "Lowest Price Ever",
    discountBadge: "85% off",
    originalPrice: 985,
    currentPrice: 146,
    cashback: "Up to 85% Cashback",
  },
  {
    id: "4",
    brandName: "City Gold Life",
    brandLogo: "/assets/img/flashdeal/nutrabay-offers-test.png",
    productImage: "/assets/img/flashdeal/Vajor-3.png",
    title: "City Gold life Jar Pack | 2Kg",
    description: "Limited Stock",
    discountBadge: "50% off",
    originalPrice: 533,
    currentPrice: 269,
    cashback: "Flat 50% Cashback",
  },
  {
    id: "5",
    brandName: "HDFC BANK CREDIT CARD",
    brandLogo: "/assets/img/flashdeal/simply-click-sbi-card.png",
    productImage: "/assets/img/flashdeal/Vajor-4.png",
    title: "Up to 10X Reward Points On your spending",
    cashback: "Up to ₹800 Rewards",
    buttonText: "Apply Now",
    tag: "Limited Period",
  },
  {
    id: "6",
    brandName: "TIMESPRIME All in One",
    brandLogo: "/assets/img/flashdeal/times-prime-coupons.jpg",
    productImage: "/assets/img/flashdeal/Vajor-5.png",
    title: "Renew or get Times Prime Subscription",
    discountBadge: "99% off",
    originalPrice: 1299,
    currentPrice: 1,
    cashback: "Flat 99% Cashback",
  },
  {
    id: "7",
    brandName: "RIGO",
    brandLogo: "/assets/img/flashdeal/theurbannestco-coupons.png",
    productImage: "/assets/img/flashdeal/Vajor-6.png",
    title: "Up to 60% Off On Men's T-Shirts",
    description: "New Collections",
    cashback: "Flat 32% Cashback",
    tag: "New Collections",
  },
  {
    id: "8",
    brandName: "RIGO",
    brandLogo: "/assets/img/flashdeal/theurbannestco-coupons.png",
    productImage: "/assets/img/flashdeal/Vajor-7.png",
    title: "Upto 60% Off On Dresses & Jumpsuits",
    description: "New Collections",
    cashback: "Flat 32% Cashback",
    tag: "New Collections",
  },
  {
    id: "9",
    brandName: "HDFC BANK NeuCARD",
    brandLogo: "/assets/img/flashdeal/simply-click-sbi-card.png",
    productImage: "/assets/img/flashdeal/Vajor-8.png",
    title: "Get Neu Card with Exclusive Benefits",
    cashback: "Up to ₹1000 Rewards",
    buttonText: "Apply Now",
    tag: "Limited Period",
  },
  {
    id: "10",
    brandName: "LIVSPACE",
    brandLogo: "/assets/img/flashdeal/house-of-koala-offers.png",
    productImage: "/assets/img/flashdeal/Vajor-9.png",
    title: "Home Decor & Furniture Collection",
    description: "Limited Period",
    cashback: "Flat 25% Cashback",
    tag: "Limited Period",
  },
  {
    id: "11",
    brandName: "OTTplay All in One",
    brandLogo: "/assets/img/flashdeal/ott-play-coupons-test.png",
    productImage: "/assets/img/flashdeal/Vajor-10.png",
    title: "Streaming Services Subscription",
    cashback: "Flat 40% Cashback",
    tag: "Limited Period",
  },
  {
    id: "12",
    brandName: "STRCH",
    brandLogo: "/assets/img/flashdeal/strch-coupons.jpg",
    productImage: "/assets/img/flashdeal/Vajor-11.png",
    title: "Men's Casual Wear Collection",
    description: "Limited Period",
    cashback: "Flat 35% Cashback",
    tag: "Limited Period",
  },
];


const brandsData = [
  { id: "1", name: "STRCH", count: 2 },
  { id: "2", name: "Clove Oral Care", count: 2 },
  { id: "3", name: "Livspace Home", count: 2 },
  { id: "4", name: "Rigo", count: 2 },
  { id: "5", name: "IndiGo Hotels", count: 1 },
  { id: "6", name: "City Gold Life", count: 1 },
  { id: "7", name: "HDFC Bank", count: 2 },
  { id: "8", name: "Times Prime", count: 1 },
  { id: "9", name: "LIVSPACE", count: 1 },
  { id: "10", name: "OTTplay", count: 1 },
];

const FlashDealsPage = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 50, max: 1000 });
  const [timer, setTimer] = useState("04:15:36");

  
  const timerEnd = useMemo(() => {
    const end = new Date();
    end.setHours(end.getHours() + 4);
    end.setMinutes(end.getMinutes() + 15);
    end.setSeconds(end.getSeconds() + 36);
    return end;
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = timerEnd.getTime() - now.getTime();

      if (diff <= 0) {
        setTimer("00:00:00");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimer(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [timerEnd]);

  
  const filteredAndSortedDeals = useMemo(() => {
    let deals = [...dummyDeals];

    
    if (selectedBrands.length > 0) {
      deals = deals.filter((deal) =>
        selectedBrands.some((brandId) => {
          const brand = brandsData.find((b) => b.id === brandId);
          return brand && deal.brandName.toLowerCase().includes(brand.name.toLowerCase());
        })
      );
    }

    
    deals = deals.filter((deal) => {
      const price = deal.currentPrice || 0;
      return price >= priceRange.min && price <= priceRange.max;
    });

    
    switch (activeTab) {
      case "popular":
        break;
      case "discount":
        deals.sort((a, b) => {
          const discountA = a.discountBadge ? parseInt(a.discountBadge.replace("% off", "")) : 0;
          const discountB = b.discountBadge ? parseInt(b.discountBadge.replace("% off", "")) : 0;
          return discountB - discountA;
        });
        break;
      case "high-price":
        deals.sort((a, b) => {
          const priceA = a.currentPrice || a.originalPrice || 0;
          const priceB = b.currentPrice || b.originalPrice || 0;
          return priceB - priceA;
        });
        break;
      case "low-price":
        deals.sort((a, b) => {
          const priceA = a.currentPrice || a.originalPrice || 0;
          const priceB = b.currentPrice || b.originalPrice || 0;
          return priceA - priceB;
        });
        break;
    }

    return deals;
  }, [activeTab, selectedBrands, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6">
          <AutoBreadcrumb customLabels={{ "flash-deals": "Flash Deals" }} />
        </div>

        {/* Page Title */}
        <HeaderText heading="Flash Deals" textalign="text-center md:text-left" />

        {/* Tabs and Timer */}
        <div className="mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
              <TabsList
                className="bg-white/80 border border-gray-200 rounded-full p-1 h-auto shadow-xs backdrop-blur supports-[backdrop-filter]:bg-white/70 max-w-full overflow-x-auto whitespace-nowrap scrollbar-hide"
              >
                <TabsTrigger
                  value="popular"
                  className="px-4 md:px-6 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900 transition-all data-[state=active]:bg-blue-800 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:shadow-gray-500/20"
                >
                  Popular
                </TabsTrigger>
                <TabsTrigger
                  value="discount"
                  className="px-4 md:px-6 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900 transition-all data-[state=active]:bg-blue-800 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:shadow-gray-500/20"
                >
                  Discount
                </TabsTrigger>
                <TabsTrigger
                  value="high-price"
                  className="px-4 md:px-6 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900 transition-all data-[state=active]:bg-blue-800 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:shadow-gray-500/20"
                >
                  High Price
                </TabsTrigger>
                <TabsTrigger
                  value="low-price"
                  className="px-4 md:px-6 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900 transition-all data-[state=active]:bg-blue-800 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:shadow-gray-500/20"
                >
                  Low Price
                </TabsTrigger>
              </TabsList>

              {/* Timer */}
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white px-3 py-2 rounded-full border border-gray-200 shadow-xs w-[190px] md:w-[260px]">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-600">
                  <IoTimerOutline className="text-[18px]" />
                </span>
                <span className="text-gray-700">Ends in</span>
                <span className="ml-auto font-mono tabular-nums tracking-wider">{timer}</span>
              </div>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              {/* Main Layout: Sidebar + Deals Grid */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Filter Sidebar */}
                <div className="w-full lg:w-auto">
                  <FilterSidebar
                    selectedBrands={selectedBrands}
                    onBrandChange={setSelectedBrands}
                    priceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                    brands={brandsData}
                  />
                </div>

                {/* Deals Grid */}
                <div className="flex-1">
                  {filteredAndSortedDeals.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {filteredAndSortedDeals.map((deal) => (
                        <DealCard
                          key={deal.id}
                          {...deal}
                          buttonLink={`/flash-deals/${deal.id}`}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                      <p className="text-gray-500 text-lg">
                        No deals found matching your filters.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FlashDealsPage;
