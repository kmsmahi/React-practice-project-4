import React, { use, useState } from 'react';
import ThreeStates from '../States/ThreeStates';
import OrderCard from '../Card/card';
import CookingCard from '../Card/cookingCard';
const Orders = ({fetchpromise}) => {
    const odrerStates=use(fetchpromise);
    console.log(odrerStates);
    const[cookingItems,setCookingItems]=useState([]);
    const handleorder=(item)=>{
        console.log(item);
        const isExist=cookingItems.find(cook=>cook.id===item.id);
        if(isExist){
            alert('Already in cooking list');
            return;
        }

        const newCookingItems=[...cookingItems,item];
        setCookingItems(newCookingItems);
    }
    return (
        <div>
            <ThreeStates cookingTotal={cookingItems.length} order={odrerStates.length}></ThreeStates>
            <section className='container grid grid-cols-12 mt-4 p-4 g gap-16 '>
                <div className='col-span-7 space-y-5'>
                    <h1 className='text-2xl font-bold'>Current Orders</h1>

                    <div>
                        {
                            odrerStates.map(item=>
                                <OrderCard handleorder={handleorder} key={item.id} item={item}></OrderCard>
                            )
                        }
                    </div>

                </div>
                <div className='col-span-5 space-y-5'>
                    <h1 className='text-2xl font-bold p-4'>Cookings</h1>
                    <div className='p-10 rounded-xl shadow-xl relative space-y-5'>
                        {
                            cookingItems.map(cook=><CookingCard key={cook.id} cook={cook}></CookingCard>)
                        }

                    </div>
                    <h1 className='text-2xl font-bold p-4'>Ready to serve</h1>
                    <div className='p-10 rounded-xl shadow-xl relative space-y-3'>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default Orders;