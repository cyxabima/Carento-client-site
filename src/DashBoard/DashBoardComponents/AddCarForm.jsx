import {
    Input
} from "@/components/ui/input";
import {
    Select, SelectTrigger, SelectValue, SelectContent, SelectItem
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addCarFormSchema } from "../../Schemas/addCarFormSchema";

// Import icons
import * as FaIcons from "react-icons/fa";
import { Button } from "../../components/ui/button";
import { useCallback, useState } from "react";

export default function AddCarForm() {
    const [car, setCar] = useState({
        car_name: "",
        model_year: "",
        brand: "",
        car_category: "",
        price_per_day: "",
        engine_size: "",
        fuel_type: "",
        siting_capacity: "",
        registration_no: "",
        transmission: "",
        description: ""
    });

    const token = {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJyb2xlIjoiVmVuZG9yIiwianRpIjoiMTllYzBjZjktMzFhZi00ZGEyLTg4NTYtZTQ1M2IyZDJkMzA3IiwiZXhwIjoxNzQ1NjgzOTczfQ.5DfuCAnZu9yWyLwlJJzzUHN2elYrUAGDIIG1DKiddLk",
        "token_type": "bearer"
    }

    // use of hook callback to increase efficiency in changing the form data
    const handleChange = useCallback((fieldName, value) => {
        setCar((prev) => ({
            ...prev,
            [fieldName]: value
        }));
    }, []);

    // Handler to add a car in backend
    const addCar = async (e) => {
        e.preventDefault();
        // console.log(car)
        const response = await fetch('http://127.0.0.1:8000/api/v1/vehicles/cars',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token.access_token}`
                },
                body: JSON.stringify(car)
            }
        )

        const data = await response.json()
        console.log(data)
    }

    return (
        <form className="grid gap-4 p-4  mx-auto bg-white shadow-xl rounded-xl" method="none">
            {addCarFormSchema.map((field) => {
                const IconComponent = FaIcons[field.icon];

                return (
                    <div key={field.name} className="flex flex-col gap-1">
                        <label htmlFor={field.name} className="flex items-center gap-2 font-medium">
                            <IconComponent className="text-gray-500" />
                            {field.label}
                        </label>

                        {/* For Input field */}

                        {field.type === "input" && field.inputType !== "textarea" && (
                            <Input
                                type={field.inputType}
                                name={field.name}
                                id={field.name}
                                placeholder={field.label}
                                value={car[field.name] ?? ""}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                required
                            />
                        )}

                        {/* For text area field */}

                        {field.type === "input" && field.inputType === "textarea" && (
                            <Textarea
                                name={field.name}
                                id={field.name}
                                placeholder={field.label}
                                value={car[field.name] ?? ""}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                            />
                        )}

                        {/* For Select fields */}

                        {field.type === "select" && (
                            <Select
                                value={car[field.name] ?? ""}
                                onValueChange={(value) => handleChange(field.name, value)}
                            >
                                <SelectTrigger id={field.name}>
                                    <SelectValue placeholder={field.label} />
                                </SelectTrigger>
                                <SelectContent>
                                    {field.options?.map((option) => (
                                        <SelectItem key={option} value={option} >
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    </div>

                );
            })}
            <Button onClick={(e) => addCar(e)}>Add Car</Button>
        </form>
    );
}
