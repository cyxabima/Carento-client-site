// AddCarForm.tsx
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

export default function AddCarForm() {
    return (
        <form className="grid gap-4 p-4  mx-auto bg-white shadow-xl rounded-xl">
            {addCarFormSchema.map((field) => {
                const IconComponent = FaIcons[field.icon];

                return (
                    <div key={field.name} className="flex flex-col gap-1">
                        <label htmlFor={field.name} className="flex items-center gap-2 font-medium">
                            <IconComponent className="text-gray-500" />
                            {field.label}
                        </label>

                        {field.type === "input" && field.inputType !== "textarea" && (
                            <Input
                                type={field.inputType}
                                name={field.name}
                                id={field.name}
                                placeholder={field.label}
                                required
                            />
                        )}

                        {field.type === "input" && field.inputType === "textarea" && (
                            <Textarea
                                name={field.name}
                                id={field.name}
                                placeholder={field.label}
                            />
                        )}

                        {field.type === "select" && (
                            <Select>
                                <SelectTrigger id={field.name}>
                                    <SelectValue placeholder={field.label} />
                                </SelectTrigger>
                                <SelectContent>
                                    {field.options?.map((option) => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    </div>

                );
            })}
            <Button>Add Car</Button>
        </form>
    );
}
