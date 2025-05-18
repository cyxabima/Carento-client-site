import React from 'react'
import { Card, CardContent } from "@/components/ui/card";

function UserProfileCard({ customer }) {
    return (
        <Card>
            <CardContent className="p-4">
                <h2 className="text-xl font-bold">Welcome, {customer?.first_name} {customer?.last_name}</h2>
                <p>Email: {customer?.email}</p>
                <p>Phone: {customer?.phone_no}</p>
            </CardContent>
        </Card>
    );
}



export default UserProfileCard