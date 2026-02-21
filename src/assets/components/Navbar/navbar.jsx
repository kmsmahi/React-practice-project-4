import React from 'react';
import logo from '../../../assets/logo.png';
const Navbar = () => {
    return (
        
            <div className="container navbar bg-base-100  flex justify-between p-6 mt-6">
  <div className="navbar-start flex items-center gap-2">
    <img className='w-[30px] h-[30px]' src={logo} alt="" />
    <a className="btn btn-ghost text-xl font-semibold">Taxi <span className='text-amber-500'>Kitchen</span></a>
  </div>
  <div className="navbar-center">
    <ul className="menu menu-horizontal px-1 flex gap-8">
      <li>
          <a className="px-5 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-all active:scale-95">
            Orders
          </a>
        </li>
      <li>
          <a className="px-5 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-all active:scale-95">
            Foods
          </a>
        </li>
      <li>
          <a className="px-5 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-all active:scale-95">
            Tables
          </a>
        </li>
      <li>
          <a className="px-5 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-all active:scale-95">
            Logout
          </a>
        </li>
      
    </ul>
  </div>
  
</div>
        
    );
};

export default Navbar;