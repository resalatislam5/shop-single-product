import React from 'react';
import image from '../../assests/banner.png'
const Electric_Adventure = () => {
    return (
        <div className='2xl:mx-40 mx-5 my-28'>
            <h1 className='text-[#100707] text-3xl text-center font-bold'>Electric Adventure For <br /> The Conscious Commuter</h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 my-4">
                <img className='w-full rounded-2xl' src={image} alt="" />
                <img className='w-full rounded-2xl' src={image} alt="" />
            </div>
        </div>
    );
};

export default Electric_Adventure;