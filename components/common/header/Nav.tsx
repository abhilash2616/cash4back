"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode, useState } from "react"
import {
    FiStar, FiLayers, FiSmartphone, FiHeadphones, FiMonitor, FiHeart,
    FiShoppingBag, FiCreditCard, FiBookOpen, FiDollarSign, FiTrendingUp,
    FiChevronDown, FiSearch
} from "react-icons/fi"
import { TbShirt, TbShirtFilled, TbShoe, TbBabyCarriage } from "react-icons/tb"
import { MdKitchen, MdLocalGroceryStore, MdHealthAndSafety } from "react-icons/md"
import { HiOutlineSparkles } from "react-icons/hi"
import { BiSolidPlane } from "react-icons/bi"
import { motion, AnimatePresence } from "framer-motion"

type MenuItemType = {
    label: string
    href: string
    icon?: ReactNode
    sub?: MenuItemType[]
}

const categories: MenuItemType[] = [
    {
        label: "Most Popular Retailers",
        href: "#",
        icon: <FiStar />,
        sub: [
            { label: "Amazon", href: "/stores/amazon" },
            { label: "Flipkart", href: "/stores/flipkart" },
            { label: "Myntra", href: "/stores/myntra" },
            { label: "AJIO", href: "/stores/ajio" },
            { label: "JioMart", href: "/stores/jiomart" },
            { label: "Reliance Digital", href: "/stores/reliancedigital" },
            { label: "Nykaa", href: "/stores/nykaa" },
            { label: "MamaEarth", href: "/stores/mamaearth" },
            { label: "Truemeds", href: "/stores/truemeds" },
            { label: "FirstCry", href: "/stores/firstcry" },
        ],
    },
    {
        label: "Retailers by Category",
        href: "#",
        icon: <FiLayers />,
        sub: [
            { label: "Electronics", href: "/categories/electronics" },
            { label: "Fashion", href: "/categories/fashion" },
            { label: "Beauty & Grooming", href: "/categories/beauty" },
            { label: "Home & Kitchen", href: "/categories/home-kitchen" },
            { label: "Food & Grocery", href: "/categories/grocery" },
            { label: "Health & Wellness", href: "/categories/health" },
            { label: "Travel", href: "/categories/travel" },
            { label: "Education", href: "/categories/education" },
        ],
    },
    {
        label: "Top Product Deals",
        href: "#",
        icon: <FiTrendingUp />,
        sub: [
            { label: "Mobiles", href: "/mobiles" },
            { label: "Headphones", href: "/headphones" },
            { label: "Laptops", href: "/laptops" },
            { label: "Men Fashion", href: "/fashion/men" },
            { label: "Women Fashion", href: "/fashion/women" },
            { label: "Men Shoes", href: "/shoes/men" },
            { label: "Women Shoes", href: "/shoes/women" },
            { label: "Beauty", href: "/beauty" },
            { label: "Grocery", href: "/grocery" },
            { label: "Diapers", href: "/diapers" },
        ],
    },
    {
        label: "Top Categories",
        href: "/categories",
        icon: <FiShoppingBag />,
        sub: [
            { label: "Biggest Sales", href: "/categories/biggest-sales" },
            { label: "Electronics", href: "/categories/electronics" },
            { label: "Fashion", href: "/categories/fashion" },
            { label: "Home & Kitchen", href: "/categories/home-kitchen" },
            { label: "Min 50% Cashback", href: "/categories/min-50-cashback" },
            { label: "Credit Cards", href: "/categories/credit-cards" },
            { label: "Beauty & Grooming", href: "/categories/beauty-grooming" },
            { label: "Flights & Hotels", href: "/categories/travel" },
            { label: "Food & Grocery", href: "/categories/food-grocery" },
            { label: "Pharmacy", href: "/categories/pharmacy" },
            { label: "New on CashKaro", href: "/categories/new" },
            { label: "Education", href: "/categories/education" },
            { label: "Loans", href: "/categories/loans" },
            { label: "Health & Wellness", href: "/categories/health-wellness" },
            { label: "Departmental", href: "/categories/departmental" },
        ],
    },
    {
        label: "Most Popular Brands",
        href: "#",
        icon: <FiHeart />,
        sub: [
            { label: "Amazon India", href: "/brands/amazon" },
            { label: "Flipkart", href: "/brands/flipkart" },
            { label: "Myntra", href: "/brands/myntra" },
            { label: "AJIO", href: "/brands/ajio" },
            { label: "JioMart", href: "/brands/jiomart" },
            { label: "Reliance Digital", href: "/brands/reliancedigital" },
            { label: "mCaffeine", href: "/brands/mcaffeine" },
            { label: "HP", href: "/brands/hp" },
            { label: "Strch", href: "/brands/strch" },
            { label: "MamaEarth", href: "/brands/mamaearth" },
            { label: "The Derma Co", href: "/brands/thedermaco" },
            { label: "Truemeds", href: "/brands/truemeds" },
            { label: "boAt", href: "/brands/boat" },
            { label: "Adidas", href: "/brands/adidas" },
            { label: "Nike", href: "/brands/nike" },
            { label: "FirstCry", href: "/brands/firstcry" },
        ],
    },
    { label: "Mobiles", href: "/mobiles", icon: <FiSmartphone /> },
    { label: "Headphones", href: "/headphones", icon: <FiHeadphones /> },
    { label: "Laptops", href: "/laptops", icon: <FiMonitor /> },
    { label: "Men Fashion", href: "/fashion/men", icon: <TbShirt /> },
    { label: "Women Fashion", href: "/fashion/women", icon: <TbShirtFilled /> },
    { label: "Men Shoes", href: "/shoes/men", icon: <TbShoe /> },
    { label: "Women Shoes", href: "/shoes/women", icon: <TbShoe /> },
    { label: "Beauty", href: "/beauty", icon: <HiOutlineSparkles /> },
    { label: "Grocery", href: "/grocery", icon: <MdLocalGroceryStore /> },
    { label: "Diapers", href: "/diapers", icon: <TbBabyCarriage /> },
    { label: "Home & Kitchen", href: "/home-kitchen", icon: <MdKitchen /> },
    { label: "Health & Wellness", href: "/health", icon: <MdHealthAndSafety /> },
    { label: "Travel", href: "/travel", icon: <BiSolidPlane /> },
    { label: "Credit Cards", href: "/credit-cards", icon: <FiCreditCard /> },
    { label: "Education", href: "/education", icon: <FiBookOpen /> },
    { label: "Loans", href: "/loans", icon: <FiDollarSign /> },
]


