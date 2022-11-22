import React from 'react';
import bike from '../../assests/Rad-Runner-Ebike 1_ccexpress 1.png'
import './Home.css'
const ElectricBikes = () => {
    return (
        <section className='mx-40 my-28'>
            <div className='flex justify-between mb-12'>
                <h2 className="text-[#100707] text-4xl font-bold">Shop Electric Bikes</h2>
                <p className='text-[#EC6861] text-lg'>View all</p>
            </div>
            <div className='grid grid-cols-4'>
                {
                    [...Array(4)].map(e => <div  className='w-[400px] h-[448px] hover:h-[512px] hover:bg-white hover:shadow-lg p-4 bg-[#F9F9F9] rounded-xl Electric'>
                        <div className='mb-10 mt-7'>
                            <img src={bike} alt="" />
                        </div>
                        <div>
                            <h3 className="text-[#100707] font-bold text-2xl">In City Wheels Electric Bike</h3>
                            <p className='text-[#676767] font-semibold text-lg'>$1,499.00</p>
                            <button className="btn bg-[#1A2A49] w-full mt-6 hidden Electric-btn">Add to card</button>
                        </div>
                        
                    </div>)
                }
            </div>
        </section>
    );
};

export default ElectricBikes;