export interface RewardsRate {
    category: string;
    rate: string;
    description: string;
    minOrderValue?: string;
    maxCashback?: string;
}

export interface RewardsRatesData {
    categories: RewardsRate[];
    generalInfo: string[];
    importantNotes: string[];
}

export const amazonRewardsData: RewardsRatesData = {
    categories: [
        {
            category: 'Electronics & Gadgets',
            rate: '2.50%',
            description: 'Mobile phones, laptops, tablets, cameras, and accessories',
            minOrderValue: '₹999',
            maxCashback: '₹500'
        },
        {
            category: 'Fashion & Apparel',
            rate: '3.00%',
            description: 'Clothing, shoes, bags, and fashion accessories',
            minOrderValue: '₹499',
            maxCashback: '₹300'
        },
        {
            category: 'Home & Kitchen',
            rate: '2.00%',
            description: 'Home appliances, kitchen tools, and furniture',
            minOrderValue: '₹799',
            maxCashback: '₹400'
        },
        {
            category: 'Beauty & Personal Care',
            rate: '4.00%',
            description: 'Skincare, makeup, hair care, and wellness products',
            minOrderValue: '₹299',
            maxCashback: '₹200'
        },
        {
            category: 'Books & Media',
            rate: '5.00%',
            description: 'Books, movies, music, and educational materials',
            minOrderValue: '₹199',
            maxCashback: '₹150'
        },
        {
            category: 'Sports & Fitness',
            rate: '3.50%',
            description: 'Sports equipment, fitness gear, and outdoor activities',
            minOrderValue: '₹599',
            maxCashback: '₹350'
        },
        {
            category: 'Grocery & Daily Needs',
            rate: '1.50%',
            description: 'Food items, household essentials, and daily necessities',
            minOrderValue: '₹399',
            maxCashback: '₹100'
        }
    ],
    generalInfo: [
        'Rewards are calculated on the net amount after discounts and offers',
        'Cashback is credited within 30 days of order confirmation',
        'Prime membership benefits are separate from cashback rewards',
        'Amazon Pay balance purchases are eligible for cashback',
        'GST and other charges are excluded from cashback calculation'
    ],
    importantNotes: [
        'Maximum cashback limits apply per category as mentioned above',
        'Cashback is not applicable on gift cards and digital products',
        'Returns and cancellations will result in cashback reversal',
        'One account per person/household is allowed',
        'Fraudulent activities will result in account termination'
    ]
};

export const flipkartRewardsData: RewardsRatesData = {
    categories: [
        {
            category: 'Electronics & Mobiles',
            rate: '2.00%',
            description: 'Smartphones, laptops, tablets, and electronic accessories',
            minOrderValue: '₹999',
            maxCashback: '₹400'
        },
        {
            category: 'Fashion & Lifestyle',
            rate: '3.50%',
            description: 'Clothing, footwear, bags, and lifestyle products',
            minOrderValue: '₹399',
            maxCashback: '₹250'
        },
        {
            category: 'Home & Furniture',
            rate: '1.50%',
            description: 'Home appliances, furniture, and home decor',
            minOrderValue: '₹1299',
            maxCashback: '₹500'
        },
        {
            category: 'Beauty & Personal Care',
            rate: '4.50%',
            description: 'Skincare, makeup, hair care, and personal hygiene',
            minOrderValue: '₹199',
            maxCashback: '₹180'
        },
        {
            category: 'Sports & Books',
            rate: '4.00%',
            description: 'Sports equipment, books, and educational materials',
            minOrderValue: '₹299',
            maxCashback: '₹200'
        },
        {
            category: 'Grocery & Daily Needs',
            rate: '1.00%',
            description: 'Food items, household essentials, and daily necessities',
            minOrderValue: '₹499',
            maxCashback: '₹80'
        }
    ],
    generalInfo: [
        'Rewards are calculated on the net amount after discounts and offers',
        'Cashback is credited within 15 days of order confirmation',
        'Flipkart Plus membership benefits are separate from cashback rewards',
        'Flipkart Pay Later purchases are eligible for cashback',
        'GST and other charges are excluded from cashback calculation'
    ],
    importantNotes: [
        'Maximum cashback limits apply per category as mentioned above',
        'Cashback is not applicable on gift cards and digital products',
        'Returns and cancellations will result in cashback reversal',
        'One account per person/household is allowed',
        'Fraudulent activities will result in account termination'
    ]
};

