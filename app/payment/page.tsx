import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Banknote, Smartphone } from "lucide-react";

export default function PaymentPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment</h1>
                <p className="text-gray-600">Manage your payment methods and transactions</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Payment Methods</CardTitle>
                        <CardDescription>Your saved payment options</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-4">
                                <CreditCard className="w-8 h-8 text-blue-600" />
                                <div>
                                    <p className="font-medium">Credit Card</p>
                                    <p className="text-sm text-gray-500">**** **** **** 1234</p>
                                </div>
                            </div>
                            <Badge variant="default">Primary</Badge>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-4">
                                <Wallet className="w-8 h-8 text-green-600" />
                                <div>
                                    <p className="font-medium">UPI</p>
                                    <p className="text-sm text-gray-500">user@paytm</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm">Set Primary</Button>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-4">
                                <Banknote className="w-8 h-8 text-purple-600" />
                                <div>
                                    <p className="font-medium">Net Banking</p>
                                    <p className="text-sm text-gray-500">HDFC Bank</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm">Set Primary</Button>
                        </div>

                        <Button className="w-full" variant="outline">
                            + Add New Payment Method
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Common payment tasks</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button className="w-full justify-start" variant="outline">
                            <Smartphone className="w-4 h-4 mr-2" />
                            Pay with UPI
                        </Button>
                        <Button className="w-full justify-start" variant="outline">
                            <CreditCard className="w-4 h-4 mr-2" />
                            Pay with Card
                        </Button>
                        <Button className="w-full justify-start" variant="outline">
                            <Wallet className="w-4 h-4 mr-2" />
                            Wallet Balance
                        </Button>
                        <Button className="w-full justify-start" variant="outline">
                            <Banknote className="w-4 h-4 mr-2" />
                            Bank Transfer
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your latest payment activities</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[
                            { description: "Cashback Credit", amount: "+₹45", date: "Dec 15, 2024", method: "UPI" },
                            { description: "Store Purchase", amount: "-₹1,250", date: "Dec 14, 2024", method: "Card" },
                            { description: "Wallet Top-up", amount: "+₹500", date: "Dec 13, 2024", method: "Net Banking" },
                            { description: "Cashback Credit", amount: "+₹32", date: "Dec 12, 2024", method: "UPI" },
                        ].map((transaction, index) => (
                            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                                <div>
                                    <p className="font-medium">{transaction.description}</p>
                                    <p className="text-sm text-gray-500">{transaction.date} • {transaction.method}</p>
                                </div>
                                <p className={`font-bold ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                    {transaction.amount}
                                </p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
