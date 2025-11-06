"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

interface Brand {
  id: string;
  name: string;
  count: number;
}

interface FilterSidebarProps {
  selectedBrands: string[];
  onBrandChange: (brandIds: string[]) => void;
  priceRange: { min: number; max: number };
  onPriceRangeChange: (range: { min: number; max: number }) => void;
  brands: Brand[];
}

const FilterSidebar = ({
  selectedBrands,
  onBrandChange,
  priceRange,
  onPriceRangeChange,
  brands,
}: FilterSidebarProps) => {
  const [minPrice, setMinPrice] = useState(priceRange.min.toString());
  const [maxPrice, setMaxPrice] = useState(priceRange.max.toString());
  const [brandSearch, setBrandSearch] = useState("");

  // Sync local state with priceRange prop when it changes
  useEffect(() => {
    setMinPrice(priceRange.min.toString());
    setMaxPrice(priceRange.max.toString());
  }, [priceRange]);

  const handlePriceApply = () => {
    const min = parseInt(minPrice) || 0;
    const max = parseInt(maxPrice) || 1000;
    onPriceRangeChange({ min, max });
  };

  const handlePriceClear = () => {
    const defaultMin = 50;
    const defaultMax = 1000;
    setMinPrice(defaultMin.toString());
    setMaxPrice(defaultMax.toString());
    onPriceRangeChange({ min: defaultMin, max: defaultMax });
  };

  const isPriceFilterActive = priceRange.min !== 50 || priceRange.max !== 1000;

  const handleBrandToggle = (brandId: string) => {
    if (selectedBrands.includes(brandId)) {
      onBrandChange(selectedBrands.filter((id) => id !== brandId));
    } else {
      onBrandChange([...selectedBrands, brandId]);
    }
  };

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

  return (
    <div className="w-full lg:w-64 bg-white rounded-[20px] border border-gray-200 shadow-sm hover:shadow-md p-5 md:p-6 h-fit sticky top-4 transition-all duration-300 ease-out">
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-gray-200 transition-colors duration-300">
        <h2 className="text-xl font-bold text-gray-900 transition-colors duration-300">
          Filters
        </h2>
        <p className="text-xs text-gray-500 mt-1 transition-colors duration-300">
          Refine your search
        </p>
      </div>

      {/* Price Filter */}
      <div className="mb-6 pb-4 border-b border-gray-200 transition-colors duration-300">
        <Label className="text-sm font-bold text-gray-900 mb-3 block transition-colors duration-300">
          Price Range
        </Label>
        <div className="flex gap-2 mb-3">
          <Input
            type="number"
            placeholder="Min ₹"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full border-gray-300 rounded-[10px] focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 text-sm transition-all duration-300 ease-out hover:border-gray-400"
            min="0"
          />
          <Input
            type="number"
            placeholder="Max ₹"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full border-gray-300 rounded-[10px] focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 text-sm transition-all duration-300 ease-out hover:border-gray-400"
            min="0"
          />
        </div>
        <Button
          onClick={handlePriceApply}
          variant="default"
          className="w-full bg-blue-800 hover:bg-blue-900 active:bg-blue-950 text-white font-semibold rounded-[10px] px-6 py-3 text-[15px] shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out"
        >
          Apply Price Filter
        </Button>
        {isPriceFilterActive && (
          <Button
            onClick={handlePriceClear}
            variant="outline"
            className="w-full mt-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-semibold rounded-[10px] px-6 py-3 text-[15px] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out"
          >
            Clear Price Filter
          </Button>
        )}
      </div>

      {/* Brand Filter */}
      <div>
        <Label className="text-sm font-bold text-gray-900 mb-3 block transition-colors duration-300">
          Brand
        </Label>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 z-10 transition-colors duration-300 group-hover:text-gray-600" />
          <Input
            type="text"
            placeholder="Search Brand..."
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            className="pl-10 border-gray-300 rounded-[10px] focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 text-sm transition-all duration-300 ease-out hover:border-gray-400 group"
          />
        </div>
        <div className="max-h-64 overflow-y-auto space-y-1 pr-2 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-gray-100 scroll-smooth transition-all duration-300">
          {filteredBrands.length > 0 ? (
            filteredBrands.map((brand, index) => {
              const isSelected = selectedBrands.includes(brand.id);
              return (
                <div
                  key={brand.id}
                  style={{
                    animationDelay: `${index * 30}ms`,
                    animation: 'fadeInUp 0.4s ease-out forwards',
                    opacity: 0,
                  }}
                  className={`flex items-center gap-3 py-2 px-3 cursor-pointer rounded-[10px] transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] ${isSelected
                    ? "bg-blue-50 border border-blue-200 shadow-sm"
                    : "hover:bg-gray-50 border border-transparent hover:border-gray-200 hover:shadow-sm"
                    }`}
                  onClick={() => handleBrandToggle(brand.id)}
                >
                  <Checkbox
                    id={brand.id}
                    checked={isSelected}
                    onCheckedChange={() => handleBrandToggle(brand.id)}
                    className="data-[state=checked]:bg-blue-800 data-[state=checked]:border-blue-800 transition-all duration-300 ease-out"
                  />
                  <Label
                    htmlFor={brand.id}
                    className={`text-sm cursor-pointer flex-1 transition-all duration-300 ease-out ${isSelected ? "text-gray-900 font-semibold" : "text-gray-700"
                      }`}
                  >
                    {brand.name}
                    <span className={`ml-1 transition-colors duration-300 ${isSelected ? "text-gray-600" : "text-gray-500"
                      }`}>
                      ({brand.count})
                    </span>
                  </Label>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 animate-fadeIn">
              <p className="text-sm text-gray-500 font-medium transition-colors duration-300">
                No brands found
              </p>
              <p className="text-xs text-gray-400 mt-1 transition-colors duration-300">
                Try a different search term
              </p>
            </div>
          )}
        </div>
        {selectedBrands.length > 0 && (
          <button
            onClick={() => onBrandChange([])}
            className="mt-4 text-xs text-blue-800 hover:text-blue-900 font-semibold underline transition-all duration-300 ease-out hover:scale-105 active:scale-95"
          >
            Clear all brands ({selectedBrands.length} selected)
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;

