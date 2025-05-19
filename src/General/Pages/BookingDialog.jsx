import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format, differenceInDays } from "date-fns";
import useAuth from "../../Contexts/AuthContext";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export function BookingDialog({ car_uid, price_per_day }) {
    const [dateRange, setDateRange] = useState(undefined);
    const [numberOfDays, setNumberOfDays] = useState(null);
    const [loading, setLoading] = useState(false)
    const { jwtToken } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (dateRange?.from && dateRange?.to) {
            const diff = differenceInDays(dateRange.to, dateRange.from)
            setNumberOfDays(diff);
        } else {
            setNumberOfDays(null);
        }
    }, [dateRange?.from, dateRange?.to]);

    const handleBooking = async (start, end) => {
        setLoading(true)
        const payload = {
            start_date: start.toISOString().split('.')[0].replace('T', ' '), // in our data base date is without time zone
            end_date: end.toISOString().split('.')[0].replace('T', ' '),
            no_of_days: numberOfDays,
        };
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const res = await fetch(`${baseUrl}/v1/booking/create/${car_uid}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            },
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            toast.success(`Booking confirmed for ${numberOfDays} days!`);
            setLoading(false)
            navigate("/me")
        } else if (res.status == 400) {
            toast.error("Car is already booked or You have less credit.");
            setLoading(false)
        }
        else {
            toast.error("Booking failed! For Unknown Reason");
            setLoading(false)

        }
        // console.log(payload)
    };

    const handleConfirm = () => {
        if (!dateRange?.from || !dateRange?.to) return toast.error("Please select both start and end dates.");
        if (numberOfDays === null || numberOfDays <= 0) return toast.error("Invalid date range selected.");
        handleBooking(dateRange.from, dateRange.to);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Book Now</Button>
            </DialogTrigger>

            <DialogContent className="max-w-md !pr-12">
                <DialogHeader>
                    <DialogTitle>Select Booking Dates</DialogTitle>
                </DialogHeader>

                <div className="grid gap-4">
                    <div className="grid grid-cols-1 gap-2">
                        <p className="text-sm font-medium">
                            {dateRange?.from && dateRange.to ? (
                                <span>
                                    {format(dateRange.from, "PPP")} - {format(dateRange.to, "PPP")} ({numberOfDays} days)
                                </span>
                            ) : (
                                <span>Select start and end dates</span>
                            )}
                        </p>
                        <Calendar
                            mode="range"
                            selected={dateRange}
                            onSelect={setDateRange}
                            numberOfMonths={1}
                        />
                    </div>
                </div>

                <DialogFooter>
                    {numberOfDays !== null && numberOfDays > 0 && (
                        <>
                            <div className="rounded-2xl text-red-800 font-bold float-right">
                                <p>Total Credits: {price_per_day * numberOfDays} </p>
                            </div>

                            <p className="mr-4 text-sm text-gray-500">
                                {numberOfDays} {numberOfDays === 1 ? "day" : "days"} selected
                            </p>
                        </>
                    )}
                    <Button onClick={handleConfirm} disabled={!dateRange?.from || !dateRange?.to || loading}>
                        {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Confirm Booking"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}