import React from 'react';

const ReadyCard = ({item}) => {
    return (
        <div
      className="rounded-xl p-5 shadow hover:shadow-lg relative"
      style={{
        background: "linear-gradient(#ffffff90, #FCB700), url('/cook-bg.gif')",
      }}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-primary mb-2">
        {item.order_title}
      </h3>

      {/* Quantity */}
      <p className="text-lg font-semibold">
        Quantity: <span className="text-gray-700">{item.quantity}</span>
      </p>
      <p className="text-lg font-semibold">
        Cooked AT: <span className="text-gray-700">{item.cooking_time}</span>
      </p>

      <div className="absolute right-2 top-2 w-10 h-10 flex justify-center items-center bg-black rounded-full opacity-80 text-white">
        {item.table_no}
      </div>



      
    </div>
    );
};

export default ReadyCard;