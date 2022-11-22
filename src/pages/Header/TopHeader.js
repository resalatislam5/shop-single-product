import React from 'react';
import { FaMapMarkerAlt,FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube } from "react-icons/fa";
import './Header.css'
const TopHeader = () => {
    return (
        <div className='bg-[#EC6861] px-16 text-white py-3 flex justify-between'>
            <div className='flex gap-4 top-header-line'>
                <p><span><FaMapMarkerAlt className='inline-block mr-2 w-6' /></span>4314 elm st. dallas, tx 75226</p>
                <p><span><FaPhoneAlt className='inline-block mx-2 w-6' /></span>214-817-7168</p>
            </div>
            <div className='flex gap-4 text-2xl'>
                <Link  to='/'><FaFacebook /></Link>
                <Link to='/'><FaTwitter /></Link>
                <Link to='/'><FaInstagram /></Link>
                <Link to='/'><FaYoutube /></Link>
            </div>
        </div>
    );
};

export default TopHeader;