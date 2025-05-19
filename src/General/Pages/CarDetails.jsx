// src/pages/CarDetailsPage.jsx
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import useAuth from '../../Contexts/AuthContext';
import { Separator } from '../../components/ui/separator';
import { Input } from '../../components/ui/input';
import StarRating from '../SearchComponents/Star';
import Comment from '../SearchComponents/Comment';
import { BookingDialog } from './BookingDialog';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const CarDetailsPage = () => {
    const { uid } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const { jwtToken } = useAuth();
    const [toggle, setToggle] = useState(false);

    const [rating, setRating] = useState(1);
    const [newComment, setNewComment] = useState("");
    const [addCommentLoading, setAddCommentLoading] = useState(false)

    const addCommentHandler = async () => {
        setAddCommentLoading(true)
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${baseUrl}/v1/reviews/create/${uid}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwtToken}`
                },
                body: JSON.stringify({
                    rating: rating,
                    review_text: newComment
                })

            }
        );


        if (!response.ok) {
            setAddCommentLoading(false)
            toast.error("Your Review is Already added!")
        }
        else {
            setAddCommentLoading(false)
            toast.success("review Added successFully")
            setToggle((pre) => !pre)
        }

    }


    useEffect(() => {
        // Replace this with your real API call
        const fetchCarDetails = async () => {
            setLoading(true);
            try {
                const baseUrl = import.meta.env.VITE_API_BASE_URL;
                const response = await fetch(`${baseUrl}/v1/vehicles/cars/${uid}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${jwtToken}`
                        },
                    }
                );

                const data = await response.json();
                setCar(data);
                console.log(data)

            } catch (err) {
                toast.error('Error fetching car data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [uid, toggle]);


    if (loading || !car) {
        return (


            <div className="p-6 h-[100vh] bg-rose-100 flex items-center justify-center  flex-col">

                <Skeleton className="h-72 w-full rounded-xl mb-4 max-w-4xl" />
                <Skeleton className="h-6 w-1/2 mb-2" />
                <Skeleton className="h-4 w-1/3 mb-2" />
                <Skeleton className="h-4 w-1/4" />

            </div>
        );
    }



    return (
        <div className="p-6  mx-auto bg-rose-100  flex justify-center">
            <Card className="rounded-2xl shadow-xl max-w-4xl">
                <img
                    src={car.image_url}
                    alt={car.car_name}
                    className="w-full  object-cover rounded-t-2xl"
                />
                <CardContent className="space-y-4 p-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">{car.car_name} ({car.model_year})</h1>
                        <Badge>{car.car_category}</Badge>
                    </div>
                    <p className="text-gray-600">Brand: <strong>{car.brand}</strong></p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                        <p><strong>Engine:</strong> {car.engine_size}</p>
                        <p><strong>Fuel Type:</strong> {car.fuel_type}</p>
                        <p><strong>Transmission:</strong> {car.transmission}</p>
                        <p><strong>Seats:</strong> {car.siting_capacity}</p>
                        <p><strong>Registration:</strong> {car.registration_no}</p>
                        <p><strong>UID:</strong> {car.uid}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-lg font-semibold text-green-600">
                            Credits {car.price_per_day} / day
                        </p>
                        <BookingDialog car_uid={car.uid} price_per_day={car.price_per_day} />
                    </div>
                </CardContent>
                <Separator />

                {/* Review Section */}

                <div className='p-6'>
                    <h1 className="text-2xl font-bold">Reviews</h1>
                    <div>
                        <label htmlFor="comment">Your Comment</label>
                        {/* Star Element*/}
                        <StarRating rating={rating} setRating={setRating} />
                        <div className='flex justify-center items-center gap-4'>
                            <Input
                                placeholder={"best car"}
                                id={"comment"} className={"my-2"}
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)} />

                            <Button
                                onClick={addCommentHandler}
                                className="float-right"
                                disabled={addCommentLoading}>

                                {addCommentLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "post"}

                            </Button>
                        </div>
                    </div>

                    {car.reviews.map((review, index) => <Comment review={review} key={index} />)}
                </div>
            </Card>

        </div>
    );
};

export default CarDetailsPage;
