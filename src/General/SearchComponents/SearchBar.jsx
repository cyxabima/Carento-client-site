import React from 'react'
import { Input } from '../../components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '../../components/ui/button';

function SearchBar({ setSearch, setFuel_type, setTransmission, setPrice_gt, setPrice_lt, price_lt, price_gt, searchHandler, loading }) {

    return (
        <div>
            {/* search panel */}


            <div className=' bg-white p-4 rounded-2xl shadow-2xl  py-5 flex flex-col justify-center items-center'>

                <div className='flex flex-col sm:flex-row  px-5 items-center'>
                    <Input className={"outline-1 border-2 border-primary font-bold w-[180px] md:w-[360px] mb-2"}
                        placeholder={"Toyota Corolla"}
                        onChange={(e) => setSearch(e.target.value)} />

                </div>


                {/* Filter  */}

                <div className='flex flex-col md:flex-row gap-6 w-full items-center justify-center'>

                    {/* Fuel Type */}
                    <div>

                        <label htmlFor='' >Fuel Type</label>
                        <Select onValueChange={(value) => setFuel_type(value)}>
                            <SelectTrigger className="w-[180px] border-2 border-primary font-bold">
                                <SelectValue placeholder="Fuel Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Petrol">Petrol</SelectItem>
                                <SelectItem value="Diesel">Diesel</SelectItem>
                                <SelectItem value="Electric">Electric</SelectItem>
                                <SelectItem value="Hybrid">Hybrid</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Transmission */}
                    <div>
                        <label htmlFor="">Transmission</label>
                        <Select onValueChange={(value) => setTransmission(value)}>
                            <SelectTrigger className="w-[180px] font-bold border-2 border-primary">
                                <SelectValue placeholder="Transmission" className={"font-bold"} />
                            </SelectTrigger>
                            <SelectContent >
                                <SelectItem value="Automatic">Automatic</SelectItem>
                                <SelectItem value="Manual">Manual</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* price  */}
                    <div>
                        <label htmlFor="price_gt"> Min price</label>

                        <Input className={"border-2 border-primary font-bold w-[180px] "}
                            type={"number"}
                            name={"price_gt"}
                            id={"price_gt"}
                            value={price_gt}
                            onChange={(e) => setPrice_gt(e.target.value)}
                        />
                    </div>

                    <div>

                        <label htmlFor="price_lt"> Max price</label>
                        <Input className={"border-2 border-primary font-bold w-[180px] "}
                            type={"number"}
                            name={"price_lt"}
                            id={"price_lt"}
                            value={price_lt}
                            onChange={(e) => setPrice_lt(e.target.value)}
                        />
                    </div>




                </div>
                {/* <IoSearchCircle className=' text-5xl text-primary hover:cursor-pointer' />
                 */}
                <Button className={"w-[180px] mt-5 shadow-xl hover:cursor-pointer"}
                    onClick={searchHandler}>
                    {loading ? "loading..." : "Search"}

                </Button>
            </div>
        </div>
    )
}

export default SearchBar