import React from 'react';
import bambooka from '../assets/ship_images/bambooka.png';
import seaLink from "../assets/ship_images/seaLink.png";
import nautica from "../assets/ship_images/nautica.png";
import greenOcean from "../assets/ship_images/greenOcean.png";
import mejistic from "../assets/ship_images/majectic.png";
import makkruzGold from "../assets/ship_images/makkruzGold.png";

const Ferries = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-10'>Inter-Island Ferries</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 place-items-center'>
                <div className="card card-compact w-96 shadow-xl">
                    <figure>
                        <img src={bambooka} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold font-serif">Bambooka</h2>
                        <p>Updated 3 minutes ago</p>
                    </div>
                </div>
                <div className="card card-compact w-96 shadow-xl">
                    <figure>
                        <img src={seaLink} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold font-serif">Sea Link Cruise</h2>
                        <p>Updated 3 minutes ago</p>
                    </div>
                </div>
                <div className="card card-compact w-96 shadow-xl">
                    <figure>
                        <img src={nautica} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold font-serif">Nautica</h2>
                        <p>Updated 3 minutes ago</p>
                    </div>
                </div>
                <div className="card card-compact w-96 shadow-xl">
                    <figure>
                        <img src={greenOcean} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold font-serif">Green Ocean</h2>
                        <p>Updated 3 minutes ago</p>
                    </div>
                </div>
                <div className="card card-compact w-96 shadow-xl">
                    <figure>
                        <img src={mejistic} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold font-serif">ITT Mejhistic</h2>
                        <p>Updated 3 minutes ago</p>
                    </div>
                </div>
                <div className="card card-compact w-96 shadow-xl">
                    <figure>
                        <img src={makkruzGold} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold font-serif">Markkuz Gold</h2>
                        <p>Updated 3 minutes ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ferries;