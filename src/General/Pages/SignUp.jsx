import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function SignupPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [customerData, setCustomerData] = useState({
        email: "",
        password: "",
        phone_no: "",
        first_name: "",
        last_name: "",
    });
    const [vendorData, setVendorData] = useState({
        email: "",
        password: "",
        phone_no: "",
        first_name: "",
        last_name: "",
        business_name: "",
        is_business: false,
    });

    const handleCustomerSignup = async () => {
        setLoading(true)
        const response = await fetch("/foo/api/v1/customers/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customerData),
        });
        if (response.ok) {
            navigate("/login");
        } else if (response.status == 400) {
            toast.error("Customer Already Exits")
            setLoading(false)

        }
        else {
            toast.error("Sign Up failed")
            setLoading(false)
        }
    };

    const handleVendorSignup = async () => {
        setLoading(true)
        const response = await fetch("/foo/api/v1/vendors/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(vendorData),
        });
        if (response.ok) {
            navigate("/login");
        }
        else if (response.status == 400) {
            toast.error("Vendor Already Exits")
            setLoading(false)

        }
        else {
            toast.error("Sign Up failed")
            setLoading(false)
        }
    };

    return (
        <div className="bg-rose-100 p-12">

            <div className="max-w-md mx-auto rounded-xl bg-white p-12 shadow-2xl">
                <h1 className="text-2xl font-bold mb-4 text-center">Sign Up for new  account</h1>
                <Tabs defaultValue="customer" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="customer">Customer</TabsTrigger>
                        <TabsTrigger value="vendor">Vendor</TabsTrigger>
                    </TabsList>

                    <TabsContent value="customer">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleCustomerSignup();
                            }}
                            className="space-y-4 mt-4"
                        >
                            <Input
                                placeholder="Email"
                                type="email"
                                value={customerData.email}
                                onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                                required
                            />
                            <Input
                                placeholder="Password"
                                type="password"
                                value={customerData.password}
                                onChange={(e) => setCustomerData({ ...customerData, password: e.target.value })}
                                required
                            />
                            <Input
                                placeholder="Phone Number"
                                type="tel"
                                value={customerData.phone_no}
                                onChange={(e) => setCustomerData({ ...customerData, phone_no: e.target.value })}
                                required
                            />
                            <Input
                                placeholder="First Name"
                                value={customerData.first_name}
                                onChange={(e) => setCustomerData({ ...customerData, first_name: e.target.value })}
                                required
                            />
                            <Input
                                placeholder="Last Name"
                                value={customerData.last_name}
                                onChange={(e) => setCustomerData({ ...customerData, last_name: e.target.value })}
                                required
                            />
                            <Button type="submit" className="w-full">
                                {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Sign Up as Customers"}
                            </Button>
                        </form>
                    </TabsContent>

                    <TabsContent value="vendor">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleVendorSignup();
                            }}
                            className="space-y-4 mt-4"
                        >
                            <Input
                                placeholder="Email"
                                type="email"
                                value={vendorData.email}
                                onChange={(e) => setVendorData({ ...vendorData, email: e.target.value })}
                                required
                            />
                            <Input
                                placeholder="Password"
                                type="password"
                                value={vendorData.password}
                                onChange={(e) => setVendorData({ ...vendorData, password: e.target.value })}
                                required
                            />
                            <Input
                                placeholder="Phone Number"
                                type="tel"
                                value={vendorData.phone_no}
                                onChange={(e) => setVendorData({ ...vendorData, phone_no: e.target.value })}
                                required
                            />
                            <Input
                                placeholder="First Name"
                                value={vendorData.first_name || ""}
                                onChange={(e) => setVendorData({ ...vendorData, first_name: e.target.value })}
                                required
                            />
                            <Input
                                placeholder="Last Name"
                                value={vendorData.last_name || ""}
                                onChange={(e) => setVendorData({ ...vendorData, last_name: e.target.value })}
                                required
                            />
                            <Input
                                placeholder="Business Name"
                                value={vendorData.business_name || ""}
                                onChange={(e) => setVendorData({ ...vendorData, business_name: e.target.value })}
                                required
                            />
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={vendorData.is_business}
                                    onChange={(e) => setVendorData({ ...vendorData, is_business: e.target.checked })}
                                />
                                <span>Are you a business?</span>
                            </label>
                            <Button type="submit" className="w-full">
                                {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Sign Up as Vendor"}
                            </Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
