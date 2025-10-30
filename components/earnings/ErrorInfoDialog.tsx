"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface ErrorInfoDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    description?: string;
    children?: ReactNode;
}

export function ErrorInfoDialog({
    open,
    onOpenChange,
    title = "Cashback Breakup",
    description = "",
    children
}: ErrorInfoDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div className="space-y-2 text-sm text-gray-600">
                    {children ?? (
                        <>
                            <p>• Cashback may take up to 72 hours to reflect after a valid purchase.</p>
                            <p>• Ensure you started your shopping trip from our app/site and completed the purchase in the same session.</p>
                            <p>• Some categories or payment methods may be excluded by the store.</p>
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ErrorInfoDialog;


