import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";

function UploadImage({ selectedFile, setSelectedFile }) {

    const [image, setImage] = useState([])

    // function to take image 
    const onFileSelected = (e) => {
        const file = e.target.files[0];
        setImage([file])
        setSelectedFile(file)
        // console.log(file)
        // console.log(selectedFile)

    }


    // function to remove image 
    const resetImage = () => {
        setSelectedFile(null)
        setImage([])
    }

    return (
        <div>

            <h2 className='flex items-center gap-2 font-medium'>Upload Image</h2>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>

                {/* Image  display image will display only when in selected file array contain something */}

                {image.map((image, index) => <div key={index}>
                    <IoIosCloseCircle onClick={resetImage} />
                    <img src={URL.createObjectURL(image)} alt="" className='w-full h-[130px] object-cover' />
                </div>)}

                {/* Button to add image display */}
                {
                    image[0] ? "" :
                        <div>
                            <label htmlFor="car-img">
                                <div className="bg-rose-300 p-4 w-full h-[130px] flex items-center justify-center rounded-2xl border border-primary border-dotted">
                                    <h2 className="text-center text-2xl text-primary font-bold">+</h2>
                                </div></label>
                            <input type="file" id="car-img" className="hidden" onChange={onFileSelected} />
                        </div>
                }
            </div>
        </div>
    )
}

export default UploadImage