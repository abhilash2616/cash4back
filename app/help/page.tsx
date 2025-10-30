"use client";

import { useState } from "react";
import HeaderText from "@/components/common/HeaderText";
import AutoBreadcrumb from "@/components/common/AutoBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    HelpCircle,
    Search,
    MessageCircle,
    Phone,
    Mail,
    ChevronDown,
    ChevronRight
} from "lucide-react";

const HelpPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

    const faqs = [
        {
            id: "faq-1",
            question: "How does cashback work?",
            answer: "Cashback is a percentage of your purchase amount that gets credited to your CashKaro wallet. When you shop through our partner stores, you earn cashback which can be withdrawn to your bank account."
        },
        {
            id: "faq-2",
            question: "How long does it take to receive cashback?",
            answer: "Cashback is typically credited within 7-10 business days after your order is confirmed and delivered. Some stores may take longer depending on their return policy."
        },
        {
            id: "faq-3",
            question: "What is the minimum withdrawal amount?",
            answer: "The minimum withdrawal amount is ₹100. You can withdraw your cashback to any bank account registered with your CashKaro account."
        },
        {
            id: "faq-4",
            question: "How do I track my orders?",
            answer: "You can track your orders in the 'My Orders' section. We also send email notifications when your order status changes."
        },
        {
            id: "faq-5",
            question: "What if I don't receive my cashback?",
            answer: "If you don't receive your cashback within the expected timeframe, please contact our support team with your order details. We'll investigate and resolve the issue."
        },
        {
            id: "faq-6",
            question: "Can I earn cashback on all purchases?",
            answer: "Cashback is available on most purchases made through our partner stores. However, some categories like gift cards, digital products, or certain promotional items may not be eligible for cashback."
        }
    ];

    const contactMethods = [
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "Live Chat",
            description: "Get instant help from our support team",
            action: "Start Chat",
            available: "Available 24/7"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone Support",
            description: "Speak directly with our support team",
            action: "Call Now",
            available: "Mon-Fri, 9 AM - 6 PM"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Support",
            description: "Send us your query and we'll respond within 24 hours",
            action: "Send Email",
            available: "Response within 24 hours"
        }
    ];

    const toggleFaq = (faqId: string) => {
        setExpandedFaq(expandedFaq === faqId ? null : faqId);
    };

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb Navigation */}
            <AutoBreadcrumb className="mb-6" />

            <HeaderText heading="Help & Support" textalign="text-left" />

            <div className="mt-8">
                {/* Search Section */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <Search className="w-6 h-6 text-gray-500" />
                            <Input
                                placeholder="Search for help articles, FAQs, or topics..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {contactMethods.map((method, index) => (
                        <Card key={index} className="text-center">
                            <CardContent className="p-6">
                                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                    {method.icon}
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                                <p className="text-gray-600 mb-4">{method.description}</p>
                                <Button className="w-full mb-2">{method.action}</Button>
                                <p className="text-sm text-gray-500">{method.available}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Quick Help Topics */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Quick Help Topics</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Button variant="outline" className="h-auto p-4 justify-start">
                                <div className="text-left">
                                    <div className="font-medium">Getting Started</div>
                                    <div className="text-sm text-gray-600">Learn how to use CashKaro</div>
                                </div>
                            </Button>
                            <Button variant="outline" className="h-auto p-4 justify-start">
                                <div className="text-left">
                                    <div className="font-medium">Cashback Issues</div>
                                    <div className="text-sm text-gray-600">Troubleshoot cashback problems</div>
                                </div>
                            </Button>
                            <Button variant="outline" className="h-auto p-4 justify-start">
                                <div className="text-left">
                                    <div className="font-medium">Account Settings</div>
                                    <div className="text-sm text-gray-600">Manage your account</div>
                                </div>
                            </Button>
                            <Button variant="outline" className="h-auto p-4 justify-start">
                                <div className="text-left">
                                    <div className="font-medium">Payment Issues</div>
                                    <div className="text-sm text-gray-600">Resolve payment problems</div>
                                </div>
                            </Button>
                            <Button variant="outline" className="h-auto p-4 justify-start">
                                <div className="text-left">
                                    <div className="font-medium">Store Support</div>
                                    <div className="text-sm text-gray-600">Get help with partner stores</div>
                                </div>
                            </Button>
                            <Button variant="outline" className="h-auto p-4 justify-start">
                                <div className="text-left">
                                    <div className="font-medium">Technical Issues</div>
                                    <div className="text-sm text-gray-600">Fix technical problems</div>
                                </div>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <HelpCircle className="w-5 h-5" />
                            Frequently Asked Questions
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {filteredFaqs.map((faq) => (
                                <div key={faq.id} className="border rounded-lg">
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50"
                                    >
                                        <span className="font-medium">{faq.question}</span>
                                        {expandedFaq === faq.id ? (
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronRight className="w-5 h-5 text-gray-500" />
                                        )}
                                    </button>
                                    {expandedFaq === faq.id && (
                                        <div className="px-4 pb-4 text-gray-600">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {filteredFaqs.length === 0 && searchQuery && (
                            <div className="text-center py-8">
                                <p className="text-gray-500">No FAQs found matching your search.</p>
                                <Button
                                    variant="outline"
                                    onClick={() => setSearchQuery("")}
                                    className="mt-4"
                                >
                                    Clear Search
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default HelpPage;
