import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { FaPen } from "react-icons/fa";
import { AiOutlineLike,AiFillLike,AiFillDislike,AiOutlineDislike } from "react-icons/ai";
import { BsShareFill,BsFillCalendarFill } from "react-icons/bs";
import { useState } from 'react';

const CommentSection = () => {
    const [review, setReview] = useState(false)
    const [newRating, setNewRating] = useState()
    const ratingChanged = (newRating) => {
        setNewRating(newRating);
      };
      const ratingFixed = {
        size: 30,
        value: 2.5,
        edit: false
      };
      console.log(Boolean(newRating))
    return (
        <div className='bg-[#F9F9F9]'>
            <div className="2xl:mx-64 mx-5 py-28">
                <h2 className="text-[#100707] text-3xl text-center font-bold">See What People Are Saying About the In-City Wheels</h2>
                 <div className="flex justify-between pt-10 ">
                    <div className='flex items-center gap-3'>
                        <p className='text-[#100707] text-2xl font-bold'>4.8</p>
                        <ReactStars {...ratingFixed} />
                        <p className='text-[#676767] text-lg'>(<span>2749</span> Reviews)</p>
                    </div>
                    <button className='border w-40 rounded-lg flex items-center gap-2 p-3' onClick={() => setReview(!review)}><FaPen />Write A Review</button>
                 </div>
                 <div className='flex justify-end'>
                    {
                        review && 
                        <div>
                        <p className='text-lg font-semibold pb-0'>Please set your rating</p>
                            <ReactStars 
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                            {
                                newRating ? 
                                <>
                                 <p className='text-lg font-semibold mt-2'>Please write your review</p>
                                 <textarea placeholder="Bio" className="textarea textarea-bordered  w-96 max-w-xl disabled" ></textarea>
                                </>
                                :
                                <>
                                 <p className='text-lg font-semibold mt-2'>Please write your review</p>
                                 <textarea className="textarea" placeholder="Bio" disabled></textarea>
                                </>
                            }
                            <button className="btn bg-[#EC6861] text-xl hover:bg-[#f57871] border-0 w-96 block" to='/'>Submit</button>
                        </div>
                    }
                 </div>
                 <div className='mt-5'>
                 {[...Array(9)].map(e =><div>
                    <div className='rounded-2xl overflow-hidden py-5'>
                        <div className='flex gap-5'>
                            <div className="avatar online">
                                <div className="w-[60px] rounded-full">
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt=''/>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p>Ali kha</p>
                                <ReactStars
                                    count={5}
                                    value={2}
                                    edit={false}
                                    size={20}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-[#100707] text-2xl font-semibold'>Love my bike! I have</h3>
                            <p className='text-[#100707] text-lg'>Love my bike! I have bad knees and the best thing about it that I didn't expect is how easy the handle throttle makes getting on the bike! Wonderful! I am riding much more frequently than before when I had a regular bike.</p>
                            <div className='flex justify-between mx-5'>
                                <div className='flex gap-5 mt-3'>
                                    <p className="flex items-center gap-3"><BsShareFill /> Share</p>
                                    <p className="flex items-center gap-3"><BsFillCalendarFill /> 25 Feb, 2021</p>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <p className="hidden sm:flex">Was This Review Helpful?</p>
                                    <p className="flex items-center gap-1"><AiOutlineLike /> <span>3</span></p>
                                    <p className="flex items-center gap-1"><AiOutlineDislike /> <span>3</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>)}
                    <div className='flex justify-center mt-5'>
                        <button className="btn bg-[#1A2A49] text-xl hover:bg-[#f57871] border-0 w-60 block " to='/'>Load More</button>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default CommentSection;