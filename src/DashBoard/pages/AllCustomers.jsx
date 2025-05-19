import React from 'react'
import DashBoardTitle from '../DashBoardComponents/DashBoardTitle'

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import useAuth from '../../Contexts/AuthContext';

function AllCustomers() {
    const [loading, setLoading] = useState(true);
    const [customers, setCustomers] = useState([]);
    const { jwtToken } = useAuth()
    const headers = {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
    }
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetch(`${baseUrl}/v1/vendors/get-my-customers`, { headers })
            .then((res) => res.json())
            .then((data) => {
                // Flatten nested arrays
                const flat = data.flat().filter(entry => entry.booking.is_active);
                setCustomers(flat);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div className='bg-rose-100 p-4'>
                <DashBoardTitle title={"All Customers"} />
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading ? (
                    Array.from({ length: 3 }).map((_, i) => (
                        <Card key={i} className="p-4">
                            <Skeleton className="h-4 w-3/4 mb-2" />
                            <Skeleton className="h-4 w-1/2 mb-2" />
                            <Skeleton className="h-4 w-1/3 mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full" />
                        </Card>
                    ))
                ) : (
                    customers.map((entry, i) => (
                        <Card key={i} className="p-4">
                            <CardContent className="space-y-2">
                                <h2 className="text-lg font-semibold">
                                    {entry.customer.first_name} {entry.customer.last_name}
                                </h2>
                                <p>Email: {entry.customer.email}</p>
                                <p>Phone: {entry.customer.phone_no}</p>
                                <p>Booking ID: {entry.booking.uid}</p>
                                <p>
                                    From: {new Date(entry.booking.start_date).toLocaleString()} <br />
                                    To: {new Date(entry.booking.end_date).toLocaleString()}
                                </p>
                                <p>Total Price: Rs. {entry.booking.total_price}</p>
                                <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </>
    );
}



export default AllCustomers