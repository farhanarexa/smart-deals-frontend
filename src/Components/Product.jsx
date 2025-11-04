import React from 'react';

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
          <img src={image} alt={title} className="w-full h-full object-cover" />
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
        <button className="mt-4 w-full rounded-md border border-purple-600 py-2 text-purple-600 font-medium hover:bg-purple-600 hover:text-white transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Product;