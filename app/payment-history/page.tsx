import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { History, Filter, Download, Search } from "lucide-react";

export default function PaymentHistoryPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment History</h1>
                <p className="text-gray-600">View all your payment transactions</p>
            </div>

            <div className="mb-6 flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Export
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <History className="w-5 h-5" />
                        Transaction History
                    </CardTitle>
                    <CardDescription>All your payment activities in chronological order</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[
                            {
                                id: "TXN001",
                                description: "Cashback Credit - Amazon Purchase",
                                amount: "+₹45",
                                date: "Dec 15, 2024",
                                time: "2:30 PM",
                                status: "Completed",
                                method: "UPI"
                            },
                            {
                                id: "TXN002",
                                description: "Store Purchase - Flipkart",
                                amount: "-₹1,250",
                                date: "Dec 14, 2024",
                                time: "11:45 AM",
                                status: "Completed",
                                method: "Credit Card"
                            },
                            {
                                id: "TXN003",
                                description: "Wallet Top-up",
                                amount: "+₹500",
                                date: "Dec 13, 2024",
                                time: "9:15 AM",
                                status: "Completed",
                                method: "Net Banking"
                            },
                            {
                                id: "TXN004",
                                description: "Cashback Credit - Myntra",
                                amount: "+₹28",
                                date: "Dec 12, 2024",
                                time: "6:20 PM",
                                status: "Pending",
                                method: "UPI"
                            },
                            {
                                id: "TXN005",
                                description: "Store Purchase - Nykaa",
                                amount: "-₹850",
                                date: "Dec 11, 2024",
                                time: "3:10 PM",
                                status: "Completed",
                                method: "Debit Card"
                            },
                        ].map((transaction) => (
                            <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                <div className="flex items-center space-x-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.amount.startsWith('+') ? 'bg-green-100' : 'bg-red-100'
                                        }`}>
                                        <History className={`w-5 h-5 ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                                            }`} />
                                    </div>
                                    <div>
                                        <p className="font-medium">{transaction.description}</p>
                                        <p className="text-sm text-gray-500">
                                            {transaction.date} at {transaction.time} • {transaction.method}
                                        </p>
                                        <p className="text-xs text-gray-400">Transaction ID: {transaction.id}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className={`font-bold text-lg ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {transaction.amount}
                                    </p>
                                    <Badge variant={transaction.status === "Completed" ? "default" : "secondary"}>
                                        {transaction.status}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-center">
                        <Button variant="outline">Load More Transactions</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
