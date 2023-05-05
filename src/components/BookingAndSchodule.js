import React from 'react';
import Schedule from './Schedule';
import mainland from '../assets/ship_images/mainland.jpg';
import inland from '../assets/ship_images/inland.jpg';

const BookingAndSchedule = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full md:w-1/2 lg:w-1/2 h-full'>
                        <div className='flex flex-col gap-4'>
                            <div className=" w-2/3 h-[250px] shadow-xl image-full"
                                style={{
                                    background: `url(${mainland})`,
                                    backgroundSize: 'cover'
                                }}>
                                <h1 className='font-bold text-2xl text-white text-center my-28'>Mainland Freight</h1>
                            </div>
                            <div className=" w-2/3 h-[250px] shadow-xl image-full"
                                style={{
                                    background: `url(${inland})`,
                                    backgroundSize: 'cover'
                                }}>
                                <h1 className='font-bold text-2xl text-white text-center my-28'>Inland Freight</h1>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 lg:w-1/2 h-full'>
                        <Schedule></Schedule>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingAndSchedule;