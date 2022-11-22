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
            <div className='absolute top-1/3 ml-[5%]'>
            <h2 className="text-7xl">Get to Know Us</h2>
                    <p className='py-5 text-[#E7E7E7]'>Pellentesque habitant morbi tristique senectus et <br /> netus et malesuada fames ac turpis egestas.</p>
                <div className="">
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