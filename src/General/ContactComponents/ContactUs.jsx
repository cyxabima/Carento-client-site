// ContactForm.jsx
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email.trim()) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
        if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Submit logic here (e.g., send to API)
            console.log("Form submitted:", formData);
            alert("Thank you for contacting us!");
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-4">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                        </div>

                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>

                        <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Write your message..."
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                        </div>

                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default ContactForm;
