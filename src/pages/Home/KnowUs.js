import React from 'react';
import { Link } from 'react-router-dom';
import KnowUS from '../../assests/KnowUs.png'
import affirm from '../../assests/affirm.png'
import CommonButton from '../../Components/Button/CommonButton';
const KnowUs = () => {
    return (
        <div className='text-white relative'>
            <div className='w-full'>
            <img className='' src={KnowUS} alt="banner" />
            </div>
            <div className='absolute 2xl:top-1/3  sm:top-[20%] top-[10%] pl-[5%] container'>
            <h2 className="lg:text-7xl sm:text-4xl text-2xl">Get to Know Us</h2>
                    <p className='lg:py-5 py-2 text-[#E7E7E7] w-4/6 lg:w-full text-sm md:text-2xl'>Pellentesque habitant morbi tristique senectus et <br className='hidden lg:flex' /> netus et malesuada fames ac turpis egestas.</p>
                <div className="hidden md:flex">
                <Link to='/'><CommonButton text={'Shop Now'} /></Link>
                </div>
            </div>
            <div className="absolute top-1/3 ml-[75%]">
                <img src={affirm} alt="" />
            </div>
        </div>
    );
};

export default KnowUs;