const Nav = () => {
    const pathname = usePathname()
    const [activeMenus, setActiveMenus] = useState<Set<string>>(new Set())



    const renderMenu = (items: MenuItemType[]) => {
        return items.map((item, index) => {
            const key = `menu-${index}-${item.href.replace(/[^a-zA-Z0-9]/g, '')}`
            const hasSub = item.sub && item.sub.length > 0
            const isActive = pathname === item.href

            return (
                <div
                    key={key}
                    className="relative"
                >
                    {hasSub ? (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => {
                                e.preventDefault()
                                setActiveMenus(prev => {
                                    const newSet = new Set(prev)
                                    if (newSet.has(key)) {
                                        newSet.delete(key)
                                    } else {
                                        newSet.clear()
                                        newSet.add(key)
                                    }
                                    return newSet
                                })
                            }}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group cursor-pointer relative z-10 w-full text-left border border-transparent
               ${isActive
                                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-l-4 border-blue-500 shadow-sm"
                                    : "text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900 hover:shadow-sm hover:border-gray-200"
                                }`}
                        >
                            {item.icon && (
                                <motion.span
                                    className={`text-lg transition-colors duration-300 ${isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-700"
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {item.icon}
                                </motion.span>
                            )}
                            <span className="flex-1 font-semibold">{item.label}</span>
                            <motion.span
                                className="text-gray-400 transition-all duration-300"
                                animate={{
                                    rotate: activeMenus.has(key) ? 180 : 0,
                                    color: activeMenus.has(key) ? "#3b82f6" : "#9ca3af"
                                }}
                            >
                                <FiChevronDown className="w-4 h-4" />
                            </motion.span>
                        </motion.button>
                    ) : (
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href={item.href}
                                onClick={(e) => {
                                    // Close menus when clicking main navigation items
                                    setActiveMenus(new Set())
                                    // Allow the link to navigate normally
                                    e.stopPropagation()
                                }}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group cursor-pointer relative z-10 border border-transparent
                   ${isActive
                                        ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-l-4 border-blue-500 shadow-sm"
                                        : "text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900 hover:shadow-sm hover:border-gray-200"
                                    }`}
                            >
                                {item.icon && (
                                    <motion.span
                                        className={`text-lg transition-colors duration-300 ${isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-700"
                                            }`}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {item.icon}
                                    </motion.span>
                                )}
                                <span className="flex-1 font-semibold">{item.label}</span>
                            </Link>
                        </motion.div>
                    )}

                    <AnimatePresence>
                        {hasSub && activeMenus.has(key) && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, y: -10 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="ml-6 mt-2 space-y-1 pl-4 bg-gradient-to-r from-blue-50/30 to-transparent rounded-r-lg"
                            >
                                {item.sub!.map((subItem, subIndex) => {
                                    const subKey = `${key}-sub-${subIndex}`
                                    const isSubActive = pathname === subItem.href

                                    return (
                                        <motion.div
                                            key={subKey}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: subIndex * 0.05, duration: 0.2 }}
                                        >
                                            <Link
                                                href={subItem.href}
                                                onClick={(e) => {
                                                    setActiveMenus(new Set())
                                                    e.stopPropagation()
                                                }}
                                                className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-300 cursor-pointer group relative overflow-hidden
                               ${isSubActive
                                                        ? "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 font-semibold shadow-sm border border-blue-200"
                                                        : "text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900 hover:shadow-sm hover:border hover:border-gray-200"
                                                    }`}
                                            >
                                                <motion.span
                                                    className="relative z-10"
                                                    whileHover={{ x: 4 }}
                                                >
                                                    {subItem.label}
                                                </motion.span>
                                                {isSubActive && (
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                )}
                                            </Link>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )
        })
    }

    return (
        <div className="relative h-full">


            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-col gap-2 h-[calc(100vh-110px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2"
            >
                {renderMenu(categories)}

            </motion.nav>
        </div>
    )
}

export default Nav
