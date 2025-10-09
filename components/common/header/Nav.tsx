"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode, useState } from "react"
import {
  FiStar, FiLayers, FiSmartphone, FiHeadphones, FiMonitor,
} from "react-icons/fi"
import { TbShirt } from "react-icons/tb"

type MenuItemType = {
  label: string
  href: string
  icon?: ReactNode
  sub?: MenuItemType[]
}

const categories: MenuItemType[] = [
  {
    label: "Most Popular Retailers",
    href: "/retailers/popular",
    icon: <FiStar />,
    sub: [
      { label: "Amazon", href: "/retailers/popular/amazon" },
      {
        label: "Flipkart",
        href: "/retailers/popular/flipkart",
        sub: [
          { label: "Electronics", href: "/retailers/popular/flipkart/electronics" },
          { label: "Fashion", href: "/retailers/popular/flipkart/fashion" },
          { label: "Shoes", href: "/retailers/popular/flipkart/shoes" },
          { label: "Beauty", href: "/retailers/popular/flipkart/beauty" },
        ]
      },
      { label: "Myntra", href: "/retailers/popular/myntra" },
    ],
  },
  {
    label: "Retailers by Category",
    href: "/retailers/category",
    icon: <FiLayers />,
    sub: [
      { label: "Electronics", href: "/retailers/category/electronics" },
      { label: "Fashion", href: "/retailers/category/fashion" },
      { label: "Groceries", href: "/retailers/category/grocery" },
    ],
  },
  { label: "Mobiles", href: "/mobiles", icon: <FiSmartphone /> },
  { label: "Headphones", href: "/headphones", icon: <FiHeadphones /> },
  { label: "Laptops", href: "/laptops", icon: <FiMonitor /> },
  { label: "Men Fashion", href: "/fashion/men", icon: <TbShirt /> },
]

const Nav = () => {
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const renderMenu = (items: MenuItemType[], level = 0, parentKey = "") => {
    return items.map((item, index) => {
      const key = parentKey + index
      const hasSub = item.sub && item.sub.length > 0
      const isActive = pathname === item.href

      return (
        <div
          key={key}
          className="relative"
          onMouseEnter={() => setActiveMenu(key)}
          onMouseLeave={() => setActiveMenu(parentKey || null)}
        >
          <Link
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${isActive
                ? "bg-gray-100 text-black"
                : "text-gray-700 hover:bg-gray-100 hover:text-black"
              }`}
          >
            {item.icon && <span className="text-lg">{item.icon}</span>}
            {item.label}
            {hasSub && <span className="ml-auto text-xs">{level === 0 ? "▸" : "›"}</span>}
          </Link>

          {hasSub && activeMenu === key && (
            <div
              className={`absolute top-0 left-full bg-white shadow-lg border border-gray-200 rounded-lg py-2 w-64 z-10`}
            >
              {renderMenu(item.sub!, level + 1, key)}
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <div className="relative">
      <nav className="flex flex-col gap-1">{renderMenu(categories)}</nav>

      {/* Overlay to close menu on click outside */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveMenu(null)}
        />
      )}
    </div>
  )
}

export default Nav
