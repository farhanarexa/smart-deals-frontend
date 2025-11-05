import React, { useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router';

const ProductDetails = () => {
    const product = useLoaderData();
    const navigate = useNavigate();

    const bidModalRef = useRef(null);

    const handleBidModalOpen = () => {
        bidModalRef.current.showModal();
    };

    console.log(product);
    return (
        <div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
                {/* Product details */}
                <div className='flex flex-col-reverse md:flex-row gap-8'>
                    {/* left side */}
                    <div className='md:w-1/2 w-full'>
                        <div>
                            <img src={product.image} alt="" className='w-full rounded-xl' />
                        </div>
                        <div className="p-4 bg-white mt-5 rounded-xl">
                            <h2 className="text-2xl font-bold mb-2">Product Description</h2>

                            <div className='flex flex-col sm:flex-row justify-between border-b pb-2 gap-2'>
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

                    {/* right side */}
                    <div className='md:w-1/2 w-full'>
                        <h2 className='text-3xl font-bold mb-4'>{product.title}</h2>
                        <div className='bg-white shadow-md rounded-xl p-4 text-xl mb-3'>
                            <div className='font-bold text-[#4CAF50] pb-2'>
                                <span className="font-semibold text-purple-700">Price:</span> ${product.price_min} - ${product.price_max}
                            </div>
                            <p className='text-[#969A9D] text-base'>Price starts from </p>
                        </div>

                        <div className='bg-white shadow-md rounded-xl p-4 mb-3'>
                            <h3 className='text-xl font-bold mb-2'>Product Details</h3>
                            <p className='text-sm mb-1'><span className='font-bold'>Product ID: </span>{product._id}</p>
                            <p className='text-sm'><span className='font-bold'>Posted: </span> {product.created_at}</p>
                        </div>

                        <div className='bg-white shadow-md rounded-xl p-4 text-xl mb-3'>
                            <h3 className='text-xl font-bold mb-2'>Seller Information</h3>
                            <p className='text-sm mb-2'><span className='font-bold'>Name: </span>{product.seller_name}</p>
                            <p className='text-sm mb-2'><span className='font-bold'>Email: </span>{product.email}</p>
                            <p className='text-sm mb-2'><span className='font-bold'>Location: </span>{product.location}</p>
                            <p className='text-sm mb-2'><span className='font-bold'>Contact: </span>{product.seller_contact}</p>
                            <p className='text-sm mb-1'><span className='font-bold'>Status: </span><span className='bg-[#FFC107] px-3 py-1 rounded-full'>{product.status}</span></p>
                        </div>

                        <button onClick={handleBidModalOpen} className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-7 text-white border-none hover:opacity-90 transition-all mt-5 w-full'>I Want To Buy This Product</button>

                        <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box p-6">
                                <h3 className="font-bold text-xl text-center mb-6 text-purple-700">Give Seller The Best Offer</h3>

                                <form className="space-y-5">
                                    {/* Buyer Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Buyer Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="input input-bordered w-full h-11 rounded-lg"
                                        />
                                    </div>

                                    {/* Buyer Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Buyer Email</label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="input input-bordered w-full h-11 rounded-lg"
                                        />
                                    </div>

                                    {/* Buyer Image URL */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Buyer Image URL</label>
                                        <input
                                            type="url"
                                            placeholder="https://...your_img_url"
                                            className="input input-bordered w-full h-11 rounded-lg"
                                        />
                                    </div>

                                    {/* Place your Price */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Place your Price</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Artisan Roasters"
                                            className="input input-bordered w-full h-11 rounded-lg"
                                        />
                                    </div>

                                    {/* Contact Info */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Info</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. +1-555-1234"
                                            className="input input-bordered w-full h-11 rounded-lg"
                                        />
                                    </div>

                                    {/* Footer: Buttons + Date */}
                                    <div className="flex items-center justify-between mt-8">
                                        <p className="text-xs text-gray-500">Posted: 10/19/2024</p>

                                        <div className="modal-action flex gap-3">
                                            <form method="dialog">
                                                <button className="btn btn-sm rounded-lg bg-transparent text-[#632EE3] border-2 border-[#9F62F2] hover:text-white hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] px-3 transition-all">Cancel</button>
                                            </form>
                                            <button className="btn btn-sm rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-3 text-white border-none hover:opacity-90 transition-all">
                                                Submit Bid
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </dialog>

                        <button onClick={() => navigate(-1)} className='flex gap-2 items-center btn bg-transparent text-[#632EE3] border-2 border-[#9F62F2] hover:text-white hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] px-7 transition-all mt-5 w-full'><FaArrowLeft /> Back To Products</button>
                    </div>
                </div>

                {/* bids for products */}
                <div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;