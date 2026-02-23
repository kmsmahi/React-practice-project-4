import React from 'react';
import { ScrollText } from 'lucide-react';
import { CookingPot } from 'lucide-react';
import { BookmarkCheck } from 'lucide-react';
const ThreeStates = ({order,cookingTotal,readytotal}) => {
    return <>
    <div className='container flex gap-6 justify-center items-center'>
        <div className='w-80 bg-amber-50/30 border-2 border-dotted border-amber-400/60 rounded-2xl p-6 flex items-center gap-6 mt-10 hover:border-solid hover:bg-amber-50 transition-all duration-300 group'>
  
  {/* Icon Container - Using a solid amber to contrast the dots */}
  <div className='w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform'>
    <ScrollText className="text-white" size={32}/>
  </div>
  
  {/* Content Area */}
  <div className='flex flex-col'>
    <span className='text-xs font-bold text-amber-700 uppercase tracking-widest'>
      Current Orders
    </span>
    <div className='flex items-center gap-2'>
      <h3 className='text-4xl font-black text-slate-800 tracking-tight'>
        {order}
      </h3>
      <div className="badge badge-warning badge-outline badge-xs opacity-70 font-bold">LIVE</div>
    </div>
  </div>
</div>
        <div className='w-80 bg-amber-50/30 border-2 border-dotted border-amber-400/60 rounded-2xl p-6 flex items-center gap-6 mt-10 hover:border-solid hover:bg-amber-50 transition-all duration-300 group'>
  
  {/* Icon Container - Using a solid amber to contrast the dots */}
  <div className='w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform'>
    <CookingPot className="text-white" size={32}/>
  </div>
  
  {/* Content Area */}
  <div className='flex flex-col'>
    <span className='text-xs font-bold text-amber-700 uppercase tracking-widest'>
      Currently Cooking
    </span>
    <div className='flex items-center gap-2'>
      <h3 className='text-4xl font-black text-slate-800 tracking-tight'>
        {cookingTotal}
      </h3>
      <div className="badge badge-warning badge-outline badge-xs opacity-70 font-bold">LIVE</div>
    </div>
  </div>
</div>
        <div className='w-80 bg-amber-50/30 border-2 border-dotted border-amber-400/60 rounded-2xl p-6 flex items-center gap-6 mt-10 hover:border-solid hover:bg-amber-50 transition-all duration-300 group'>
  
  {/* Icon Container - Using a solid amber to contrast the dots */}
  <div className='w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform'>
    <BookmarkCheck className="text-white" size={32}/>
  </div>
  
  {/* Content Area */}
  <div className='flex flex-col'>
    <span className='text-xs font-bold text-amber-700 uppercase tracking-widest'>
      Ready to serve
    </span>
    <div className='flex items-center gap-2'>
      <h3 className='text-4xl font-black text-slate-800 tracking-tight'>
        {readytotal}
      </h3>
      <div className="badge badge-warning badge-outline badge-xs opacity-70 font-bold">LIVE</div>
    </div>
  </div>
</div>
    </div>
    
    </>;
};

export default ThreeStates;