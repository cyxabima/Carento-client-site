import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import React from 'react'

function WhyCarento() {
    return (
        <div className='p-8 bg-rose-100'>
            <h2 className='text-4xl text-black block font-bold text-center'>Why Carento?</h2>

            <Accordion type="single" collapsible className="mt-5 font-bold">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Your Car, Your Rules</AccordionTrigger>
                    <AccordionContent>
                        Take it back anytime. Use it when you want.
                    </AccordionContent>
                </AccordionItem>
                {/* 2nd item */}
                <AccordionItem value="item-2">
                    <AccordionTrigger>Secure Facilities</AccordionTrigger>
                    <AccordionContent>
                        Monitored parking with staff supervision.
                    </AccordionContent>
                </AccordionItem>

                {/* 3rd items */}
                <AccordionItem value="item-3">
                    <AccordionTrigger>We Handle It All</AccordionTrigger>
                    <AccordionContent>
                        From bookings to customer care, we’ve got it.
                    </AccordionContent>
                </AccordionItem>

                {/* 4th items */}
                <AccordionItem value="item-4">
                    <AccordionTrigger>Steady Passive Income</AccordionTrigger>
                    <AccordionContent>
                        Let your vehicle pay for itself.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default WhyCarento

