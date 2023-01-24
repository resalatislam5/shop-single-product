import React from 'react';
import freeShipping from '../../../assests/Free-Shipping.png'
import best from '../../../assests/Best.png'
import Payment from '../../../assests/Payment.png'
import support from '../../../assests/Support.png'
const BannerSupport = () => {
    return (
        <section className='xl:px-28 px-5 py-16 bg-[#F9F9F9]'>
            <div className="flex flex-wrap justify-between text-[#100707] text-2xl font-semibold">
                <div className="flex items-center">
                    <img className='w-28 h-28' src={freeShipping} alt="" />
                    <p>Free Shipping</p>
                </div>
                <div className="flex items-center">
                    <img className='w-28 h-28' src={best} alt="" />
                    <p>Best Electric Bike</p>
                </div>
                <div className="flex items-center">
                    <img className='w-28 h-28' src={Payment} alt="" />
                    <p>Easy Payment</p>
                </div>
                <div className="flex items-center">
                    <img className='w-28 h-28' src={support} alt="" />
                    <p>24/7 Support</p>
                </div>
            </div>
        </section>
    );
};

export default BannerSupport;