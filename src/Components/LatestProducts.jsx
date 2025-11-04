import { Link } from 'react-router';
import Product from './Product';
import { use } from 'react';

const LatestProducts = ({ latestProductsPromise }) => {

  const products = use(latestProductsPromise);
  console.log(products);

  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Recent <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Products</span> </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          products.map(product => <Product key={product._id} product={product} />)
        }
      </div>
    </div>
  );
};

export default LatestProducts;