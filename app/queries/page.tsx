import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Clock, CheckCircle } from "lucide-react";

export default function QueriesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Queries</h1>
                <p className="text-gray-600">Manage your support tickets and inquiries</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-muted-foreground">
                            Awaiting response
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Resolved</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground">
                            This month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg Response</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2.5h</div>
                        <p className="text-xs text-muted-foreground">
                            Response time
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Submit New Query</CardTitle>
                        <CardDescription>Create a new support ticket</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Category</label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Select Category</option>
                                <option>Cashback Issues</option>
                                <option>Account Problems</option>
                                <option>Payment Issues</option>
                                <option>Technical Support</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Priority</label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                                <option>Urgent</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Subject</label>
                            <input
                                type="text"
                                placeholder="Brief description of your issue"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Description</label>
                            <textarea
                                placeholder="Please provide detailed information about your issue..."
                                rows={4}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Attachments</label>
                            <input
                                type="file"
                                multiple
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <Button className="w-full flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Submit Query
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Queries</CardTitle>
                        <CardDescription>Your latest support tickets</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                {
                                    id: "QRY001",
                                    subject: "Missing cashback from Amazon purchase",
                                    category: "Cashback Issues",
                                    date: "Dec 12, 2024",
                                    status: "Open",
                                    priority: "High"
                                },
                                {
                                    id: "QRY002",
                                    subject: "Account verification issue",
                                    category: "Account Problems",
                                    date: "Dec 10, 2024",
                                    status: "Resolved",
                                    priority: "Medium"
                                },
                                {
                                    id: "QRY003",
                                    subject: "Payment method not working",
                                    category: "Payment Issues",
                                    date: "Dec 8, 2024",
                                    status: "In Progress",
                                    priority: "High"
                                },
                            ].map((query) => (
                                <div key={query.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${query.status === "Resolved" ? "bg-green-100" :
                                            query.status === "Open" ? "bg-red-100" : "bg-yellow-100"
                                            }`}>
                                            <MessageCircle className={`w-5 h-5 ${query.status === "Resolved" ? "text-green-600" :
                                                query.status === "Open" ? "text-red-600" : "text-yellow-600"
                                                }`} />
                                        </div>
                                        <div>
                                            <p className="font-medium">{query.subject}</p>
                                            <p className="text-sm text-gray-500">{query.category}</p>
                                            <p className="text-xs text-gray-400">#{query.id} • {query.date}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant={
                                            query.status === "Resolved" ? "default" :
                                                query.status === "Open" ? "destructive" : "secondary"
                                        }>
                                            {query.status}
                                        </Badge>
                                        <p className="text-xs text-gray-500 mt-1">{query.priority} Priority</p>
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
