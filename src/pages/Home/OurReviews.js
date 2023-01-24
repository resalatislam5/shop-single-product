import React from 'react';
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import CommonButton from '../../Components/Button/CommonButton';
const OurReviews = () => {
    return (
        <section className='2xl:mx-40 lg:mx-20 mx-5 my-28'>
            <div className=' mb-12 text-center'>
                <h2 className="text-[#100707] text-4xl font-bold">Our Reviews</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-16 md:gap-10 gap-5'>
                {
                    [...Array(3)].map(e => <div  className='2xl:w-[509px] w-80 xl:w-[19rem] 2xl:h-[236px] hover:shadow-lg p-9 pr-24 rounded-xl Electric shadow-xl mx-auto'>
                        <div>
                            <p className="text-[#100707] text-lg">"This bike allows me to have so much freedom in my life, allowing me to go further on my bike than I ever dreamed."</p>
                            <div className='py-5 flex text-[#FFA800] gap-4'>
                                <AiTwotoneStar className='w-5 h-5' />
                                <AiTwotoneStar className='w-5 h-5' />
                                <AiTwotoneStar className='w-5 h-5' />
                                <AiTwotoneStar className='w-5 h-5' />
                                <AiTwotoneStar className='w-5 h-5' />
                            </div>
                            <p className='text-[#676767] font-semibold text-base'>Melissa Walters - <span className='text-[#100707]'>In City Wheels</span></p>
                        </div>
                        
                    </div>)
                }
            </div>
            <div className='mt-10 text-center'>
            <Link to='/'><CommonButton text={'Read The Reviews'} /></Link>
            </div>
        </section>
    );
};

export default OurReviews;