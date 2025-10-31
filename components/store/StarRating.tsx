"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Star } from 'lucide-react';

interface StarRatingProps {
    storeName: string;
    onRatingSubmit?: (rating: number, review?: string) => void;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
    storeName,
    onRatingSubmit,
    open,
    onOpenChange
}) => {
    const [selectedRating, setSelectedRating] = useState(0);
    const [review, setReview] = useState('');

    // Reset form when dialog closes
    useEffect(() => {
        if (!open) {
            setSelectedRating(0);
            setReview('');
        }
    }, [open]);

    const handleStarClick = (rating: number) => {
        setSelectedRating(rating);
    };

    const handleSubmit = () => {
        if (onRatingSubmit) {
            onRatingSubmit(selectedRating, review);
        }
        onOpenChange(false);
    };

    const handleCancel = () => {
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-gray-900 text-center">
                        Rate {storeName}
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                    <div className="text-center">
                        <p className="text-gray-600 mb-4">How would you rate your experience with {storeName}?</p>
                        <div className="flex justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => handleStarClick(star)}
                                    className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                                >
                                    <Star
                                        className={`w-full h-full transition-colors duration-200 ${star <= selectedRating
                                            ? 'text-yellow-400 fill-yellow-400'
                                            : 'text-gray-300 hover:text-yellow-400'
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                        {selectedRating > 0 && (
                            <p className="text-sm text-gray-500 mt-2">
                                You selected {selectedRating} star{selectedRating > 1 ? 's' : ''}
                            </p>
                        )}
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your Review (Optional)
                            </label>
                            <textarea
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                rows={3}
                                placeholder="Share your experience..."
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={handleSubmit}
                                disabled={selectedRating === 0}
                                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                            >
                                Submit Rating
                            </button>
                            <button
                                onClick={handleCancel}
                                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default StarRating;
