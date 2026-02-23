import React, { use, useState } from 'react';
import ThreeStates from '../States/ThreeStates';
import OrderCard from '../Card/card';
import CookingCard from '../Card/cookingCard';
import ReadyCard from '../Card/readyCard';
import { toast } from 'react-toastify';

const Orders = ({ fetchpromise }) => {
    const data = use(fetchpromise);
    const [orderStates, setOrderStates] = useState(data); 
    const [cookingItems, setCookingItems] = useState([]); 
    const [readyItems, setReadyItems] = useState([]);    
    const handleorder = (item) => {
        toast('Moved to cooking list');
        const isExist = cookingItems.find(cook => cook.id === item.id);
        if (isExist) {
            toast.error('Already in cooking list');
            return;
        }
        setCookingItems([...cookingItems, item]);
        const remainingOrder = orderStates.filter(order => order.id !== item.id);
        setOrderStates(remainingOrder);
    };
    const handleCooking = (cook) => {
        cook.cooking_time = new Date().toLocaleTimeString();
        setReadyItems([...readyItems, cook]);
        const remainingCooking = cookingItems.filter(item => item.id !== cook.id);
        setCookingItems(remainingCooking);
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-10">
           
            <ThreeStates 
                cookingTotal={cookingItems.length} 
                order={orderStates.length} 
                readytotal={readyItems.length} 
            />

            <section className='container mx-auto grid grid-cols-12 mt-4 p-4 gap-10'>
                
                <div className='col-span-7 space-y-5'>
                    <h1 className='text-2xl font-black text-slate-800 border-l-4 border-amber-500 pl-3'>
                        Current Orders
                    </h1>
                    <div className="grid grid-cols-1 gap-4">
                        {orderStates.map(item => (
                            <OrderCard 
                                handleorder={handleorder} 
                                key={item.id} 
                                item={item} 
                            />
                        ))}
                    </div>
                </div>

               
                <div className='col-span-5 space-y-8'>
                    
                    <div>
                        <h1 className='text-xl font-bold mb-4 flex items-center gap-2'>
                            <span className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></span>
                            Cookings
                        </h1>
                        <div className='p-6 rounded-2xl shadow-xl bg-white border-2 border-dotted border-amber-200 space-y-4'>
                            {cookingItems.map(cook => (
                                <CookingCard
                                    key={cook.id}
                                    cook={cook}
                                    handleCooking={handleCooking}
                                />
                            ))}
                        </div>
                    </div>

                    
                    <div>
                        <h1 className='text-xl font-bold mb-4 text-green-600'>Ready to serve</h1>
                        <div className='p-6 rounded-2xl shadow-xl bg-white border-t-8 border-green-500 space-y-4'>
                            {readyItems.map(item => (
                                <ReadyCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Orders;