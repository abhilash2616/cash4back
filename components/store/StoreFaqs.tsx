import React from 'react'

interface FAQ {
    question: string;
    answer: string;
}

interface StoreFaqsProps {
    faqs: FAQ[];
    title?: string;
}

const StoreFaqs: React.FC<StoreFaqsProps> = ({
    faqs,
    title = "Frequently Asked Questions"
}) => {
    // Don't render if no FAQs
    if (!faqs || faqs.length === 0) {
        return null;
    }

    return (
        <div className="bg-white rounded-[20px] shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Q. {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            A. {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StoreFaqs