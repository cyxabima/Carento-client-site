import jsPDF from "jspdf";
import "jspdf-autotable";

// Convert image URL to Base64
const getBase64ImageFromUrl = async (imageUrl) => {
    const res = await fetch(imageUrl);
    const blob = await res.blob();

    const imageBitmap = await createImageBitmap(blob);
    const canvas = document.createElement("canvas");
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(imageBitmap, 0, 0);

    return canvas.toDataURL("image/jpeg", 1.0);
};

const generatePDF = async (bookings) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Vendor Booking Report", 14, 20);

    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 28);

    let currentY = 35;
    for (let i = 0; i < bookings.length; i++) {
        const b = bookings[i];

        const base64Image = await getBase64ImageFromUrl(b.car.image_url);
        doc.addImage(base64Image, "JPEG", 14, currentY, 40, 30);

        // Add 'BOOKED' badge if active
        if (b.is_active) {
            // Red "BOOKED" badge
            const badgeX = 150;
            const badgeY = currentY;
            const badgeWidth = 40;
            const badgeHeight = 10;

            doc.setFillColor(220, 38, 38); // red
            doc.roundedRect(badgeX, badgeY, badgeWidth, badgeHeight, 2, 2, 'F');
            doc.setTextColor(255, 255, 255); // white
            doc.setFontSize(10);
            doc.text("BOOKED", badgeX + 8, badgeY + 7);
        } else {
            // Green "AVAILABLE" badge
            const badgeX = 150;
            const badgeY = currentY;
            const badgeWidth = 45;
            const badgeHeight = 10;

            doc.setFillColor(34, 197, 94); // green
            doc.roundedRect(badgeX, badgeY, badgeWidth, badgeHeight, 2, 2, 'F');
            doc.setTextColor(255, 255, 255); // white
            doc.setFontSize(10);
            doc.text("AVAILABLE", badgeX + 5, badgeY + 7);
        }


        doc.setFontSize(10);
        doc.setTextColor(0);
        doc.text(`Car Name: ${b.car.car_name}`, 58, currentY + 5);
        doc.text(`Reg No: ${b.car.registration_no}`, 58, currentY + 12);
        doc.text(`Price: ${b.total_price} PKR`, 58, currentY + 19);
        doc.text(`Start: ${new Date(b.start_date).toLocaleDateString()}`, 58, currentY + 26);
        doc.text(`End: ${new Date(b.end_date).toLocaleDateString()}`, 58, currentY + 33);

        currentY += 45;

        if (currentY > 260 && i < bookings.length - 1) {
            doc.addPage();
            currentY = 20;
        }
    }

    doc.save("vendor_bookings_with_images.pdf");
};

export default generatePDF
