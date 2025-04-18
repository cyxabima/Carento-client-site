// formSchema.ts
export const addCarFormSchema = [
    {
        label: "Car Name",
        name: "car_name",
        type: "input",
        inputType: "text",
        icon: "FaCar"
    },
    {
        label: "Brand",
        name: "brand",
        type: "input",
        inputType: "text",
        icon: "FaTrademark"
    },
    {
        label: "Model Year",
        name: "model_year",
        type: "input",
        inputType: "number",
        icon: "FaCalendarAlt"
    },
    {
        label: "Transmission",
        name: "transmission",
        type: "select",
        options: ["Manual", "Automatic"],
        icon: "FaCogs"
    },
    {
        label: "Fuel Type",
        name: "fuel_type",
        type: "select",
        options: ["Petrol", "Diesel", "Electric", "Hybrid"],
        icon: "FaGasPump"
    },
    {
        label: "Color",
        name: "color",
        type: "input",
        inputType: "text",
        icon: "FaPalette"
    },
    {
        label: "Seats",
        name: "seats",
        type: "input",
        inputType: "number",
        icon: "FaChair"
    },
    {
        label: "Registration Number",
        name: "registration_number",
        type: "input",
        inputType: "text",
        icon: "FaIdCard"
    },
    {
        label: "Price Per Day (PKR)",
        name: "price_per_day",
        type: "input",
        inputType: "number",
        icon: "FaMoneyBillWave"
    },
    {
        label: "AC Available",
        name: "ac",
        type: "select",
        options: ["Yes", "No"],
        icon: "FaSnowflake"
    },
    {
        label: "Description",
        name: "description",
        type: "input",
        inputType: "textarea",
        icon: "FaAlignLeft"
    }
];
