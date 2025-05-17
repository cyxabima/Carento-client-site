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
import UploadImage from "./UploadImage";
import useAuth from "../../Contexts/AuthContext";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function AddCarForm() {
    const [car, setCar] = useState({
        car_name: "",
        image_url: "",
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

    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const { jwtToken } = useAuth()

    // use of hook callback to increase efficiency in changing the form data
    const handleChange = useCallback((fieldName, value) => {
        setCar((prev) => ({
            ...prev,
            [fieldName]: value
        }));
    }, []);


    const uploadToCloudinary = async () => {
        if (!selectedFile) return ""
        console.log(selectedFile)

        let toUpload = new FormData()
        toUpload.append("file", selectedFile)
        toUpload.append("upload_preset", "CARENTO")
        toUpload.append("cloud_name", "dmegjcmak")
        console.log(toUpload)

        const res = await fetch("https://api.cloudinary.com/v1_1/dmegjcmak/image/upload",
            {
                method: "POST",
                body: toUpload
            }
        )

        const uploaded = await res.json()
        return uploaded.url



    }

    const validate = () => {
        for (const element of Object.values(car)) {
            if (!element?.trim()) return false
        }
        return true
    }

    // Handler to add a car in backend
    const addCar = async (e) => {
        e.preventDefault();

        setLoading(true);

        const image_url = await uploadToCloudinary();
        console.log(image_url);

        // updating car to add image value
        car.image_url = image_url


        if (!validate()) {
            toast.error("All fields are necessary")
            setLoading(false)
            return
        }

        console.log(car)


        try {
            const response = await fetch('/api/v1/vehicles/cars',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${jwtToken}`
                    },
                    body: JSON.stringify(car)
                }
            )

            if (!response.ok) {
                const errorData = await response.json().catch(() => { detail: "Error Uploading Car" })
                toast.error(errorData.detail || "Error Uploading Car")
                setLoading(false)
                return
            }

            const data = await response.json()
            console.log(data)
            toast.success("Car Added Successfully")

        } catch (error) {
            console.error("error msg", error)
            toast.error("oops Something Went Wrong")

        } finally {
            setLoading(false)
        }
    }

    return (
        <>
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

                <UploadImage selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
                <Button onClick={(e) => addCar(e)} disabled={loading ? true : false}>
                    {loading ? <AiOutlineLoading3Quarters className="animate-spin" />
                        : "Add Car"}
                </Button>
            </form>
        </>
    );
}
