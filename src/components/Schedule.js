import React from 'react';

const Schedule = () => {
    return (
        <>
            <div>
                <h1 className='text-center text-xl md:text-2xl lg:text-4xl font-bold'>Mainland Ship's Schedule</h1>
                <p className='text-center font-bold text-xs md:text-sm lg:text-xl my-6 mt-6'>Schedule for SWARAJ DWEEP</p>
                <div className="overflow-x-scroll">
                    <table className="table table-compact min-w-full">
                        <thead>
                            <tr className=' text-blue-800'>
                                <th>ID</th>
                                <th>ARRIVAL</th>
                                <th>START_DAY</th>
                                <th>PORT</th>
                                <th>DEPARTURE</th>
                                <th>END_DAY</th>
                                <th>VOY_NO</th>
                                <th>TIME (IN HRS)</th>
                                <th>REMARKS</th>
                            </tr>
                        </thead>
                        <tbody className='text-sky-600'>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                <td>Blue</td>
                                <td>1000</td>
                                <td>-</td>
                            </tr>
                            <tr className='active'>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                                <td>Purple</td>
                                <td>1000</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Carroll Group</td>
                                <td>China</td>
                                <td>8/15/2020</td>
                                <td>Red</td>
                                <td>1000</td>
                                <td>-</td>
                            </tr>
                            <tr className='active'>
                                <th>4</th>
                                <td>Marjy Ferencz</td>
                                <td>Office Assistant I</td>
                                <td>Rowe-Schoen</td>
                                <td>Russia</td>
                                <td>3/25/2021</td>
                                <td>Crimson</td>
                                <td>1000</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Yancy Tear</td>
                                <td>Community Outreach Specialist</td>
                                <td>Wyman-Ledner</td>
                                <td>Brazil</td>
                                <td>5/22/2020</td>
                                <td>Indigo</td>
                                <td>1000</td>
                                <td>-</td>
                            </tr>
                            <tr className='active'>
                                <th>6</th>
                                <td>Irma Vasilik</td>
                                <td>Editor</td>
                                <td>Wiza, Bins and Emard</td>
                                <td>Venezuela</td>
                                <td>12/8/2020</td>
                                <td>Purple</td>
                                <td>1000</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h1 className='text-center font-bold text-xs md:text-sm lg:text-xl my-6 mt-6'>Schedule for SINDHU</h1>
                <div className="overflow-x-scroll">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr className=' text-blue-800'>
                                <th>ID</th>
                                <th>ARRIVAL</th>
                                <th>START_DAY</th>
                                <th>PORT</th>
                                <th>DEPARTURE</th>
                                <th>END_DAY</th>
                                <th>VOY_NO</th>
                                <th>TIME (IN HRS)</th>
                                <th>REMARKS</th>
                            </tr>
                        </thead>
                        <tbody className='text-sky-600'>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                <td>Blue</td>
                                <td>1000</td>
                                <td>-</td>
                            </tr>
                            <tr className='active'>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                                <td>Purple</td>
                                <td>1000</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Carroll Group</td>
                                <td>China</td>
                                <td>8/15/2020</td>
                                <td>Red</td>
                                <td>1000</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className='text-sm my-6'>This is a tentative scailing programme subject to change at short notice.The Directorate of Shipping Services will not bear any responsibility what so ever (if any) due to any change in the programme

                    Advance reservation of passenger tickets for the above sailings will commence from 27.02.2023 onwards at STARS Ticketing Counters</p>
            </div>
        </>
    );
};

export default Schedule;