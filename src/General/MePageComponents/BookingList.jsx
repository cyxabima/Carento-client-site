import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Button } from '../../components/ui/button'
import useAuth from '../../Contexts/AuthContext';
import { toast } from 'sonner';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function BookingList({ activeBookings, inactiveBookings, setTrigger }) {
    const { jwtToken } = useAuth()

    const [loading, setLoading] = useState(false);

    const carReturnHandler = async (booking_uid) => {
        setLoading(true)
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        try {
            const res = await fetch(`${baseUrl}/v1/booking/delete/${booking_uid}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                    "Content-Type": "application/json",
                }
            })
            const data = res.json()

            if (res.ok) {
                toast.success("Returned SuccessFully ")
                setLoading(false)
                setTrigger((pre) => !pre)
            }
            else {
                toast.error(data.detail)
                setLoading(false)
            }
        } catch (error) {
            toast.error("Deletion failed")
            setLoading(false)
        } finally {
            setLoading(false)
        }

    }

    if (activeBookings.length === 0 && inactiveBookings.length === 0) {
        return null; // Or a message like "No bookings yet."
    }

    return (
        <>
            {activeBookings.length > 0 && (
                <Card className="px-5 py-10">
                    <h2 className="text-xl font-bold">Active Bookings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeBookings.map((booking) => (
                            <Card key={booking.uid}>
                                <CardContent className="p-4 space-y-2">
                                    <img
                                        src={booking.car.image_url}
                                        alt={booking.car.car_name}
                                        className="rounded w-full "
                                    />
                                    <h4 className="text-lg font-bold">
                                        {booking.car.car_name} ({booking.car.brand})
                                    </h4>
                                    <p>
                                        {booking.car.model_year} • {booking.car.transmission}
                                    </p>
                                    <p>Start: {format(new Date(booking.start_date), "PPP p")}</p>
                                    <p>End: {format(new Date(booking.end_date), "PPP p")}</p>
                                    <p>Price per Day: Rs {booking.car.price_per_day}</p>

                                    <Button className={"hover:cursor-pointer"} onClick={() => carReturnHandler(booking.uid)}
                                        disabled={loading}>
                                        {
                                            loading ? <AiOutlineLoading3Quarters className='text-center animate-spin' /> : "Return"
                                        }

                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Card>
            )}

            {inactiveBookings.length > 0 && (
                <div className="bg-white px-5 py-10 rounded-2xl">
                    <h2 className="text-xl font-bold">Inactive Bookings</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Car</TableHead>
                                <TableHead>Start Date</TableHead>
                                <TableHead>End Date</TableHead>
                                <TableHead>Price/Day</TableHead>
                                <TableHead>Total Price</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {inactiveBookings.map((booking) => (
                                <TableRow key={booking.uid}>
                                    <TableCell>{booking.car.car_name}</TableCell>
                                    <TableCell>{format(new Date(booking.start_date), "PPP p")}</TableCell>
                                    <TableCell>{format(new Date(booking.end_date), "PPP p")}</TableCell>
                                    <TableCell>{booking.car.price_per_day}</TableCell>
                                    <TableCell>{booking.total_price}</TableCell>
                                    <TableCell>Inactive</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </>
    );
}


export default BookingList