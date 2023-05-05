import React from 'react';
import Schedule from './Schedule';

const BookingAndSchedule = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">

                    <div className='w-full md:w-1/2 lg:w-1/2'>
                        <div>

                            <div className="card w-96 glass">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Life hack</h2>
                                    <p>How to park your car at your garage?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Learn now!</button>
                                    </div>
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