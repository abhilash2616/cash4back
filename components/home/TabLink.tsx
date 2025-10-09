"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const TabLink = () => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="1">
                <AccordionTrigger>Tab 1</AccordionTrigger>
                <AccordionContent>Tab 1</AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
                <AccordionTrigger>Tab 2</AccordionTrigger>
                <AccordionContent>Tab 2</AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default TabLink