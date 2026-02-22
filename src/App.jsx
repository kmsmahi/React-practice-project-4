import React, { Suspense } from 'react';
import Navbar from './assets/components/Navbar/navbar';
import Banner from './assets/components/Banner/banner';
import Orders from './assets/components/Orders/orders';

const loadData=async()=>{
  const result=await fetch('/orders.json');
  return result.json();
}

const App = () => {
  const fetchpromise=loadData();
  return (
    <div>
      <Navbar></Navbar>
      <Banner>Kitchen Room</Banner>
      <Suspense fallback={<div className='flex justify-center items-center mt-10'><span className="loading loading-spinner loading-lg"></span></div>}>
        <Orders fetchpromise={fetchpromise}></Orders>
      </Suspense>
    </div>
  );
};

export default App;