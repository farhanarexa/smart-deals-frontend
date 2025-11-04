import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {
    const { _id, title, image, price_min, price_max } = product;

    return (
        <div
            key={_id}
            className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
        >
            {/* Image */}
            <div className="bg-gray-300 h-48 w-full">
                {image ? (
                    <img src={image} alt={title} className="h-full w-full object-cover" />
                ) : null}
            </div>

            {/* Card body */}
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-medium text-gray-900 line-clamp-2">
                        {title}
                    </h3>

                    {/* Price range */}
                    <div className="mt-2 flex items-center gap-2">
                        <span className="font-semibold text-purple-700">
                            ${price_min} - ${price_max}
                        </span>
                    </div>
                </div>

                {/* Button */}
                <Link to={`/productDetails/${_id}`} className="mt-4 w-full btn bg-transparent text-[#632EE3] border-2 border-[#9F62F2] hover:text-white hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] px-7 transition-all">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default Product;