export const myntraRewardsData: RewardsRatesData = {
    categories: [
        {
            category: 'Fashion & Clothing',
            rate: '6.00%',
            description: 'Men\'s and women\'s clothing, ethnic wear, and casual wear',
            minOrderValue: '₹399',
            maxCashback: '₹300'
        },
        {
            category: 'Footwear & Accessories',
            rate: '5.50%',
            description: 'Shoes, bags, watches, and fashion accessories',
            minOrderValue: '₹299',
            maxCashback: '₹250'
        },
        {
            category: 'Beauty & Personal Care',
            rate: '7.00%',
            description: 'Skincare, makeup, hair care, and wellness products',
            minOrderValue: '₹199',
            maxCashback: '₹200'
        },
        {
            category: 'Kids & Baby',
            rate: '5.00%',
            description: 'Kids clothing, baby care products, and toys',
            minOrderValue: '₹249',
            maxCashback: '₹180'
        },
        {
            category: 'Home & Lifestyle',
            rate: '3.00%',
            description: 'Home decor, lifestyle products, and gifts',
            minOrderValue: '₹499',
            maxCashback: '₹150'
        }
    ],
    generalInfo: [
        'Rewards are calculated on the net amount after discounts and offers',
        'Cashback is credited within 7 days of order confirmation',
        'Myntra Insider membership benefits are separate from cashback rewards',
        'Myntra Wallet purchases are eligible for cashback',
        'GST and other charges are excluded from cashback calculation'
    ],
    importantNotes: [
        'Maximum cashback limits apply per category as mentioned above',
        'Cashback is not applicable on gift cards and digital products',
        'Returns and cancellations will result in cashback reversal',
        'One account per person/household is allowed',
        'Fraudulent activities will result in account termination'
    ]
};

export const ajioRewardsData: RewardsRatesData = {
    categories: [
        {
            category: 'Fashion & Clothing',
            rate: '5.50%',
            description: 'Men\'s and women\'s clothing, ethnic wear, and western wear',
            minOrderValue: '₹299',
            maxCashback: '₹250'
        },
        {
            category: 'Footwear & Accessories',
            rate: '5.00%',
            description: 'Shoes, bags, jewelry, and fashion accessories',
            minOrderValue: '₹199',
            maxCashback: '₹200'
        },
        {
            category: 'Beauty & Personal Care',
            rate: '6.50%',
            description: 'Skincare, makeup, hair care, and personal hygiene',
            minOrderValue: '₹149',
            maxCashback: '₹150'
        },
        {
            category: 'Kids & Baby',
            rate: '4.50%',
            description: 'Kids clothing, baby care products, and accessories',
            minOrderValue: '₹199',
            maxCashback: '₹120'
        }
    ],
    generalInfo: [
        'Rewards are calculated on the net amount after discounts and offers',
        'Cashback is credited within 14 days of order confirmation',
        'Ajio membership benefits are separate from cashback rewards',
        'JioMoney purchases are eligible for cashback',
        'GST and other charges are excluded from cashback calculation'
    ],
    importantNotes: [
        'Maximum cashback limits apply per category as mentioned above',
        'Cashback is not applicable on gift cards and digital products',
        'Returns and cancellations will result in cashback reversal',
        'One account per person/household is allowed',
        'Fraudulent activities will result in account termination'
    ]
};

export const relianceDigitalRewardsData: RewardsRatesData = {
    categories: [
        {
            category: 'Electronics & Gadgets',
            rate: '2.00%',
            description: 'Mobile phones, laptops, tablets, and electronic accessories',
            minOrderValue: '₹1999',
            maxCashback: '₹800'
        },
        {
            category: 'Home Appliances',
            rate: '1.50%',
            description: 'Refrigerators, washing machines, ACs, and kitchen appliances',
            minOrderValue: '₹4999',
            maxCashback: '₹1000'
        },
        {
            category: 'Gaming & Entertainment',
            rate: '2.50%',
            description: 'Gaming consoles, accessories, and entertainment devices',
            minOrderValue: '₹999',
            maxCashback: '₹400'
        },
        {
            category: 'Fashion & Lifestyle',
            rate: '3.00%',
            description: 'Clothing, accessories, and lifestyle products',
            minOrderValue: '₹599',
            maxCashback: '₹200'
        }
    ],
    generalInfo: [
        'Rewards are calculated on the net amount after discounts and offers',
        'Cashback is credited within 21 days of order confirmation',
        'Reliance Digital membership benefits are separate from cashback rewards',
        'JioMoney purchases are eligible for cashback',
        'GST and other charges are excluded from cashback calculation'
    ],
    importantNotes: [
        'Maximum cashback limits apply per category as mentioned above',
        'Cashback is not applicable on gift cards and digital products',
        'Returns and cancellations will result in cashback reversal',
        'One account per person/household is allowed',
        'Fraudulent activities will result in account termination'
    ]
};

