import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, Clock, CheckCircle, XCircle } from "lucide-react";

export default function MissingCashbackPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Missing Cashback</h1>
                <p className="text-gray-600">Report and track missing cashback claims</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Claims</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">
                            Awaiting verification
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Resolved</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">
                            This month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
                        <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">₹450</div>
                        <p className="text-xs text-muted-foreground">
                            In pending claims
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Report Missing Cashback</CardTitle>
                        <CardDescription>Submit a claim for missing cashback</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Store Name</label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Select Store</option>
                                <option>Amazon</option>
                                <option>Flipkart</option>
                                <option>Myntra</option>
                                <option>Nykaa</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Order ID</label>
                            <input
                                type="text"
                                placeholder="Enter order ID"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Expected Cashback Amount</label>
                            <input
                                type="number"
                                placeholder="₹0"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Purchase Date</label>
                            <input
                                type="date"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Description</label>
                            <textarea
                                placeholder="Describe the issue..."
                                rows={3}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <Button className="w-full">Submit Claim</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Claims</CardTitle>
                        <CardDescription>Your latest missing cashback claims</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                {
                                    store: "Amazon",
                                    amount: "₹45",
                                    date: "Dec 10, 2024",
                                    status: "Under Review",
                                    orderId: "AMZ123456"
                                },
                                {
                                    store: "Flipkart",
                                    amount: "₹32",
                                    date: "Dec 8, 2024",
                                    status: "Resolved",
                                    orderId: "FLP789012"
                                },
                                {
                                    store: "Myntra",
                                    amount: "₹28",
                                    date: "Dec 5, 2024",
                                    status: "Rejected",
                                    orderId: "MYN345678"
                                },
                            ].map((claim, index) => (
                                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${claim.status === "Resolved" ? "bg-green-100" :
                                                claim.status === "Under Review" ? "bg-yellow-100" : "bg-red-100"
                                            }`}>
                                            {claim.status === "Resolved" ? <CheckCircle className="w-5 h-5 text-green-600" /> :
                                                claim.status === "Under Review" ? <Clock className="w-5 h-5 text-yellow-600" /> :
                                                    <XCircle className="w-5 h-5 text-red-600" />}
                                        </div>
                                        <div>
                                            <p className="font-medium">{claim.store}</p>
                                            <p className="text-sm text-gray-500">Order: {claim.orderId}</p>
                                            <p className="text-xs text-gray-400">{claim.date}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-green-600">₹{claim.amount}</p>
                                        <Badge variant={
                                            claim.status === "Resolved" ? "default" :
                                                claim.status === "Under Review" ? "secondary" : "destructive"
                                        }>
                                            {claim.status}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
