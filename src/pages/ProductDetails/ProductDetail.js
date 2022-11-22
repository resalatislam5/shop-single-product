import React, { useState } from 'react';
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from 'react-router-dom';


import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './ProductDetaile.css'

const ProductDetail = () => {
    const [order,setOrder] = useState(1)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const handleMinus = () =>{
        if(order === 0){
            return
        }
        const number = order - 1;
        setOrder(number)
    }
    const handlePlus = () =>{
        const number = order + 1;
        setOrder(number)
    }
    return (
        <section>
           <div className='mx-40 my-28'>
        <div className='grid grid-cols-3 gap-16'>
            <div className="col-span-2 border rounded-lg p-5">
            <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-[1000px] h-[528px] mb-10"
      >
        {
          [...Array(10)].map(e =><SwiperSlide>
            <img className="w-[400px] h-[528px] mx-auto" src="https://swiperjs.com/demos/images/nature-1.jpg" alt=""/>
          </SwiperSlide>)
        }

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          [...Array(10)].map(e =><SwiperSlide>
            <img className="w-[180px] h-[165px]" src="https://swiperjs.com/demos/images/nature-1.jpg" alt=""/>
          </SwiperSlide>)
        }
      </Swiper>
            </div>
            <div className="border border-[#E7E7E7] h-[799.95px] w-[560.43px] p-10">
                <h3 className="text-[#100707] text-4xl font-bold">Our Electirc Bikes</h3>
                <p className='text-[#100707] text-2xl font-semibold py-5'>$3,299.00</p>
                <p className="text-[#676767] text-lg">Reimagine your ride with the all-new Z1 Electric Scooter! The fully-loaded Z1 features a massive High Torque 2000W motor, features 3 different driving modes and goes up to 45mph in sport mode. Equipped with a Huge 60V 30AH Battery the Z1 Scooter is capable of an impressive 30+ mile riding range. The top-rated electric scooter is also loaded with premium safety features including rearview mirrors... <span className='text-[#EC6861]'>See More</span></p>
                <hr className='mt-6'/>
                <p className="text-[#676767] text-lg py-5 flex items-center gap-3">Share this product :
                <FaFacebook className="text-2xl" />
                <FaTwitterSquare className="text-2xl" />
                <AiFillInstagram className="text-2xl" />
                <AiFillYoutube className="text-2xl" />
                </p>
                <hr />
                <div className="text-[#100707] text-lg font-semibold py-5 flex gap-5"><p>Color: </p>
                <input type="radio" name="radio-5" className="w-6  bg-black radio focus:bg-[#000]"  />
                <input type="radio" name="radio-5" className=" w-6 radio bg-[#7D61EC] focus:bg-[#7D61EC]" />
                </div>
                <hr />
                <div className="flex justify-between mt-5 ">
                    <div className="border border-[#E7E7E7] w-[141px] h-[45px] rounded-md p-1 flex justify-between">
                        <button onClick={handleMinus} className='bg-[#E7E7E7] rounded w-[38px] text-[#676767] text-xl'>-</button>
                        <button className=''>{order}</button>
                        <button onClick={handlePlus} className='bg-[#EC6861] w-[38px] text-white text-xl rounded'>+</button>
                    </div>
                <p className="text-[#676767] text-lg flex items-center gap-2"><BsCheck2Circle /> Checklist</p>
                </div>
            <div className='mt-5'>
            <Link className="btn bg-[#EC6861] px-5 text-xl hover:bg-[#f57871] border-0 w-full" to='/'>Add To Cart</Link>
            <Link className="btn btn-outline text-[#1A2A49]  px-5 text-xl  w-full mt-5" to='/'>Schedule A Test Ride</Link>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
};

export default ProductDetail;