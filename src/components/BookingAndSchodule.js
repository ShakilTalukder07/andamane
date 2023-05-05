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
                            <div className="card w-full h-[250px] shadow-xl image-full">
                                <figure><img src={mainland} className='w-full' alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="text-3xl text-center my-16">Midland Freight</h2>

                                </div>
                            </div>
                            <div className="card w-full h-[250px] shadow-xl image-full">
                                <figure><img src={inland} className='w-full' alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h2 className="text-3xl text-center my-16">Inland Freight</h2>

                                </div>
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