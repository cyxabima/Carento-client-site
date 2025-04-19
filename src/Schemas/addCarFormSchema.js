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
        label: "Seats",
        name: "siting_capacity",
        type: "input",
        inputType: "number",
        icon: "FaChair"
    },
    {
        label: "Registration Number",
        name: "registration_no",
        type: "input",
        inputType: "text",
        icon: "FaIdCard"
    },
    {
        label: "Engine Size",
        name: "engine_size",
        type: "select",
        options: [
            "0.8L",
            "1.0L",
            "1.2L",
            "1.3L",
            "1.5L",
            "1.8L",
            "2.0L",
            "2.4L",
            "2.5L",
            "3.0L",
            "3.5L",
            "4.0L+"
        ],
        icon: "FaTachometerAlt"
    },

    {
        label: "Price Per Day (PKR)",
        name: "price_per_day",
        type: "input",
        inputType: "number",
        icon: "FaMoneyBillWave"
    },
    {
        label: "Car Category",
        name: "car_category",
        type: "select",
        options: [
            "Hatchback",
            "Sedan",
            "SUV",
            "Crossover",
            "Coupe",
            "Convertible",
            "Pickup Truck",
            "Van",
            "Wagon",
            "Sports Car",
            "Luxury"
        ],
        icon: "FaCarSide"
    }
    ,
    {
        label: "Description",
        name: "description",
        type: "input",
        inputType: "textarea",
        icon: "FaAlignLeft"
    }
];
