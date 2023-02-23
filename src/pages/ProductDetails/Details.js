import React from 'react';
import as from '../../assests/MaskGroup.png'
const Details = () => {
    return (
        <div className='2xl:mx-40 mx-5 my-28'>
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className="flex flex-col lg:justify-center lg:items-start items-center mb-4">
                    <span className='text-[#676767] lg:text-2xl text-lg'>Z1 Fat Tire Scooter</span>
                    <p className='text-[#100707] lg:text-3xl text-xl'>Designed To Be Customized</p>
                </div>
                <div className="">
                    <p className='text-[#676767] lg:text-xl text-lg'>More than 330 accessory combinations means your In-City Wheels can be uniquely yours. Compatible with our full suite of racks and platforms, and with a payload capacity that invites passengers to your ride, you can accessorize to your heart's content to truly expand the bike's functionality.</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-6">
            {[...Array(9)].map(e =><div>
                    <div className='rounded-2xl overflow-hidden'>
                        <img className='w-full' src={as} alt="" />
                        <p className='text-[#100707] text-2xl bg-[#F2F2F2] py-3 text-center'>200W Front Motor</p>
                    </div>
            </div>)
            }
            </div>
        </div>
    );
};

export default Details;