export const nykaaRewardsData: RewardsRatesData = {
    categories: [
        {
            category: 'Beauty & Personal Care',
            rate: '6.00%',
            description: 'Skincare, makeup, hair care, and personal hygiene products',
            minOrderValue: '₹199',
            maxCashback: '₹300'
        },
        {
            category: 'Fashion & Accessories',
            rate: '4.50%',
            description: 'Clothing, jewelry, bags, and fashion accessories',
            minOrderValue: '₹399',
            maxCashback: '₹200'
        },
        {
            category: 'Wellness & Health',
            rate: '5.50%',
            description: 'Health supplements, wellness products, and fitness items',
            minOrderValue: '₹299',
            maxCashback: '₹250'
        },
        {
            category: 'Kids & Baby Care',
            rate: '4.00%',
            description: 'Kids personal care, baby products, and accessories',
            minOrderValue: '₹249',
            maxCashback: '₹150'
        }
    ],
    generalInfo: [
        'Rewards are calculated on the net amount after discounts and offers',
        'Cashback is credited within 10 days of order confirmation',
        'Nykaa membership benefits are separate from cashback rewards',
        'Nykaa Wallet purchases are eligible for cashback',
        'GST and other charges are excluded from cashback calculation'
    ],
    importantNotes: [
        'Maximum cashback limits apply per category as mentioned above',
        'Cashback is not applicable on gift cards and digital products',
        'Returns and cancellations will result in cashback reversal',
        'One account per person/household is allowed',
        'Fraudulent activities will result in account termination'
    ]
};

export const firstcryRewardsData: RewardsRatesData = {
    categories: [
        {
            category: 'Baby Care & Essentials',
            rate: '7.00%',
            description: 'Diapers, baby food, feeding accessories, and baby care products',
            minOrderValue: '₹299',
            maxCashback: '₹350'
        },
        {
            category: 'Kids Clothing & Fashion',
            rate: '6.50%',
            description: 'Kids clothing, shoes, and fashion accessories',
            minOrderValue: '₹199',
            maxCashback: '₹250'
        },
        {
            category: 'Toys & Games',
            rate: '5.50%',
            description: 'Educational toys, games, and learning materials',
            minOrderValue: '₹399',
            maxCashback: '₹200'
        },
        {
            category: 'Books & Learning',
            rate: '6.00%',
            description: 'Children\'s books, educational materials, and school supplies',
            minOrderValue: '₹149',
            maxCashback: '₹150'
        },
        {
            category: 'Maternity & Nursing',
            rate: '5.00%',
            description: 'Maternity wear, nursing products, and pregnancy essentials',
            minOrderValue: '₹299',
            maxCashback: '₹180'
        }
    ],
    generalInfo: [
        'Rewards are calculated on the net amount after discounts and offers',
        'Cashback is credited within 14 days of order confirmation',
        'FirstCry membership benefits are separate from cashback rewards',
        'FirstCry Wallet purchases are eligible for cashback',
        'GST and other charges are excluded from cashback calculation'
    ],
    importantNotes: [
        'Maximum cashback limits apply per category as mentioned above',
        'Cashback is not applicable on gift cards and digital products',
        'Returns and cancellations will result in cashback reversal',
        'One account per person/household is allowed',
        'Fraudulent activities will result in account termination'
    ]
};

// All rewards rates data mapping
export const allRewardsRatesData: { [key: string]: RewardsRatesData } = {
    'Amazon': amazonRewardsData,
    'Flipkart': flipkartRewardsData,
    'Myntra': myntraRewardsData,
    'Ajio': ajioRewardsData,
    'Reliance Digital': relianceDigitalRewardsData,
    'Nykaa': nykaaRewardsData,
    'FirstCry': firstcryRewardsData,
};

// Function to get rewards rates data for a brand
export const getRewardsRatesData = (brandName: string): RewardsRatesData => {
    return allRewardsRatesData[brandName] || allRewardsRatesData['Amazon'];
};
