'use client';

import React from 'react';

const galleryData = [
  { id: 1, name: "Gourmet Steak", price: "45.00", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Luxury Seafood", price: "52.00", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "Signature Salad", price: "28.00", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Grilled Platter", price: "35.00", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, name: "Artisan Dessert", price: "18.00", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, name: "Salmon Delight", price: "42.00", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1000&auto=format&fit=crop" },
  { id: 7, name: "Pasta Special", price: "30.00", img: "https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=1000&auto=format&fit=crop" },
];

export default function StaticGallery() {
  const topThree = galleryData.slice(0, 3);
  const bottomFour = galleryData.slice(3, 7);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-5xl font-black text-gray-900 tracking-tighter uppercase">
            CHEF&apos;S <span className="text-orange-600 italic font-light tracking-normal">Signature</span> SELECTION
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl text-lg">
            Experience the art of fine dining with our handpicked culinary masterpieces.
          </p>
        </div>

        {/* Top 3 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {topThree.map((food) => (
            <div key={food.id} className="group relative h-[500px] overflow-hidden rounded-[2.5rem] shadow-xl border border-gray-100 bg-gray-100">
              <img 
                src={food.img} 
                alt={food.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-bold text-white mb-2">{food.name}</h3>
                <p className="text-2xl font-black text-orange-400">${food.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomFour.map((food) => (
            <div key={food.id} className="group relative h-[380px] overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl">
              <img 
                src={food.img} 
                alt={food.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-white/90 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6 text-center translate-y-4 group-hover:translate-y-0">
                <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Exquisite Taste</span>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{food.name}</h4>
                <div className="h-1 w-12 bg-orange-600 mb-4 rounded-full"></div>
                <p className="text-2xl font-black text-[#7A3206] mb-6">${food.price}</p>
                <button className="px-8 py-3 bg-[#7A3206] text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-black transition-all shadow-lg">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}