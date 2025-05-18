import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import useAuth from "../../Contexts/AuthContext";
import BookingList from "../MePageComponents/BookingList";
import WalletCard from "../MePageComponents/WalletCard";
import UserProfileCard from "../MePageComponents/UserProfileCard";




function MePage() {
    const { jwtToken } = useAuth();
    const [customer, setCustomer] = useState(null);
    const [wallet, setWallet] = useState(null);
    const [bookings, setBookings] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchWithAuth = async (url, options = {}) => {
        const res = await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${jwtToken}`,
                "Content-Type": "application/json",
            },
        });
        return res.json();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [customerData, walletData, bookingData] = await Promise.all([
                    fetchWithAuth("/api/v1/customers/me"),
                    fetchWithAuth("/api/v1/wallet/my-wallet"),
                    fetchWithAuth("/api/v1/booking/get_customer_bookings"),
                ]);

                setCustomer(customerData);
                setWallet(walletData);
                setBookings(bookingData);
            } catch (error) {
                toast.error("Failed to load data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [jwtToken]);

    const [amount, setAmount] = useState(0);
    const [walletLoading, setWalletLoading] = useState(false);

    const handleAddAmount = async () => {

        setWalletLoading(true)

        try {

            const res = await fetchWithAuth("/api/v1/wallet/add-in-wallet", {

                method: "PATCH",

                body: JSON.stringify({ "credit": amount }),

            });

            toast.success(res.message);

            const new_res = await fetchWithAuth("/api/v1/wallet/my-wallet")

            setWalletLoading(false)

            setWallet(new_res)

        } catch (error) {

            toast.error("Failed to add amount");

        }

    };



    if (loading) {
        return (
            <div className="p-6 space-y-6 bg-rose-100">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-64 w-full" />
            </div>
        );
    }

    const activeBookings = bookings?.filter(b => b.is_active) || [];
    const inactiveBookings = bookings?.filter(b => !b.is_active) || [];

    return (
        <div className="p-6 space-y-6 bg-rose-100">
            {customer && <UserProfileCard customer={customer} />}
            {wallet && <WalletCard wallet={wallet} amount={amount} setAmount={setAmount} setWallet={setWallet} walletLoading={walletLoading} handleAddAmount={handleAddAmount} />}
            {bookings && <BookingList activeBookings={activeBookings} inactiveBookings={inactiveBookings} />}
        </div>
    );
}

export default MePage