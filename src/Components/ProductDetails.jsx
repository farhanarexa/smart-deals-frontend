import React from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className='flex justify-center align-center px-20 mt-10'>
            {/* Product details */}
            <div className=''>
                <div className="w-1/2">
                    <div>
                        <img src={product.image} alt="" />
                    </div>
                    <div className="p-4 bg-white mt-5">
                        <h2 className="text-2xl font-bold mb-2">Product Description</h2>

                        <div className='flex justify-between border-b pb-2'>
                            <div className='font-bold'>
                                <span className="font-semibold text-purple-700">Condition:</span> {product.condition}
                            </div>
                            <div className='font-bold'>
                                <span className="font-semibold text-purple-700">Usage time:</span> {product.usage}
                            </div>
                        </div>
                        <div className='mt-5 text-[#969A9D]'>{product.description}</div>
                    </div>
                </div>
            </div>
            {/* bids for the product */}
            <div>
                <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-7 text-white border-none hover:opacity-90 transition-all'>I Want To Buy This Product</button>
            </div>
        </div>
    );
};

export default ProductDetails;