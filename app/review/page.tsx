import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThumbsUp, Star, MessageSquare, Send } from "lucide-react";

export default function ReviewPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Review Us</h1>
                <p className="text-gray-600">Share your experience and help us improve</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Overall Rating</CardTitle>
                        <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4.8</div>
                        <div className="flex items-center space-x-1 mt-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Based on 1,247 reviews
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Your Rating</CardTitle>
                        <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5.0</div>
                        <div className="flex items-center space-x-1 mt-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Last reviewed: Dec 10, 2024
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Reviews Written</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">
                            Reviews submitted
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Write a Review</CardTitle>
                        <CardDescription>Share your experience with Cash4Back</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Overall Rating</label>
                            <div className="flex items-center space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button key={star} className="text-2xl hover:text-yellow-400 focus:outline-none">
                                        <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Category</label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Overall Experience</option>
                                <option>Cashback Process</option>
                                <option>Customer Support</option>
                                <option>App/Website</option>
                                <option>Payment Process</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Title</label>
                            <input
                                type="text"
                                placeholder="Summarize your experience"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Review</label>
                            <textarea
                                placeholder="Tell us about your experience..."
                                rows={4}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="anonymous" className="rounded" />
                            <label htmlFor="anonymous" className="text-sm text-gray-600">
                                Submit anonymously
                            </label>
                        </div>
                        <Button className="w-full flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Submit Review
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Your Reviews</CardTitle>
                        <CardDescription>Reviews you've submitted</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Great cashback experience!",
                                    rating: 5,
                                    category: "Overall Experience",
                                    date: "Dec 10, 2024",
                                    status: "Published"
                                },
                                {
                                    title: "Fast and reliable service",
                                    rating: 5,
                                    category: "Cashback Process",
                                    date: "Nov 25, 2024",
                                    status: "Published"
                                },
                                {
                                    title: "Excellent customer support",
                                    rating: 5,
                                    category: "Customer Support",
                                    date: "Nov 15, 2024",
                                    status: "Under Review"
                                },
                            ].map((review, index) => (
                                <div key={index} className="p-4 border rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-medium">{review.title}</h3>
                                        <Badge variant={review.status === "Published" ? "default" : "secondary"}>
                                            {review.status}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <div className="flex items-center space-x-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                                    }`} />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500">{review.category}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{review.date}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>Recent Reviews</CardTitle>
                    <CardDescription>What other users are saying</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[
                            {
                                name: "Priya S.",
                                rating: 5,
                                title: "Amazing cashback rates!",
                                review: "I've been using Cash4Back for 6 months and the cashback rates are fantastic. Highly recommended!",
                                date: "Dec 14, 2024"
                            },
                            {
                                name: "Rahul K.",
                                rating: 4,
                                title: "Good service, minor issues",
                                review: "Overall great experience. Sometimes the cashback takes a bit longer to credit, but customer support is helpful.",
                                date: "Dec 12, 2024"
                            },
                            {
                                name: "Anita M.",
                                rating: 5,
                                title: "Best cashback app!",
                                review: "Love the variety of stores and the ease of use. The referral program is also great.",
                                date: "Dec 10, 2024"
                            },
                        ].map((review, index) => (
                            <div key={index} className="p-4 border rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-medium">{review.title}</h3>
                                    <div className="flex items-center space-x-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                                }`} />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{review.review}</p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span>By {review.name}</span>
                                    <span>{review.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
