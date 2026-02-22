import React, { use } from 'react';
import ThreeStates from '../States/ThreeStates';
import OrderCard from '../Card/card';
const Orders = ({fetchpromise}) => {
    const odrerStates=use(fetchpromise);
    console.log(odrerStates);
    return (
        <div>
            <ThreeStates></ThreeStates>
            <section className='container grid grid-cols-12 mt-4 p-4 g gap-4 '>
                <div className='col-span-7'>
                    <h1 className='text-2xl font-bold'>Current Orders</h1>

                    <div>
                        {
                            odrerStates.map(item=>
                                <OrderCard key={item.id} item={item}></OrderCard>
                            )
                        }
                    </div>

                </div>
                <div className='col-span-5'>
                    <h1 className='text-2xl font-bold'>Cookings</h1>
                </div>

            </section>
        </div>
    );
};

export default Orders;