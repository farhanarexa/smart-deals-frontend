import React from 'react';
import LatestProducts from './LatestProducts';

const latestProductsPromise = fetch('http://localhost:3000/latestProducts').then(r => r.json());

const Home = () => {
  return (
    <div>
     <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
    </div>
  );
};

export default Home;