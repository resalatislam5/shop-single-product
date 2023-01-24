import React from 'react';
import CommonButton from '../../../Components/Button/CommonButton';
import Carousel from 'react-grid-carousel'
import test from '../../../assests/Free-Shipping.png'
import rad from '../../../assests/Rad-Runner-Ebike 1_ccexpress 1.png'
const Products = () => {
    // const [products,setProducts] = useState([]);
    // useState(()=>{
    //     fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    // console.log(products)
    return (
        <section className='py-28'>
            <div className="items-center flex flex-col text-[#100707]">
                <h1 className="text-4xl mb-5 font-bold">The All Wheel Drive</h1>
                <p className="text-lg mb-7">Our premier adventure cruiser.</p>
                <CommonButton text={'Shop Now'} />
            </div>
            <div className="flex 2xl:mx-56 mx-10 py-10 flex-wrap-reverse justify-between ">
                <div className="lg:w-60 flex flex-col justify-center lg:gap-20 gap-5 order-2 lg:order-1 sm:ml-2">
                    <div className="">
                        <h3 className="text-[#EC6861] text-2xl lg:text-4xl font-semibold">AWD</h3>
                        <p className="text-[#676767] text-sm lg:text-lg font-medium">All-Wheel Drive</p>
                    </div>
                    <div className="">
                        <h3 className="text-[#EC6861] text-2xl lg:text-4xl font-semibold">32+ mph</h3>
                        <p className="text-[#676767] text-sm lg:text-lg font-medium">Top Speed</p>
                    </div>
                    <div className="">
                        <h3 className="text-[#EC6861] text-2xl lg:text-4xl font-semibold">60-70</h3>
                        <p className="text-[#676767] text-sm lg:text-lg font-medium">Mile Range</p>
                    </div>
                </div>
                <div className="lg:flex-1 order-3 lg:order-2 mx-auto">
                    <img className='lg:w-[1000px] w-80 lg:h-[750px]' src={rad} alt="" />
                </div>
                <div className="lg:w-60 flex flex-col justify-center lg:gap-20 gap-5 order-1 lg:order-3 ml-5">
                    <div className="">
                        <h3 className="text-[#EC6861] text-2xl lg:text-4xl font-semibold">2 x 750W</h3>
                        <p className="text-[#676767] text-sm lg:text-lg font-medium">Front & Rear Motor</p>
                    </div>
                    <div>
                        <h3 className="text-[#EC6861] text-2xl lg:text-4xl font-semibold">Full</h3>
                        <p className="text-[#676767] text-sm lg:text-lg font-medium">Suspension</p>
                    </div>
                    <div className="">
                        <h3 className="text-[#EC6861] text-2xl lg:text-4xl font-semibold">1008W</h3>
                        <p className="text-[#676767] text-sm lg:text-lg font-medium">Battery</p>
                    </div>
                </div>
            </div>
            <div className='xl:mx-96 mx-12'>
            <Carousel cols={5} rows={1} gap={10} loop>
                    {
                        [...Array(20)].map( im =><Carousel.Item className='lg:w-40 w-20'>
                            <img className='w-40 p-5 border rounded-lg lg:ml-6' width="100%" src={test} alt='' />
                        </Carousel.Item>)
                    }
                </Carousel>
            </div>

        </section>
    );
};

export default Products;