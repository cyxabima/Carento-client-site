// Bookings.jsx
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import useAuth from "../../Contexts/AuthContext";
import DashBoardTitle from "../DashBoardComponents/DashBoardTitle";
import { Button } from "../../components/ui/button";
import generatePDF from "./downloadBooking";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [wallet, setWallet] = useState(null);
    const [loading, setLoading] = useState(true);
    const { jwtToken } = useAuth();
    const headers = {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
    };
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookingRes = await fetch(`${baseUrl}/v1/booking/get_vendor_bookings`, { headers });
                const walletRes = await fetch(`${baseUrl}/v1/wallet/vendor_wallet`, { headers });

                const bookingsData = await bookingRes.json();
                const walletData = await walletRes.json();

                setBookings(bookingsData);
                setWallet(walletData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const activeBookings = bookings.filter((b) => b.is_active);
    const historyBookings = bookings.filter((b) => !b.is_active);

    const renderTable = (data) => (
        <div className="w-full overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
                <Table className="min-w-[900px]">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Car</TableHead>
                            <TableHead>Start Date</TableHead>
                            <TableHead>End Date</TableHead>
                            <TableHead>Total Price</TableHead>
                            <TableHead>Registration No</TableHead>
                            <TableHead>Transmission</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((b) => (
                            <TableRow key={b.uid}>
                                <TableCell className="flex items-center gap-2">
                                    <img src={b.car.image_url} alt={b.car.car_name} className="w-14 h-10 rounded object-cover" />
                                    <span>{b.car.car_name}</span>
                                </TableCell>
                                <TableCell>{new Date(b.start_date).toLocaleString()}</TableCell>
                                <TableCell>{new Date(b.end_date).toLocaleString()}</TableCell>
                                <TableCell>PKR {b.total_price.toLocaleString()}</TableCell>
                                <TableCell>{b.car.registration_no}</TableCell>
                                <TableCell>{b.car.transmission}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );

    return (
        <div className="p-6 space-y-6 min-h-[100vh] bg-rose-100">
            <DashBoardTitle title={"Bookings Details"} className={"sm:text-left"}/>

            {loading ? (
                <Skeleton className="h-10 w-64" />
            ) : wallet ? (
                <Card>
                    <CardContent className="p-4">
                        <p className="text-lg font-medium">
                            Wallet Balance: <span className="text-green-600 font-semibold">PKR {wallet.current_balance.toLocaleString()}</span>
                        </p>
                    </CardContent>
                </Card>
            ) : null}

            <div className="bg-white p-4 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold mb-2">Active Bookings</h2>
                {loading ? <Skeleton className="h-40 w-full" /> : activeBookings.length > 0 ? renderTable(activeBookings) : <p>No active bookings.</p>}
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold mt-6 mb-2">Booking History</h2>
                {loading ? <Skeleton className="h-40 w-full" /> : historyBookings.length > 0 ? renderTable(historyBookings) : <p>No past bookings.</p>}
            </div>

            {loading ? "" : <Button className={"hover:cursor-pointer"} onClick={() => generatePDF(bookings)}> Download Booking Details</Button>}
        </div>
    );
};

export default Bookings;
