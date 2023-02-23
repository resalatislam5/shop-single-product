import React from 'react';
import { Link } from 'react-router-dom';

const Customized = () => {
    return (
        <div className='2xl:mx-60 mx-5 my-28'>
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className="flex flex-col lg:justify-center lg:items-start items-center mb-4">
                    <span className='text-[#676767] lg:text-2xl text-lg'>Z1 Fat Tire Scooter</span>
                    <p className='text-[#100707] lg:text-3xl text-xl'>Designed To Be Customized</p>
                </div>
                <div className="">
                    <p className='text-[#676767] lg:text-xl text-lg'>More than 330 accessory combinations means your In-City Wheels can be uniquely yours. Compatible with our full suite of racks and platforms, and with a payload capacity that invites passengers to your ride, you can accessorize to your heart's content to truly expand the bike's functionality.</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                <div className="flex justify-center py-5 col-span-2">
                <iframe width="560" height="400" src="https://www.youtube.com/embed/WFtpwZZf3bQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="flex flex-col lg:items-start items-center">
                    <div className="grid grid-cols-2 gap-5 py-5">
                        <div className="">
                            <p className='text-[#EC6861] text-4xl font-bold'>200W</p>
                            <span className='text-[#676767] text-lg'>Toque Motor</span>
                        </div>
                        <div className="">
                            <p className='text-[#EC6861] text-4xl font-bold'>45mph</p>
                            <span className='text-[#676767] text-lg'>Up To</span>
                        </div>
                        <div className="">
                            <p className='text-[#EC6861] text-4xl font-bold'>60V 30AH</p>
                            <span className='text-[#676767] text-lg'>Huge Batter</span>
                        </div>
                        <div className="">
                            <p className='text-[#EC6861] text-4xl font-bold'>30+</p>
                            <span className='text-[#676767] text-lg'>Miles Of Range</span>
                        </div>
                        <div className="">
                            <p className='text-[#EC6861] text-4xl font-bold'>LED</p>
                            <span className='text-[#676767] text-lg'>Responsive Display</span>
                        </div>
                        <div className="">
                            <p className='text-[#EC6861] text-4xl font-bold'>Charging</p>
                            <span className='text-[#676767] text-lg'>Phone Mount</span>
                        </div>
                    </div>
                    <p className='text-[#100707] lg:text-xl text-lg font-bold'>Have questions?</p>
                    <p className='text-[#676767] lg:text-xl text-lg'>Our world-class Customer Experience team is here to answer all of your questions and make your buying experience rad.</p>
                    <Link className="btn bg-[#EC6861] px-5 my-2 text-xl hover:bg-[#f57871] border-0 w-full" to='/'>Add To Cart</Link>
                </div>
            </div>

        </div>
    );
};

export default Customized;